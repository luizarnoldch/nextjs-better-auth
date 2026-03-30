import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
	const result = await polar.customerPortal.subscriptions.cancel(
		{
			customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
		},
		{
			id: "<value>",
		},
	);

	console.log(result);
}

run();
