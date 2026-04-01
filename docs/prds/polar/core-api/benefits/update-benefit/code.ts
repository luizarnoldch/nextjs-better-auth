import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
	accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
	const result = await polar.benefits.update({
		id: "<value>",
		requestBody: {
			type: "custom",
		},
	});

	console.log(result);
}

run();
