import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [
        JwtModule.register({
            secret: process.env.PRIVATE_KEY || 'SECRET',
            signOptions: {
                expiresIn: '24h'
            }
        }),
        forwardRef(() => UsersModule)
    ],
    exports: [
        AuthService,
        JwtModule
    ]
})
export class AuthModule { }
