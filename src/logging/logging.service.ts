import { Injectable } from "@nestjs/common";
import { User } from "./Entity";
import { LogRepository } from "./logging.repository";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class logService {
    constructor (private readonly repository: LogRepository, private readonly jwtService: JwtService) {}

    async compareUserPass(query: User) : Promise<boolean> {
        const compare: User = await this.repository.getUser(query.login)

        if (compare && query.password === compare.password) {
            return true
        }
        return false
    }

    async login(user: User) {
        const payload = { login: user.login };
        return {
          access_token: this.jwtService.sign(payload),
        }
    }
}