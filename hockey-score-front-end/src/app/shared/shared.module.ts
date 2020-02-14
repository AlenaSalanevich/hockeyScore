import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MatRadioModule } from '@angular/material/radio';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatTabsModule
} from "@angular/material";
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LogoComponent } from './logo/logo.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { OderByPipe } from './pipes/oder-by.pipe';
import { SettingsComponent } from './settings/settings.component';
import { DateBorderDirective } from './directive/date-border.directive';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DurationPipe } from './pipes/duration.pipe';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [HeaderComponent,
    FooterComponent,
    HomeComponent,
    LogoComponent,
    SearchComponent,
    LoginComponent,
    OderByPipe,
    SettingsComponent,
    DateBorderDirective,
    BreadcrumbComponent,
    NotfoundComponent,
    DurationPipe,
    PaginationComponent],
  exports: [HeaderComponent,
    FooterComponent,
    HomeComponent,
    LogoComponent,
    SearchComponent,
    OderByPipe,
    SettingsComponent,
    DateBorderDirective, BreadcrumbComponent, NotfoundComponent, DurationPipe],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatSidenavModule,
    MatTabsModule,
    MatTableModule,
    MatToolbarModule,
    MatSelectModule,
    RouterModule,
    MatInputModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
