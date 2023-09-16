import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    register({ password, email, username }: RegisterDto): Promise<{
        message: string;
    }>;
    login({ email, password }: LoginDto): Promise<{
        token: string;
        email: string;
    }>;
    profile({ email, role }: {
        email: string;
        role: string;
    }): Promise<import("../user/entities/user.entity").User>;
}
