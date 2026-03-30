import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
	const result = await polar.checkouts.clientUpdate({
		clientSecret: "<value>",
		checkoutUpdatePublic: {
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
