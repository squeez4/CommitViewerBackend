import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubModule } from './github/github.module';

@Module({
  imports: [GithubModule, 
    ConfigModule.forRoot({isGlobal: true}),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 200,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
