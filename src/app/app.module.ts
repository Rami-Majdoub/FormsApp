import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { FormEditComponent } from './component/form/form-edit/form-edit.component';
import { FormToSubmitComponent } from './component/form-to-submit/form-to-submit.component';
import { FormListComponent } from './component/form/form-list/form-list.component';
import { FormSubmittedComponent } from './component/form-submitted/form-submitted.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FormEditComponent,
    FormToSubmitComponent,
    FormListComponent,
    FormSubmittedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    
  ],
  providers: [
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
