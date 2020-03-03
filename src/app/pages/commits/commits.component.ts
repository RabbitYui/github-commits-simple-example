import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SwitchBranchModalComponent } from '../../modals/switch-branch-modal/switch-branch-modal.component';
import {Select, Store} from '@ngxs/store';
import {CommitsState} from '../../store/state/commits.state';
import {Observable} from 'rxjs';
import {BranchModel} from '../../models/branch.model';
import {FetchBranches} from '../../store/actions/commits.actions';
import {withLatestFrom} from 'rxjs/operators';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit {

  @Select(state => state.catalog.branches) branches$: Observable<BranchModel[]>;

  constructor(private dialog: MatDialog,
              private store: Store) { }

  ngOnInit(): void {
    this.fetchBranches();
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

    const dialogRef = this.dialog.open(SwitchBranchModalComponent, dialogConfig);
  }

  fetchBranches() {
    this.store.dispatch(new FetchBranches()).pipe(
      withLatestFrom(this.branches$)
    ).subscribe(([branches]) => {
      console.log('branch list:');
      console.log(branches);
    },
    error => console.log(error)
    );
  }
}
