import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { HimHerBioComponent } from './about/him-her-bio/him-her-bio.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { OurStoryDividerComponent } from './our-story/our-story-divider/our-story-divider.component';
import { StoriesComponent } from './our-story/stories/stories.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    NavigationComponent,
    HimHerBioComponent,
    OurStoryComponent,
    OurStoryDividerComponent,
    StoriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
