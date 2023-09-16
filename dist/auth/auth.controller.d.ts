import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';
import { Request } from 'express';
interface RequestWithUser extends Request {
    user: {
        email: string;
        role: string;
    };
}
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<{
        message: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        token: string;
        email: string;
    }>;
    profile(req: RequestWithUser): Promise<import("../user/entities/user.entity").User>;
}
export {};
