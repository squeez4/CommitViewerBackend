export interface Commit {
    author: CommitAuthor;
    commiter: CommitAuthor;
    message: string;
}

export interface CommitAuthor {
    name: string;
    email: string;
    date: Date;
}