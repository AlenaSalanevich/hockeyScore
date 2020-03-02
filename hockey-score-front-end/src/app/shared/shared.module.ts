import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionPanel, MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
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
import { ErrorComponent } from './error/error.component';
import { ModalComponent } from './modal/modal.component';

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
    PaginationComponent,
    ErrorComponent, 
    ModalComponent],
  exports: [HeaderComponent,
    FooterComponent,
    HomeComponent,
    LogoComponent,
    SearchComponent,
    OderByPipe,
    SettingsComponent,
    DateBorderDirective,
    BreadcrumbComponent,
    NotfoundComponent,
    ErrorComponent,
    ModalComponent,
    DurationPipe],
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
    FormsModule,
    MatExpansionModule,
    MatDialogModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
