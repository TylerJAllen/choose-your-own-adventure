import { Component, OnInit } from '@angular/core';
import { Chapter } from '../chapter.model';
import { Router } from '@angular/router';
import { ChapterService } from '../chapter.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  providers: [ChapterService]
})
export class WelcomeComponent implements OnInit {

  chapters: Chapter[];

  constructor(private router: Router, private chapterService: ChapterService) {}

  ngOnInit(){
    this.chapters = this.chapterService.getChapters();
  }

  goToDetailPage(clickedChapter: Chapter) {
    console.log(clickedChapter);
    this.router.navigate(['chapters', clickedChapter.id]);
  };

}
