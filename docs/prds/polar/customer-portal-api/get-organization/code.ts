import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
	const result = await polar.customerPortal.organizations.get({
		slug: "<value>",
	});

	console.log(result);
}

run();
