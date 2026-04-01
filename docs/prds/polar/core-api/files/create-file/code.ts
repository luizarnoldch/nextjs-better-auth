import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
	accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
	const result = await polar.files.create({
		organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
		name: "<value>",
		mimeType: "<value>",
		size: 612128,
		upload: {
			parts: [],
		},
		service: "downloadable",
	});

	console.log(result);
}

run();
