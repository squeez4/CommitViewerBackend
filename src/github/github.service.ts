import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { ListCommit } from './interface/list_commit.interface';

@Injectable()
export class GithubService {
    constructor(private readonly httpService: HttpService) {

    }

    getCommits(page: string): Observable<ListCommit[]> {
        return this.httpService.get<ListCommit[]>(`/commits?page=${page}`).pipe(
            map(response => response.data)
        )
    }

    getCommitDetails(id: string) {
        return this.httpService.get(`/commits/${id}`).pipe(
            map(response => response.data)
        );
    }
}
