import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
	const result = await polar.customerPortal.licenseKeys.activate({
		key: "<key>",
		organizationId: "<value>",
		label: "<value>",
	});

	console.log(result);
}

run();
