import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormEditComponent } from 'src/app/component/form/form-edit/form-edit.component';
import { FormToSubmitComponent } from 'src/app/component/form/form-to-submit/form-to-submit.component';
import { FormListComponent } from 'src/app/component/form/form-list/form-list.component';
import { FormSubmittedComponent } from 'src/app/component/form/form-submitted/form-submitted.component';

const routes: Routes = [
  { "path": "form/edit", component: FormEditComponent, },
  { "path": "form/edit/:id", component: FormEditComponent, },
  { "path": "form/submit/:id", component: FormToSubmitComponent, },
  { "path": "form/submitted/:id", component: FormSubmittedComponent, },
  { "path": "form/list", component: FormListComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
