import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { RolesService } from './../roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { roles } from 'src/const/roles-const';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User, private roleService: RolesService) { }

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue(roles.USER);
        await user.$set('roles', [role.id]);
        user.roles = [role];
        return user;
    }

    async createAdmin() {
        const userB: CreateUserDto = { name: "admin", login: "admin", password: "rootpassword" }
        const user = await this.userRepository.create(userB);
        const role = await this.roleService.getRoleByValue(roles.ADMIN);
        await user.$set('roles', [role.id]);
        user.roles = [role];
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({ include: { all: true } });
        return users;
    }

    async getUserByLogin(login: string) {
        const user = await this.userRepository.findOne({ where: { login }, include: { all: true } });
        console.log(user)
        return user;
    }

    async addRole(dto: AddRoleDto) {
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);

        if (role && user) {
            await user.$add('role', role.id);
            return dto;
        }

        throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND)
    }
}
