import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class SessionMiddleware implements NestMiddleware {
  use(req: any, res: Response, next: () => void) {
    console.log(req.session.uuid);
    if (!req.session.uuid) {
      throw new HttpException('Session is not init', HttpStatus.BAD_REQUEST);
    }
    next();
  }
}
