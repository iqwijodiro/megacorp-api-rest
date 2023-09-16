import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, username, password } = createUserDto;
    const emailUser = await this.userRepository.findOneBy({ email });
    if (emailUser) {
      throw new ConflictException('Email entered already exists');
    }
    const cryptPassword = await bcrypt.hash(password, 10);
    const newUser = this.userRepository.create({
      email,
      username,
      password: cryptPassword
    });
    return await this.userRepository.save(newUser);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const userSearched = await this.userRepository.findOneBy({ id });
    if (!userSearched) {
      throw new NotFoundException('User was not found');
    }
    return userSearched;
  }

  async findOneByEmail(email: string) {
    return this.userRepository.findOne({
      where: { email },
      select: ['id', 'username', 'email', 'password', 'role'],
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
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

  async remove(id: number): Promise<string> {
    const userRemoved = await this.userRepository.findOneBy({ id });
    await this.userRepository.remove(userRemoved);
    return 'User removed';
  }
}
