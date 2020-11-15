import { Injectable, Logger } from '@nestjs/common';
import { UserSeederService } from './users/users.service';

@Injectable()
export class Seeder {
  constructor(private readonly logger: Logger, private readonly userSeederService: UserSeederService) {}
  async seed() {
    await this.languages()
      .then((completed) => {
        this.logger.debug('Successfully completed seeding users...');
        Promise.resolve(completed);
      })
      .catch((error) => {
        this.logger.error('Failed seeding users...');
        Promise.reject(error);
      });
  }
  async languages() {
    return await Promise.all(this.userSeederService.create())
      .then((createdUsers) => {
        this.logger.debug(
          `No. of users created : ${createdUsers.filter((nullValueOrCreatedUser) => nullValueOrCreatedUser).length}`,
        );
        return Promise.resolve(true);
      })
      .catch((error) => Promise.reject(error));
  }
}
