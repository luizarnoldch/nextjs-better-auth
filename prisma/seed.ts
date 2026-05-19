import { randomUUID } from 'node:crypto';
import { hashPassword } from '@/lib/auth/email-password/password';
import config from '@/lib/config';
import s3Client from '@/lib/minio';
import prisma from '@/lib/prisma';

async function _insertPublicAssets(_bucketName: string) {
  return;
}

async function insertPrivateDefaultImages(_bucketName: string) {
  return;
}

const getPublicReadPolicy = (bucketName: string) => {
  return JSON.stringify({
    Version: '2012-10-17',
    Statement: [
      {
        Sid: 'PublicReadGetObject',
        Effect: 'Allow',
        Principal: '*',
        Action: ['s3:GetObject'],
        Resource: [`arn:aws:s3:::${bucketName}/*`],
      },
    ],
  });
};

async function createBucket(bucketName: string, bucketRegion: string) {
  try {
    const bucketExists = await s3Client.bucketExists(bucketName);
    if (!bucketExists) {
      await s3Client.makeBucket(bucketName, bucketRegion);
      console.log(`Bucket ${bucketName} created.`);
    } else {
      console.log(`Bucket ${bucketName} already exists.`);
    }
  } catch (error: unknown) {
    const code = typeof error === 'object' && error && 'code' in error ? (error as { code?: string }).code : undefined;
    if (code === 'BucketAlreadyOwnedByYou' || code === 'BucketAlreadyExists') {
      console.log(`Bucket ${bucketName} already exists.`);
    } else {
      console.error('Error creating bucket:', error);
      throw error;
    }
  }
}

async function seedAdminUser() {
  const adminEmail = 'luizarnoldch@gmail.com';
  const adminName = 'Admin';
  const adminPassword = '123456789';

  const existing = await prisma.user.findUnique({ where: { email: adminEmail } });
  if (existing) {
    console.log(`Admin user already exists: ${adminEmail}`);
    return;
  }

  const userId = randomUUID();
  const now = new Date();
  const passwordHash = await hashPassword(adminPassword);

  await prisma.user.create({
    data: {
      id: userId,
      name: adminName,
      email: adminEmail,
      emailVerified: true,
      role: 'admin',
      createdAt: now,
      updatedAt: now,
    },
  });

  await prisma.account.create({
    data: {
      id: randomUUID(),
      userId,
      accountId: userId,
      providerId: 'credential',
      password: passwordHash,
      createdAt: now,
      updatedAt: now,
    },
  });

  console.log(`Admin user seeded: ${adminEmail}`);
}

async function main() {
  await createBucket(config.minio.bucketName, config.minio.region);
  try {
    const policy = getPublicReadPolicy(config.minio.bucketName);
    await s3Client.setBucketPolicy(config.minio.bucketName, policy);
    console.log(`Bucket policy applied for ${config.minio.bucketName}.`);
  } catch (error: unknown) {
    console.error('Error setting bucket policy:', error);
  }

  await insertPrivateDefaultImages(config.minio.bucketName);
  await seedAdminUser();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
