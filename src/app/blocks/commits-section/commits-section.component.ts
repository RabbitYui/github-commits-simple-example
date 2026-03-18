import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { SingleCommitComponent } from '../single-commit/single-commit.component';

@Component({
    selector: 'app-commits-section',
    templateUrl: './commits-section.component.html',
    styleUrls: ['./commits-section.component.scss'],
    imports: [NgFor, SingleCommitComponent],
    standalone: true
})
export class CommitsSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
