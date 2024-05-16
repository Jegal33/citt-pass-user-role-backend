import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post('create-role')
  @MessagePattern("createRole")// se comunica con la api por medio de message pattern
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.createRole(createRoleDto);
  }

  @Get('/find-all-roles')
  @MessagePattern("findAllRoles")
  findAll() {
    return this.roleService.findAllRoles();
  }

  @Get('/find-one-role/:id') 
  @MessagePattern('findOneRole')
  findOne(id: string) {
    return this.roleService.findOneRole(id);
  }

  @Patch('/update-role/:id')
  @MessagePattern('updateRole')
  updateRole(payload) { 
    console.log(payload) 
    return this.roleService.updateRole(payload.id, payload.updateRoleDto);
  }

  @Delete('/delete-role/:id')
  @MessagePattern('removeRole')
  remove(id: string) {
    return this.roleService.removeRole(id);
  }
}
