"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const bcrypt = require("bcrypt");
const bcryptjs = require("bcryptjs");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async register({ password, email, username }) {
        const user = await this.userService.findOneByEmail(email);
        if (user) {
            throw new common_1.BadRequestException('Email already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await this.userService.create({
            username,
            email,
            password: hashedPassword
        });
        return {
            message: 'User created successfully',
        };
    }
    async login({ email, password }) {
        const user = await this.userService.findOneByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid email');
        }
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid password');
        }
        const payload = { email: user.email, role: user.role };
        const token = this.jwtService.sign(payload);
        return {
            token,
            email
        };
    }
    async profile({ email, role }) {
        if (role !== 'admin') {
            throw new common_1.UnauthorizedException('You are not admin, not authorized to access');
        }
        return await this.userService.findOneByEmail(email);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map