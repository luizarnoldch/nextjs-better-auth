import { Polar } from "@polar-sh/sdk"
import config from "./config"

const polarClient = new Polar({
  accessToken: config.polar.accessToken,
  server: config.polar.environment as "production" | "sandbox"
})

export default polarClient