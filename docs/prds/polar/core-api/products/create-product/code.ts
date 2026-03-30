import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
	accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
	const result = await polar.products.create({
		name: "<value>",
		prices: [
			{
				amountType: "fixed",
				priceCurrency: "usd",
				priceAmount: 677078,
			},
			{
				amountType: "free",
			},
		],
		organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
		recurringInterval: "year",
	});

	console.log(result);
}

run();
