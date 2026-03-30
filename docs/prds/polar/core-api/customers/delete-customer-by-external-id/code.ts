import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
	accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
	await polar.customers.deleteExternal({
		externalId: "<id>",
	});
}

run();
