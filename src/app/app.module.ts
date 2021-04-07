import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HeroListComponent } from './screens/hero-list/hero-list.component';
//import { HeroDetailComponent } from './screens/hero-detail/hero-detail.component';
//import { HeroUnitComponent } from './components/hero-unit/hero-unit.component';
//import { MonsterListComponent } from './screens/monster-list/monster-list.component';
//import { MonsterDatailComponent } from './screens/monster-datail/monster-datail.component';
//import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { GenderPipe } from './pipes/gender.pipe';
import{HttpClientModule} from '@angular/common/http';
import { BookListComponent } from './screens/book-list/book-list.component';
import { BookDetailComponent } from './screens/book-detail/book-detail.component';
import { AuthorListComponent } from './screens/author-list/author-list.component';
import { AuthorDetailComponent } from './screens/author-detail/author-detail.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
//import { DanhMucComponent } from './screens/admin/danh-muc/danh-muc.component';
import { DanhSachComponent } from './screens/admin/danh-muc/danh-sach/danh-sach.component';
import { DashboardComponent } from './screens/admin/dashboard/dashboard.component';
import { AddComponent } from './screens/admin/danh-muc/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './screens/admin/danh-muc/edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
   // HeroListComponent,
   // HeroDetailComponent,
  //  HeroUnitComponent,
   // MonsterListComponent,
   // MonsterDatailComponent,
   // HeroFormComponent,
    GenderPipe,
    BookListComponent,
    BookDetailComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    //DanhMucComponent,
    DanhSachComponent,
    DashboardComponent,
    AddComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
