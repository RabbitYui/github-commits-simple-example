import { Component, OnInit } from '@angular/core';

import { SingleCommitComponent } from '../single-commit/single-commit.component';

@Component({
    selector: 'app-commits-section',
    templateUrl: './commits-section.component.html',
    styleUrls: ['./commits-section.component.scss'],
    imports: [SingleCommitComponent],
    standalone: true
})
export class CommitsSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
