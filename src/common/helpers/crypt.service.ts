import { Injectable } from '@nestjs/common';
import crypto from 'crypto';

@Injectable()
export class BcryptService {
  async make(data: string): Promise<any | null> {
    const cipher = crypto.(process.env.CRYPTO_ALGORITHM, process.env.CRYPTO_SECRET, null);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }

  async check(data: string): Promise<any | null> {
    const decipher = crypto.createDecipheriv(process.env.CRYPTO_ALGORITHM, process.env.CRYPTO_SECRET, null);
    const encrypted = data;
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }

  async remake(data: string): Promise<any | null> {
    const decipher = crypto.createDecipheriv(process.env.CRYPTO_ALGORITHM, process.env.CRYPTO_SECRET, null);
    const encrypted = data;
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }
}
