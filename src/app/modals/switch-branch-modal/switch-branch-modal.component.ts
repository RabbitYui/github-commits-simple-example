import { Component, OnInit } from '@angular/core';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { BranchTagsListComponent } from '../../blocks/branch-tags-list/branch-tags-list.component';

@Component({
    selector: 'app-switch-branch-modal',
    templateUrl: './switch-branch-modal.component.html',
    styleUrls: ['./switch-branch-modal.component.scss'],
    imports: [MatTabGroup, MatTab, BranchTagsListComponent],
    standalone: true
})
export class SwitchBranchModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
