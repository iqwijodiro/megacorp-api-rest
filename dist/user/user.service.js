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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createUserDto) {
        const { email, username, password } = createUserDto;
        const emailUser = await this.userRepository.findOneBy({ email });
        if (emailUser) {
            throw new common_1.ConflictException('Email entered already exists');
        }
        const cryptPassword = await bcrypt.hash(password, 10);
        const newUser = this.userRepository.create({
            email,
            username,
            password: cryptPassword
        });
        return await this.userRepository.save(newUser);
    }
    async findAll() {
        return await this.userRepository.find();
    }
    async findOne(id) {
        const userSearched = await this.userRepository.findOneBy({ id });
        if (!userSearched) {
            throw new common_1.NotFoundException('User was not found');
        }
        return userSearched;
    }
    async findOneByEmail(email) {
        return this.userRepository.findOne({
            where: { email },
            select: ['id', 'username', 'email', 'password', 'role'],
        });
    }
    async update(id, updateUserDto) {
        const userEdited = await this.userRepository.findOneBy({ id });
        const { email, username } = updateUserDto;
        if (email) {
            userEdited.email = email;
        }
        if (username) {
            userEdited.username = username;
        }
        if (updateUserDto.password) {
            userEdited.password = updateUserDto.password;
        }
        return this.userRepository.save(userEdited);
    }
    async remove(id) {
        const userRemoved = await this.userRepository.findOneBy({ id });
        await this.userRepository.remove(userRemoved);
        return 'User removed';
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map