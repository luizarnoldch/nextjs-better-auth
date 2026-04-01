import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
	accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
	const result = await polar.meters.quantities({
		id: "<value>",
		startTimestamp: new Date("2025-11-25T04:37:16.823Z"),
		endTimestamp: new Date("2025-11-26T17:06:00.727Z"),
		interval: "day",
	});

	console.log(result);
}

run();
