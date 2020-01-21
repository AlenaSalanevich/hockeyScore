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



@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, LogoComponent],
  exports: [HeaderComponent, FooterComponent, HomeComponent, LogoComponent],
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
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
