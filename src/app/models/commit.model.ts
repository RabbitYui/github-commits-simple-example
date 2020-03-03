import { CommitUserModel } from './commit-user.model';

export interface CommitModel {
  url: string;
  sha: string;
  node_id: string;
  html_url: string;
  comments_url: string;
  commit: {
    url: string,
    author: {
      name: string,
      email: string,
      date: string
    },
    committer: {
      name: string,
      email: string,
      date: string
    },
    message: string,
    tree: {
      url: string,
      sha: string
    },
    comment_count: number,
    verification: {
      verified: boolean,
      reason: string,
      signature: null,
      payload: null
    }
  };
  author: CommitUserModel;
  committer: CommitUserModel;
}
