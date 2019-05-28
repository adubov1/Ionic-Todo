import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { IonicModule } from '@ionic/angular';
import { AddOrEditComponent } from './add-or-edit/add-or-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListComponent,
    ListHeaderComponent,
    AddOrEditComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    ListComponent,
    ListHeaderComponent,
    AddOrEditComponent
  ],
  entryComponents: [
    AddOrEditComponent
  ]
})
export class ComponentsModule { }
