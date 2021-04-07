import { EditComponent } from './screens/admin/danh-muc/edit/edit.component';
import { AddComponent } from './screens/admin/danh-muc/add/add.component';
import { DashboardComponent } from './screens/admin/dashboard/dashboard.component';
import { AuthorDetailComponent } from './screens/author-detail/author-detail.component';
import { AuthorListComponent } from './screens/author-list/author-list.component';
import { BookListComponent } from './screens/book-list/book-list.component';
//import { HeroListComponent } from './screens/hero-list/hero-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { MonsterListComponent } from './screens/monster-list/monster-list.component';
import { BookDetailComponent } from './screens/book-detail/book-detail.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DanhSachComponent } from './screens/admin/danh-muc/danh-sach/danh-sach.component';

const routes: Routes = [
  {
    path: "",
    component: ClientLayoutComponent,
    children: [
      {
        path: "",
        component: BookListComponent,
      },
      {
        path: "books/detail/:xxx",
        component: BookDetailComponent
      }
    ]
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "danh-muc",
        component: DanhSachComponent
      },
      {
        path: "danh-muc/add",
        component: AddComponent,
      },
      {
        path: "danh-muc/edit/:xxx",
        component: EditComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }