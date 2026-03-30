import { Polar } from '@polar-sh/sdk';
import config from './config';

const polar = new Polar({
  accessToken: config.polar.accessToken,
  server: config.polar.environment === 'production' ? 'production' : 'sandbox',
});

export default polar;
