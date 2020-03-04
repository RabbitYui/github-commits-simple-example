import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BranchModel } from '../../models/branch.model';

@Component({
  selector: 'app-switch-branch-modal',
  templateUrl: './switch-branch-modal.component.html',
  styleUrls: ['./switch-branch-modal.component.scss']
})
export class SwitchBranchModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
