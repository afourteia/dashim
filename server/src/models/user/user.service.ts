import { Injectable } from '@nestjs/common';
// import { PrismaService } from 'nestjs-prisma';
import { EmailAndPasswordType } from './user.dto';
import { PrismaService } from '../../common/prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createOne(user: EmailAndPasswordType) {
    const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);
    if (!user.email) {
      throw new Error('Email is required');
    }
    return await this.prisma.user.create({
      data: user,
    });
  }

  async findMany() {
    console.log('findMany from user.service.ts');
    return await this.prisma.user.findMany();
  }

  // async findUserByEmail(email: string) {
  //   return this.prisma.user.findUnique({
  //     where: { email },
  //   });
  // }

  // async validateUserPassword(email: string, password: string) {
  //   const user = await this.findUserByEmail(email);
  //   if (!user) {
  //     return false;
  //   }
  //   const isPasswordValid = await bcrypt.compare(password, user.password);
  //   return isPasswordValid ? user : null;
  // }
}
