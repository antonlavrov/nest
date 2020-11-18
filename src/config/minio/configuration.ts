import { registerAs } from '@nestjs/config';

export default registerAs('minio', () => ({
  uri: process.env.MINIO_URI,
  port: process.env.MINIO_PORT,
  use_ssl: process.env.MINIO_USE_SSL,
  access_key: process.env.MINIO_ACCESS_KEY,
  secret_key: process.env.MINIO_SECRET_KEY,
}));
