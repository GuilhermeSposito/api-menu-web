import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminDto } from './dtos/admin.dto';
import { User } from './admin.decorator';
import { Admin } from 'src/database/entities/admin.entity';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) { }

  @Post()
  async CreateAdmin(@Body() adminDto: AdminDto) {
    return await this.adminsService.Create(adminDto)
  }

  @UseGuards(AuthGuard)
  @Get('admin')
  async getAdminLogado(@User() admin: Admin) {
    return await this.adminsService.retornaAdminLogado(admin)
  }
}
