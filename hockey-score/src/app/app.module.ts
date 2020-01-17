import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoursesModule } from './courses/courses.module';
import { SharedModule } from './shared/shared.module';
import { TeamsModule } from './teams/teams.module';
import { PlayersModule } from './players/players.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CoursesModule,
    SharedModule,
    TeamsModule,
    PlayersModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
