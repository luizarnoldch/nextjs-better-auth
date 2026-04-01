import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
	accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
	const result = await polar.benefits.grants({
		id: "<value>",
	});

	for await (const page of result) {
		console.log(page);
	}
}

run();
