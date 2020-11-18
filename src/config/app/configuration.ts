import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  env: process.env.APP_ENV,
  name: process.env.APP_NAME,
  url: process.env.APP_URL,
  port: process.env.APP_PORT,
  secret: process.env.APP_SECRET,
  session_max_age: process.env.APP_SESSION_MAX_AGE,
  api_debug: process.env.APP_API_DEBUG,
}));
