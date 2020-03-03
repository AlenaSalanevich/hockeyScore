import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { TeamsModule } from './teams/teams.module';
import { PlayersModule } from './players/players.module';
import { GamesModule } from './games/games.module';
import { DatePipe, JsonPipe } from '@angular/common';
import { AuthGuard } from './shared/guards/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/interceptors/auth-interceptor';
import { ModalComponent } from './shared/modal/modal.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AuthEffects } from './shared/authstore/auth.effects';
import { authReducer } from './shared/authstore/reducers/auth.reducer';

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
    HttpClientModule,
    SharedModule,
    TeamsModule,
    PlayersModule,
    AppRoutingModule,
    GamesModule,
    EffectsModule.forRoot([AuthEffects]),
    /*  StoreModule.forRoot(reducers, {
       metaReducers,
       runtimeChecks: {
         strictStateImmutability: true,
         strictActionImmutability: true,
       }
     }), */
    StoreModule.forRoot({ authState: authReducer }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [DatePipe, JsonPipe, AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ModalComponent]
})
export class AppModule { }
