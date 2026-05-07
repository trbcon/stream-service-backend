import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class SessionsService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async login() {}

  public async logout() {}
}
