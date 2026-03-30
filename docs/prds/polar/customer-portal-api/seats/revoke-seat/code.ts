import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
	const result = await polar.customerPortal.seats.revokeSeat(
		{
			customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
		},
		{
			seatId: "4b3d74b3-01ff-4aac-bd03-320535cd5ce4",
		},
	);

	console.log(result);
}

run();
