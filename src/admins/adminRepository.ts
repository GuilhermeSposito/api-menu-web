import { Injectable } from "@nestjs/common";
import { Admin } from "src/database/entities/admin.entity";
import { DataSource, Repository } from "typeorm";

type errorString = {
    id: string
    description: string
}


@Injectable()
export class AdminRepository extends Repository<Admin> {
    constructor(private dataSource: DataSource) {
        super(Admin, dataSource.createEntityManager());
    }


    public errorStrings: errorString[] = [
        { id: 'NotFoundUser', description: 'The current User Was Not Founded' },
        { id: 'EmailExists', description: 'User with this email is already registered' },
        { id: 'IdType', description: `the id's type is not valid` },
        { id: 'ErrorToUpdateaUser', description: `there is some error to update a user, check the sended informations` },
        { id: 'InternalError', description: `there is some error in our server, please contact the suport` },
    ]

    ReturnErrorString(id: string): errorString {
        return this.errorStrings.find(x => x.id == id) ?? { id: "notFoundErrorString", description: "errorStringWasNotFounded" }
    }
}