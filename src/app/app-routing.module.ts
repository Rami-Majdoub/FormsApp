import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormEditComponent } from 'src/app/component/form/form-edit/form-edit.component';
import { FormToSubmitComponent } from 'src/app/component/form-to-submit/form-to-submit.component';
import { FormListComponent } from 'src/app/component/form/form-list/form-list.component';
import { FormSubmittedComponent } from 'src/app/component/form-submitted/form-submitted.component';

const routes: Routes = [
  { "path": "form/edit", component: FormEditComponent, },
  { "path": "form/submit", component: FormToSubmitComponent, },
  { "path": "form/list", component: FormListComponent, },
  // { "path": "/form/list", component: FormSubmittedComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
