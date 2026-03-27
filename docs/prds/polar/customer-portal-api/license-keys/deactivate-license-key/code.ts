import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
  await polar.customerPortal.licenseKeys.deactivate({
    key: "<key>",
    organizationId: "<value>",
    activationId: "<value>",
  });


}

run();