import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SingleCommitComponent } from './blocks/single-commit/single-commit.component';
import { FlexModule } from '@angular/flex-layout';
import { CommitsComponent } from './pages/commits/commits.component';
import { CommitsSectionComponent } from './blocks/commits-section/commits-section.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { SwitchBranchModalComponent } from './modals/switch-branch-modal/switch-branch-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    SingleCommitComponent,
    CommitsComponent,
    CommitsSectionComponent,
    SwitchBranchModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexModule,
    MatIconModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SwitchBranchModalComponent]
})
export class AppModule { }
