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
import { CountdownComponent } from './countdown/countdown.component';
import { DateComponent } from './date/date.component';
import { WeddingDetailsComponent } from './wedding-details/wedding-details.component';
import { AddressesComponent } from './wedding-details/addresses/addresses.component';
import { WeddingPartyComponent } from './wedding-party/wedding-party.component';
import { RegistryComponent } from './registry/registry.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    NavigationComponent,
    HimHerBioComponent,
    OurStoryComponent,
    OurStoryDividerComponent,
    StoriesComponent,
    CountdownComponent,
    DateComponent,
    WeddingDetailsComponent,
    AddressesComponent,
    WeddingPartyComponent,
    RegistryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
