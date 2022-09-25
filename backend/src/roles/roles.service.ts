import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { roles } from 'src/const/roles-const';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';

@Injectable()
export class RolesService {

    constructor(@InjectModel(Role) private roleRepository: typeof Role) {

    }

    async createRole(dto: CreateRoleDto) {
        const role = await this.roleRepository.create(dto);
        return role;
    }

    async getRoleByValue(value: string) {
        let role = await this.roleRepository.findOne({ where: { value } });

        return role;
    }

    async makeAllRoles() {
        for (let role in roles) {
            const roleB = await this.roleRepository.findOne({ where: { value: role } })
            // console.log(roleB)
            if (!roleB) {
                const roleD: CreateRoleDto = { value: role };
                await this.roleRepository.create(roleD);
            }
        }
    }
}
