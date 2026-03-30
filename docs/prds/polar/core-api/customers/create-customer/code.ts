import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
	accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
	const result = await polar.customers.create({
		externalId: "usr_1337",
		email: "customer@example.com",
		name: "John Doe",
		billingAddress: {
			country: "US",
		},
		locale: "en",
		type: "individual",
		organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
		owner: {
			email: "member@example.com",
			name: "Jane Doe",
			externalId: "usr_1337",
		},
	});

	console.log(result);
}

run();
