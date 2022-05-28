import { Controller, Get, Param, Query } from '@nestjs/common';
import { plainToClass, plainToInstance } from 'class-transformer';
import { firstValueFrom } from 'rxjs';
import { ListCommit } from './entities/list_commit.entity';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
    constructor(private githubService: GithubService) {}

    @Get()
    async getCommits(@Query('page') page: string) {
        page = page || "1";
        const data =  firstValueFrom(await this.githubService.getCommits(page));
        return plainToClass(ListCommit, data, {excludeExtraneousValues: true});
    }

    @Get(':id')
    async getCommitDetails(@Param('id') id: string) {
        return this.githubService.getCommitDetails(id);
    }
}
