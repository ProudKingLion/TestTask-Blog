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
        // console.log({ token, user })
        return { token: token, user: user };
    }


    async registration(userDto: CreateUserDto) {
        const candidate = await this.userService.getUserByLogin(userDto.login);
        if (candidate) {
            throw new HttpException('Пользователь с таким login существует', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.userService.createUser({ ...userDto, password: hashPassword });
        return this.generateToken(user);
    }

    async refresh(userCheckDto: AuthCheckDto) {
        try {
            const user = await this.jwtService.verify(userCheckDto.token)
            // console.log("DECODED USER");
            console.log(user)
            // console.log(decodedUser instanceof Object)
            // console.log("DECODED USER");
            // if (decodedUser instanceof Object) console.log('login' in decodedUser)
            // if (!decodedUser || !(decodedUser instanceof Object && 'login' in decodedUser)) throw new HttpException('Неправильный токен', HttpStatus.BAD_REQUEST)
            // const login = JSON.parse(decodedUser).login
            console.log("GO");

            // const user = await this.validateUserByToken(decodedUser.login, userCheckDto.token);
            // console.log(await this.jwtService.decode(userCheckDto.token))
            const token = await this.generateToken(user);
            // console.log({ token, user })
            return { token, user: user };
        } catch (e) {
            throw new UnauthorizedException({ message: 'Пользователь не авторизован' })
        }
    }

    private async generateToken(user: User) {
        const payload = { login: user.login, id: user.id, roles: user.roles };

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
        // console.log("EHAT")
        const user = await this.userService.getUserByLogin(login);
        // console.log(user)
        if (!user) throw new UnauthorizedException({ message: 'Некорректный login или токен' });
        // console.log("SAD")
        // console.log(this.jwtService.verify(token));
        // console.log("fsdf")
        const passwordEquals = await bcrypt.compare(token, user.password);
        console.log(passwordEquals)
        if (user && passwordEquals) {
            return user;
        }

        throw new UnauthorizedException({ message: 'Некорректный login или пароль' });
    }
}
