import { Expose } from "class-transformer";

export class CommitAuthor {
    @Expose()
    name: string;

    @Expose()
    email: string;

    @Expose()
    date: Date;

    constructor(partial: Partial<CommitAuthor>) {
        Object.assign(this, partial);
    }
}