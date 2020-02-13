import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './blocks/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SingleCommitComponent } from './blocks/single-commit/single-commit.component';
import { FlexModule } from '@angular/flex-layout';
import { CommitsComponent } from './pages/commits/commits.component';
import { CommitsSectionComponent } from './blocks/commits-section/commits-section.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SingleCommitComponent,
    CommitsComponent,
    CommitsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexModule,
    MatIconModule,
    MatButtonToggleModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
