import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Chapter } from '../chapter.model';
import { ChapterService } from '../chapter.service';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.scss'],
  providers: [ChapterService]
})
export class ChapterDetailComponent implements OnInit {
  chapterId: number;
  chapterToDisplay: Chapter;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private chapterService: ChapterService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.chapterId = parseInt(urlParameters['id']);
    });
    this.chapterToDisplay = this.chapterService.getChapterById(this.chapterId);
    console.log(this.chapterToDisplay);
  }

}
