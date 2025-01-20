import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("hello")
  hello(@Req() req: Request) {
    console.log(req);
  }

  @Post("test")
  test(@Req() req: Request) {
    console.log(req);
  }
}
