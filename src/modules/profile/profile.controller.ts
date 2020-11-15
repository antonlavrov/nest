import { Body, Controller, Get, Post, Request, UseGuards, ValidationPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { LoginDto } from './dto/login.dto';

@Controller()
@ApiTags('profile')
export class ProfileController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Body(new ValidationPipe()) loginDto: LoginDto): Promise<{ access_token: any }> {
    return this.authService.login(loginDto);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  getProfile(@Request() request: any) {
    return request.user;
  }
}
