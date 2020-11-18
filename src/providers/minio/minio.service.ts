import { Injectable } from '@nestjs/common';
import { BucketItem, Client } from 'minio';
import { MinioConfigService } from 'src/config/minio/configuration.service';

@Injectable()
export class MinioService {
  private readonly client: Client;

  constructor(private readonly minioConfigService: MinioConfigService) {
    this.client = new Client({
      endPoint: this.minioConfigService.uri,
      port: this.minioConfigService.port,
      useSSL: this.minioConfigService.useSsl,
      accessKey: this.minioConfigService.accessKey,
      secretKey: this.minioConfigService.secretKey,
    });
  }

  async getFile(bucket: string, file: string): Promise<string> {
    const arr: Buffer[] = [];
    return new Promise((resolve, reject) => {
      this.client.getObject(bucket, file, (error: Error, stream) => {
        if (error) {
          reject(error);
          return;
        }
        stream.on('data', (chunk: Buffer) => {
          arr.push(chunk);
        });
        stream.on('end', () => {
          resolve(Buffer.concat(arr).toString('base64'));
        });
        stream.on('error', (error: Error) => {
          reject(error);
        });
      });
    });
  }

  async listFiles(bucket: string, prefix?: string): Promise<string[]> {
    const arr: string[] = [];
    const stream = this.client.listObjects(bucket, prefix);
    return new Promise((resolve, reject) => {
      stream.on('data', (obj: BucketItem) => {
        arr.push(obj.name);
      });
      stream.on('end', () => {
        resolve(arr);
      });
      stream.on('error', (error: Error) => {
        reject(error);
      });
    });
  }

  async makeBucket(bucket: string): Promise<void> {
    return this.client.makeBucket(bucket, 'us-east-1');
  }

  async getPresignedPutFile(bucket: string, file: string, expiry: number): Promise<string> {
    return this.client.presignedPutObject(bucket, file, expiry);
  }

  async bucketExists(bucket: string): Promise<boolean> {
    return this.client.bucketExists(bucket);
  }
}
