import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
  const result = await polar.customerPortal.customers.get({
    customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
  });

  console.log(result);
}

run();