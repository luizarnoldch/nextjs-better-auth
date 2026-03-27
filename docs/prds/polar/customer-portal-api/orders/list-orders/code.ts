import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
  const result = await polar.customerPortal.orders.list({
    customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
  }, {});

  for await (const page of result) {
    console.log(page);
  }
}

run();