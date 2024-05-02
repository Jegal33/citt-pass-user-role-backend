import { Module } from '@nestjs/common';
import { UserRoleService } from './user_role.service';
import { UserRoleController } from './user_role.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRoleSchema } from './entities/user_role.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'UserRole', schema: UserRoleSchema }])],
  controllers: [UserRoleController],
  providers: [UserRoleService],
})
export class UserRoleModule {}
