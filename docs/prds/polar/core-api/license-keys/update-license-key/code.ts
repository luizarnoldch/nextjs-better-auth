import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
	accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
	const result = await polar.licenseKeys.update({
		id: "<value>",
		licenseKeyUpdate: {},
	});

	console.log(result);
}

run();
