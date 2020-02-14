import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-commit',
  templateUrl: './single-commit.component.html',
  styleUrls: ['./single-commit.component.scss']
})
export class SingleCommitComponent implements OnInit {

  showMore = false;

  constructor() { }

  ngOnInit(): void {
  }

  checkMore() {
    if (this.showMore) {
      this.showMore = false;
    } else {
      this.showMore = true;
    }
  }
}
