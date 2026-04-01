import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
	accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
	const result = await polar.orders.update({
		id: "<value>",
		orderUpdate: {
			billingAddress: {
				country: "US",
			},
		},
	});

	console.log(result);
}

run();
