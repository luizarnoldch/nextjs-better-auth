import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
  const result = await polar.customerPortal.licenseKeys.validate({
    key: "<key>",
    organizationId: "<value>",
  });

  console.log(result);
}

run();