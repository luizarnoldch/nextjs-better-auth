import "dotenv/config";
import polar from "@/lib/polar";
import prisma from "@/lib/prisma";
import { ProductPrice } from "@polar-sh/sdk/models/components/productprice.js";
import { LegacyRecurringProductPrice } from "@polar-sh/sdk/models/components/legacyrecurringproductprice.js";

function isFreeProdct(
  product: (LegacyRecurringProductPrice | ProductPrice)[],
): boolean {
  for (const price of product) {
    if (price.amountType !== "free") {
      return false;
    }
  }
  return true;
}

async function main() {
  const polarProducts = await polar.products.list({
    page: 1,
    limit: 100,
    isArchived: false,
    isRecurring: true,
  });

  for (const product of polarProducts.result.items ?? []) {
    await prisma.subscription.upsert({
      where: { polarProductId: product.id },
      update: {
        name: product.name,
        description: product.description,
        trialInterval: product.trialInterval,
        trialIntervalCount: product.trialIntervalCount,
        visibility: product.visibility,
        recurringInterval: product.recurringInterval,
        recurringIntervalCount: product.recurringIntervalCount,
        metadata: product.metadata,
        benefits: product.benefits,
        prices: product.prices,
        isFree: isFreeProdct(product.prices),
        isRecurring: product.isRecurring,
        isArchived: product.isArchived,
        polarOrganizationId: product.organizationId,
      },
      create: {
        id: product.id,
        name: product.name,
        description: product.description,
        trialInterval: product.trialInterval,
        trialIntervalCount: product.trialIntervalCount,
        visibility: product.visibility,
        recurringInterval: product.recurringInterval,
        recurringIntervalCount: product.recurringIntervalCount,
        metadata: product.metadata,
        benefits: product.benefits,
        prices: product.prices,
        isFree: isFreeProdct(product.prices),
        isRecurring: product.isRecurring,
        isArchived: product.isArchived,
        polarProductId: product.id,
        polarOrganizationId: product.organizationId,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
