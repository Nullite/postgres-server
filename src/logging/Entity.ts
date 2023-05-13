import { Column } from "typeorm/decorator/columns/Column"
import { Entity } from "typeorm/decorator/entity/Entity"

@Entity("users")
export class User {
    @Column({ primary: true })
    login: string

    @Column()
    password: string

}