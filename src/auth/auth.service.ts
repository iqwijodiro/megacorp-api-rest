import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import * as bcryptjs from 'bcryptjs';


@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register({ password, email, username }: RegisterDto) {
    const user = await this.userService.findOneByEmail(email);

    if (user) {
      throw new BadRequestException('Email already exists');
    }

    const hashedPassword: string = await bcrypt.hash(password, 10);

    await this.userService.create({
      username,
      email,
      password: hashedPassword
    });

    return {
      message: 'User created successfully',
    };
  }

  async login({ email, password }: LoginDto) {
    const user = await this.userService.findOneByEmail(email);
    
    if (!user) {
      throw new UnauthorizedException('Invalid email');
    }


    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload = { email: user.email, role: user.role };
    const token = this.jwtService.sign(payload);

    return {
      token,
      email
    };
  }

  async profile({ email, role }: { email: string, role: string}) {

    if (role !== 'admin') {
      throw new UnauthorizedException('You are not admin, not authorized to access')
    }
    return await this.userService.findOneByEmail(email);
  }
}
