import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
	accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
	const result = await polar.files.uploaded({
		id: "<value>",
		fileUploadCompleted: {
			id: "<id>",
			path: "/boot",
			parts: [
				{
					number: 979613,
					checksumEtag: "<value>",
					checksumSha256Base64: "<value>",
				},
				{
					number: 979613,
					checksumEtag: "<value>",
					checksumSha256Base64: "<value>",
				},
				{
					number: 979613,
					checksumEtag: "<value>",
					checksumSha256Base64: "<value>",
				},
			],
		},
	});

	console.log(result);
}

run();
