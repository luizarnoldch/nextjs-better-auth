import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
	const result = await polar.checkouts.clientGet({
		clientSecret: "<value>",
	});

	console.log(result);
}

run();
