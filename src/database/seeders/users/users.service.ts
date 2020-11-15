import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from 'src/modules/users/interfaces/user.interface';
import { User, UserDocument } from 'src/modules/users/schemas/user.schema';
import { users } from './data';

@Injectable()
export class UserSeederService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

  create(): Array<Promise<User>> {
    return users.map(async (user: IUser) => {
      return await this.userModel
        .findOne({ username: user.username })
        .exec()
        .then(async (dbUser) => {
          if (dbUser) {
            return Promise.resolve(null);
          }
          return Promise.resolve(await this.userModel.create(user));
        })
        .catch((error) => Promise.reject(error));
    });
  }
}
