import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/users/users.model';
import { LoinUserDto } from './dto/login-user.dto';
import { AuthCheckDto } from './dto/auth-token.dto';
import { CheckTokenUserDto } from './dto/check-token-user.dto';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService,
        private jwtService: JwtService) { }

    async login(userDto: LoinUserDto) {
        const user = await this.validateUserByPassword(userDto);
        const token = await this.generateToken(user);

        return { token: token, user: user };
    }


    async registration(userDto: CreateUserDto) {
        const candidate = await this.userService.getUserByLogin(userDto.login);
        if (candidate) {
            throw new HttpException('Пользователь с таким login существует', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.userService.createUser({ ...userDto, password: hashPassword });
        const token = await this.generateToken(user);

        return { token: token, user: user };
    }

    async registrateAdmin() {
        const candidate = await this.userService.getUserByLogin("admin");
        if (candidate) {
            throw new HttpException('Пользователь с таким login существует', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash("rootpassword", 5);
        const user = await this.userService.createAdmin({ login: "admin", name: "admin", password: hashPassword });
        const token = await this.generateToken(user);

        return { token: token, user: user };
    }


    async refresh(userCheckDto: AuthCheckDto) {
        try {
            const user = await this.jwtService.verify(userCheckDto.token)
            const token = await this.generateToken(user);

            return { token, user: user };
        } catch (e) {
            throw new UnauthorizedException({ message: 'Пользователь не авторизован' })
        }
    }

    private async generateToken(user: User) {
        const payload = { login: user.login, name: user.name, id: user.id, roles: user.roles };

        return this.jwtService.sign(payload)

    }

    private async validateUserByPassword(userDto: LoinUserDto) {
        const user = await this.userService.getUserByLogin(userDto.login);
        // console.log(user)
        if (!user) throw new UnauthorizedException({ message: 'Некорректный login или пароль' });
        // console.log("SAD")
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);

        if (user && passwordEquals) {
            return user;
        }

        throw new UnauthorizedException({ message: 'Некорректный login или пароль' });
    }

    private async validateUserByToken(login: string, token: string) {
        const user = await this.userService.getUserByLogin(login);
        if (!user) throw new UnauthorizedException({ message: 'Некорректный login или токен' });

        const passwordEquals = await bcrypt.compare(token, user.password);
        if (user && passwordEquals) {
            return user;
        }

        throw new UnauthorizedException({ message: 'Некорректный login или пароль' });
    }
}
