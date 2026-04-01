import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
	accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
	const result = await polar.organizations.create({
		name: "<value>",
		slug: "<value>",
	});

	console.log(result);
}

run();
