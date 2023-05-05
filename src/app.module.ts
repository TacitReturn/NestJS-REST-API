import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaNoSpecService } from './prisma--no-spec/prisma--no-spec.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, BookmarkModule, AuthModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaNoSpecService],
})
export class AppModule {}
