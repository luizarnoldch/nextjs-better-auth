import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
	const result = await polar.customerSeats.claimSeat({
		invitationToken: "<value>",
	});

	console.log(result);
}

run();
