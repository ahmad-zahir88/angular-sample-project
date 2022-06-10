import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import { CdkColumnDef } from '@angular/cdk/table'
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MatCardModule } from '@angular/material/card';
import { UserDetailFormComponent } from './user-detail-form/user-detail-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GenderPipe } from './gender.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { CreateUserPageComponent } from './create-user-page/create-user-page.component';
@NgModule({
  declarations: [
    AppComponent,
    DetailPageComponent,
    HomePageComponent,
    UserDetailFormComponent,
    GenderPipe,
    CreateUserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [
    CdkColumnDef,
    MatDatepickerModule,
    MatNativeDateModule,
    GenderPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
