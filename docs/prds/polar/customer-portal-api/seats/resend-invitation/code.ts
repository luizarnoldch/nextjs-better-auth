import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
  const result = await polar.customerPortal.seats.resendInvitation({
    customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
  }, {
    seatId: "e3817437-8d53-4578-88d2-1dc256825965",
  });

  console.log(result);
}

run();