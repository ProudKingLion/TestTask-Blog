import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { User } from 'src/users/users.model';
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

    @ApiOperation({ summary: 'Создать админа !Для теста!' })
    @ApiResponse({ status: 200, type: User })
    // @UsePipes(ValidationPipe)
    @Post('make-admin')
    createAdmin() {
        return this.authService.registrateAdmin();
    }
}
