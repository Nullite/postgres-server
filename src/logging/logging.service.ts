import { Injectable } from "@nestjs/common";
import { User } from "./Entity";
import { LogRepository } from "./logging.repository";

@Injectable()
export class logService {
    constructor (private readonly repository: LogRepository)
    {}

    async compareUserPass(query: User){
        const compare: User = await this.repository.getUser(query.login)

        if (compare && query.password === compare.password) {
            return 'logged'
        }
        return 'fail'
    }
}