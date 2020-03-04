/*describes of state actions */
export class FetchCommits {
    constructor(public payload: string) { }

    static readonly type = '[Commits] Fetch commits';
}

export class FetchBranches {
  static readonly type = '[Commits] Fetch branches';
}
