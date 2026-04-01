import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
	const result = await polar.customerSeats.getClaimInfo({
		invitationToken: "<value>",
	});

	console.log(result);
}

run();
