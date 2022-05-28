import { Commit } from "./commit.interface";

export interface ListCommit {
    readonly commit: Commit;
    readonly url: string;
}

export interface ListCommitAuthor {
    login: string;
    id: string;
    avatar_url: string;
}