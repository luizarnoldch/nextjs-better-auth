import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.refunds.create({
    orderId: "<value>",
    reason: "customer_request",
    amount: 90,
  });

  console.log(result);
}

run();