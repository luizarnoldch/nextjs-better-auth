import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.customers.update({
    id: "<value>",
    customerUpdate: {
      email: "customer@example.com",
      name: "John Doe",
      billingAddress: {
        country: "US",
      },
      locale: "en",
      externalId: "usr_1337",
      type: "individual",
    },
  });

  console.log(result);
}

run();