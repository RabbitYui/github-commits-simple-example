import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {SwitchBranchModalComponent} from '../../modals/switch-branch-modal/switch-branch-modal.component';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
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
}
