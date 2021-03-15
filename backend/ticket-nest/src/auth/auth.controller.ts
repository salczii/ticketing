import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/auth';

@Controller('api')
export class AuthController {
  @Get('users/currentuser')
  getCurrentUser(): string {
    return 'current user';
  }
  @Post('users/signup')
  signUp(@Body() createUserDto: CreateUserDto): CreateUserDto {
    return {
      email: createUserDto.email,
      password: createUserDto.password,
    };
  }
  @Post('users/signin')
  signIn(): string {
    return 'hi there';
  }
  @Post('users/signout')
  signOut(): string {
    return 'hi there';
  }
}
