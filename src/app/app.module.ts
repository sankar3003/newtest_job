import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListAllModule, DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { EditService, ExcelExportService, GridModule, GroupService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations';
import { FilterService, PageService, SortService, TreeGridModule  } from '@syncfusion/ej2-angular-treegrid';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreegridComponent } from './components/treegrid/treegrid.component';

@NgModule({
  declarations: [
    AppComponent,
    TreegridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    ContextMenuModule,
    TreeGridModule,
    GridModule,
    DropDownListAllModule,
    DropDownListModule
  ],
  providers: [
    PageService,
    SortService,
    FilterService,
  GroupService,
  ToolbarService,
  ExcelExportService,
  EditService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
