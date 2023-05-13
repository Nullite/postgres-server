import { Controller, Get, Query } from "@nestjs/common";
import { logService } from "./logging.service";
import { User } from "./Entity";

@Controller()
export class LogController {
  constructor(private readonly service: logService) {}

 @Get('login')
  public async login(@Query() query: User ) {
    return this.service.compareUserPass(query);
  }
}