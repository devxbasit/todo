import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoMainComponent } from './components/todo-main/todo-main.component';

const routes: Routes = [
  {
    path: '',
    component: TodoMainComponent,
  },
];
@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [] })
export class TodosRoutingModule {}
