import { Component, Input, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { BranchModel } from '../../models/branch.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-branch-tags-list',
  templateUrl: './branch-tags-list.component.html',
  styleUrls: ['./branch-tags-list.component.scss']
})
export class BranchTagsListComponent implements OnInit {

  currentBranch: BranchModel;
  @Select(state => state.commits.branches) branches$: Observable<BranchModel[]>;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const sha = this.router.url.split('/')[2];
    this.switchActiveBranch(sha);
  }

  switchActiveBranch(sha: string) {
    this.branches$.subscribe(branches => {
      this.currentBranch = branches.find(branch => branch.commit.sha === sha);
    });
  }
}
