import { Expose } from "class-transformer";
import { CommitAuthor } from "./commit_author";

export class Commit {
    @Expose()
    sha: string;
    
    @Expose()
    author: CommitAuthor;

    @Expose()
    message: string;
  
    constructor(partial: Partial<Commit>) {
      Object.assign(this, partial);
    }
}

