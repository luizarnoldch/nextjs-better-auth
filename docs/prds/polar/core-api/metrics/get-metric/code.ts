import { Polar } from "@polar-sh/sdk";
import { RFCDate } from "@polar-sh/sdk/types/rfcdate.js";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.metrics.get({
    startDate: new RFCDate("2025-03-14"),
    endDate: new RFCDate("2025-03-18"),
    interval: "hour",
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  });

  console.log(result);
}

run();