import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
	accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
	const result = await polar.customFields.create({
		type: "select",
		slug: "<value>",
		name: "<value>",
		organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
		properties: {
			options: [],
		},
	});

	console.log(result);
}

run();
