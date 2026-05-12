import prisma from '../src/lib/prisma';
import config from '../src/lib/config';

async function main() {
  const adminEmails = config.admin.whitelist;

  if (adminEmails.length === 0) {
    console.log('No admin emails defined in whitelist (ADMIN_EMAILS). Exiting.');
    return;
  }

  console.log(`Found ${adminEmails.length} admin emails in whitelist. Checking for users to upgrade...`);

  const result = await prisma.user.updateMany({
    where: {
      email: {
        in: adminEmails,
      },
      role: {
        not: 'admin',
      }
    },
    data: {
      role: 'admin',
    },
  });

  console.log(`Upgraded ${result.count} existing users to admin role.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });