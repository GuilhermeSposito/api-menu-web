import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AdminsService } from 'src/admins/admins.service';
import { AdminRepository } from 'src/admins/adminRepository';

@Module({
  imports: [JwtModule.registerAsync({
    global: true,
    imports: [],
    useFactory: async (configService: ConfigService) => ({
      secret: configService.get<string>("JWT_SECRET"),
      signOptions: { expiresIn: parseInt(configService.get<string>("JWT_EXPIRATION")!, 10) }
    }),
    inject: [ConfigService]
  })],
  controllers: [AuthController],
  providers: [AuthService, AdminsService, AdminRepository],
})
export class AuthModule { }
