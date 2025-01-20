import { Controller, Post } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("test")
  test(req: Request) {
    const rs = req;
    console.log(req);
    return rs as any;
  }
}
