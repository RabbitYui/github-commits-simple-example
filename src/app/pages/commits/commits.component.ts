import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SwitchBranchModalComponent } from '../../modals/switch-branch-modal/switch-branch-modal.component';
import { Select, Store } from '@ngxs/store';
import {from, Observable} from 'rxjs';
import { BranchModel } from '../../models/branch.model';
import { FetchBranches, FetchCommits } from '../../store/actions/commits.actions';
import { groupBy, mergeMap, toArray, withLatestFrom } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommitModel } from '../../models/commit.model';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit {

  @Select(state => state.commits.branches) branches$: Observable<BranchModel[]>;
  @Select(state => state.commits.commits) commits$: Observable<CommitModel[]>;
  currentBranch: BranchModel;
  sortedCommits$: any;

  constructor(private dialog: MatDialog,
              private store: Store,
              private router: Router) { }

  ngOnInit(): void {
    this.fetchBranches();
    this.routerSubscriber();
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.minWidth = 300;
    dialogConfig.maxHeight = 480;
    dialogConfig.backdropClass = 'backdrop-no-bg';
    dialogConfig.panelClass = 'modal-no-padding';
    dialogConfig.position = {
      top: '12%',
      left: '9%'
    };
    dialogConfig.data = this.currentBranch;

    const dialogRef = this.dialog.open(SwitchBranchModalComponent, dialogConfig);
  }

  fetchBranches() {
    this.store.dispatch(new FetchBranches()).pipe(
      withLatestFrom(this.branches$)
    ).subscribe(([branches]) => {
      this.currentBranch = branches.commits.branches[0];
      this.router.navigate(['/commits', this.currentBranch.commit.sha]).then(() => {
        this.fetchCommits(this.currentBranch.commit.sha);
      });
    },
    error => console.log(error)
    );
  }

  fetchCommits(sha: string) {
    this.store.dispatch(new FetchCommits(sha)).pipe(
      withLatestFrom(this.commits$))
      .subscribe(([commits]) => {
        this.transformCommits(commits);
        },
        error => console.log(error)
      );
  }

  routerSubscriber() {
    this.router.events.subscribe((event) => {
      if (event) {
        const sha = this.router.url.split('/')[2];
        this.branches$.subscribe(branches => {
          this.currentBranch = branches.find(branch => branch.commit.sha === sha);
          if (this.currentBranch) {
            this.fetchCommits(this.currentBranch.commit.sha);
          }
        });
      }
    });
  }

  transformCommits(commits: Observable<CommitModel[]>) {
    const commitsForSort = from(commits);
    this.sortedCommits$ = commitsForSort.pipe(
      groupBy(commit => commit.commit.author.date),
      mergeMap(group => group.pipe(toArray()))
    ).subscribe(data => console.log(data));
  }
}
