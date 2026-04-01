import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
	const result = await polar.customerPortal.subscriptions.update(
		{
			customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
		},
		{
			id: "<value>",
			customerSubscriptionUpdate: {},
		},
	);

	console.log(result);
}

run();
