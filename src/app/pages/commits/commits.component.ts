import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SwitchBranchModalComponent } from '../../modals/switch-branch-modal/switch-branch-modal.component';
import {Select, Store} from '@ngxs/store';
import {CommitsState} from '../../store/state/commits.state';
import {Observable} from 'rxjs';
import {BranchModel} from '../../models/branch.model';
import {FetchBranches} from '../../store/actions/commits.actions';
import {withLatestFrom} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit {

  @Select(state => state.commits.branches) branches$: Observable<BranchModel[]>;
  currentBranch: BranchModel;

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
      this.router.navigate(['/commits', this.currentBranch.commit.sha]).then();
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
        });
      }
    });
  }
}
