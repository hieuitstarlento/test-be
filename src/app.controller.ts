import { Controller, Get, Post } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("hello")
  hello(req: Request) {
    const rs = req;
    console.log(req);
    return rs as any;
  }

  @Post("test")
  test(req: Request) {
    const rs = req;
    console.log(req);
    return rs as any;
  }
}
