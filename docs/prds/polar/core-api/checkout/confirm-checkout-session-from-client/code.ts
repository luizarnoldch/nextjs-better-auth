
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.checkouts.clientConfirm({
    clientSecret: "<value>",
    checkoutConfirmStripe: {
      customerName: "John Doe",
      customerBillingAddress: {
        country: "US",
      },
      locale: "en",
    },
  });

  console.log(result);
}

run();