import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.meters.create({
    name: "<value>",
    filter: {
      conjunction: "or",
      clauses: [
        {
          property: "<value>",
          operator: "ne",
          value: "<value>",
        },
      ],
    },
    aggregation: {
      func: "max",
      property: "<value>",
    },
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  });

  console.log(result);
}

run();