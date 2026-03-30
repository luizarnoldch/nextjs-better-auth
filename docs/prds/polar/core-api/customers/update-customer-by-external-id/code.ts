import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
	accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
	const result = await polar.customers.updateExternal({
		externalId: "<id>",
		customerUpdateExternalID: {
			email: "customer@example.com",
			name: "John Doe",
			billingAddress: {
				country: "US",
			},
			locale: "en",
		},
	});

	console.log(result);
}

run();
