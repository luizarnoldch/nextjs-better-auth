import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
	accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
	await polar.checkoutLinks.delete({
		id: "<value>",
	});
}

run();
