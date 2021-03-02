import { Injectable } from '@nestjs/common';
const isOdd = require('is-odd');
@Injectable()
export class AppService {
  getHello(): string {
    console.log(isOdd('1'));
    return 'i am hacker!!!!!!';
  }
}
