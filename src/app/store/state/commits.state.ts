import {Action, Selector, State, StateContext} from '@ngxs/store';
import { CommitsService } from '../../services/commits.service';
import { FetchBranches, FetchCommits } from '../actions/commits.actions';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { BranchesService } from '../../services/branches.service';
import { Injectable } from '@angular/core';
import { CommitModel } from '../../models/commit.model';
import { BranchModel } from '../../models/branch.model';

export class CommitsStateModel {
  commits: CommitModel[];
  branches: BranchModel[];
}
/* define state */
@State<CommitsStateModel>({
  name: 'commits',
  defaults: {
    commits: [],
    branches: []
  }
})
/* for fix error: Can't resolve all parameters for State */
@Injectable({
  providedIn: 'root'
})

export class CommitsState {
/* Return all commits from the state*/
  @Selector()
  static getCommits(state: CommitsStateModel) {
    return state.commits;
  }
/* Return all branches from the state*/
  @Selector()
  static getBranches(state: CommitsStateModel) {
    return state.branches;
  }

  @Selector()
  static getOneCommit(state: CommitsStateModel) {
    return (sha: string) => {
      return state.commits.filter(commit => commit.sha === sha)[0];
    };
  }

  constructor(private commitsService: CommitsService,
              private branchesService: BranchesService) {}

  @Action(FetchCommits)
  fetchCommits(ctx: StateContext<CommitsStateModel>) {
    return this.commitsService.getCommits().pipe(
      catchError((x, caught) => {
        console.log('inside catchErrorCommits', x);
        return throwError(x);
      }),
      tap((result) => {
        const state = ctx.getState();

        ctx.setState({
          ...state,
          commits: [...state.commits, ...result]
        });
      },
      (error) => {
        console.log('error in fetchMovies: ', error.message);
      })
    );
  }

  @Action(FetchBranches)
  fetchBranches(ctx: StateContext<CommitsStateModel>) {
    return this.branchesService.getBranches().pipe(
      catchError((x, caught) => {
        console.log('inside catchErrorBranches', x);
        return throwError(x);
      }),
      tap((result) => {
        const state = ctx.getState();

        ctx.setState({
          ...state,
          branches: [...state.branches, ...result]
        });
      },
      (error) => {
        console.log('error in fetchBranches: ', error.message);
      })
    );
  }
}
