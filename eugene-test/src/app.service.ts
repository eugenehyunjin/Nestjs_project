
import { Injectable } from '@nestjs/common';
import { SwaggerCustomOptions } from '@nestjs/swagger';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {
  constructor(private sequelize: Sequelize){}
  getHello(): string {
    return 'get World!';
  }
  postHello(): string {
    return 'post World!';
  }
  putHello(): string {
    return 'put World!';
  }
  deleteHello(): string {
    return 'delete World!';
  }
}