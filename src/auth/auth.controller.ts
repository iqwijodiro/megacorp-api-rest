import { 
  Body,
  Controller, 
  HttpCode, 
  HttpStatus, 
  Get, 
  Post, 
  // UseGuards, 
  Req 
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';
// import { AuthGuard } from './guard/auth.guard';
import { Request } from 'express'
// import { Roles } from './decorators/roles.decorator';
// import { RolesGuard } from './guard/roles.guard';
import { Role } from '../common/enums/role.enum';
import { Auth } from '../common/decorators/auth.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

interface RequestWithUser extends Request{
  user: {
    email: string,
    role: string
  }
}

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Get('profile')
  @ApiBearerAuth()
  @Auth(Role.USER)
  profile(@Req() req: RequestWithUser) {
    return this.authService.profile(req.user);
  }
}
