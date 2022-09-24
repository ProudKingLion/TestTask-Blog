import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { CreateUserDto } from './../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { AuthCheckDto } from './dto/auth-token.dto';
import { LoinUserDto } from './dto/login-user.dto';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('/login')
    login(@Body() userDto: LoinUserDto) {
        // console.log(userDto)
        const ret = this.authService.login(userDto)
        console.log(ret)
        return ret;
    }

    @Post('/refresh')
    checkAuth(@Body() checkAuthDto: AuthCheckDto) {
        console.log(checkAuthDto)
        const ret = this.authService.refresh(checkAuthDto)
        console.log(ret)
        return ret;
    }

    // @UsePipes(ValidationPipe)
    @Post('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto);
    }
}
