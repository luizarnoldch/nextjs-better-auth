import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
	const result = await polar.customerPortal.seats.listSeats(
		{
			customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
		},
		{
			subscriptionId: "<id>",
		},
	);

	console.log(result);
}

run();
