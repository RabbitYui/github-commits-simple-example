import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButtonToggleGroup, MatButtonToggle } from '@angular/material/button-toggle';
import { MatAnchor } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-single-commit',
    templateUrl: './single-commit.component.html',
    styleUrls: ['./single-commit.component.scss'],
    imports: [MatIcon, MatButtonToggleGroup, MatButtonToggle, MatAnchor, CommonModule],
    standalone: true
})
export class SingleCommitComponent {

  showMore = false;

  constructor() { }

  checkMore(): void {
    this.showMore = !this.showMore;
  }
}
