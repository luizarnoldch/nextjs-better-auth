import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
	accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
	const result = await polar.files.update({
		id: "<value>",
		filePatch: {},
	});

	console.log(result);
}

run();
