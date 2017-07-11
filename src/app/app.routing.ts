import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChapterDetailComponent } from './chapter-detail/chapter-detail.component';


//master list of all available routes in application
const appRoutes: Routes = [

  {
    path: '',
    component: WelcomeComponent
  },
  {
  path: 'chapters/:id',
  component: ChapterDetailComponent
  }

];

//export routes to rest of application
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
