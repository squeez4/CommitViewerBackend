import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { Commit } from "./commit.entity";

export class ListCommit {
    @Expose()
    @Type(() => Commit)
    commit: Commit;

    @Expose()
    author: object;
  
    @Expose()
    sha: string;

    @Exclude()
    node_id: string;

    @Exclude()
    tree: string;

    constructor(partial: Partial<ListCommit>) {
      Object.assign(this, partial);
    }
}