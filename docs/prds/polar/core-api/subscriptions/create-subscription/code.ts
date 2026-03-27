import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.subscriptions.create({
    productId: "d8dd2de1-21b7-4a41-8bc3-ce909c0cfe23",
    customerId: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
  });

  console.log(result);
}

run();