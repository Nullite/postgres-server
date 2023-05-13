import { Injectable } from "@nestjs/common";
import { User } from "./Entity";
import { Repository } from "typeorm/repository/Repository";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class LogRepository {
  constructor(
    @InjectRepository(User) private repository: Repository<User>,
  ) {}

  async getUser(login: string ) : Promise<User> {
    const user = await this.repository.query
    (`
      Select * from users 
      Where login = '${login}'       
    `)

    return user[0]
  }
}


