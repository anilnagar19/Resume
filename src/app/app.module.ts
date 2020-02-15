import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContentContainerComponent } from './components/content-container/content-container.component';
import { StartPageComponent } from './components/start-page/start-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    AboutMeComponent,
    SkillsComponent,
    ExperienceComponent,
    PortfolioComponent,
    ContactComponent,
    ContentContainerComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
