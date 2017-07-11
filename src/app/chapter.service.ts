import { Injectable } from '@angular/core';
import { Chapter } from './chapter.model';
import { CHAPTERS } from './mock-chapters';

@Injectable()
export class ChapterService {

  constructor(){}

  getChapters() {
    return CHAPTERS;
  }

  getChapterById(chapterId: number){
      for (var i = 0; i <= CHAPTERS.length - 1; i++) {
        console.log("for loop" + typeof(chapterId));
        if (CHAPTERS[i].id === chapterId) {
          console.log("inside if"+CHAPTERS[i].id);
          return CHAPTERS[i];
        }
      }
    }

}
