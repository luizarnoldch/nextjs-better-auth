import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
	accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
	const result = await polar.products.updateBenefits({
		id: "<value>",
		productBenefitsUpdate: {
			benefits: ["<value 1>", "<value 2>", "<value 3>"],
		},
	});

	console.log(result);
}

run();
