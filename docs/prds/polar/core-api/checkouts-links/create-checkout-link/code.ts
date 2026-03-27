import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.checkoutLinks.create({
    paymentProcessor: "stripe",
    allowDiscountCodes: true,
    requireBillingAddress: false,
    productPriceId: "<value>",
  });

  console.log(result);
}

run();