import { Component, OnInit, ViewChild } from '@angular/core';
import { EditSettingsModel, PageSettingsModel, SortSettingsModel, ToolbarItems, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { sampleData } from 'src/app/datasource';
@Component({
  selector: 'app-treegrid',
  templateUrl: './treegrid.component.html',
  styleUrls: ['./treegrid.component.scss']
})
export class TreegridComponent implements OnInit {
  @ViewChild('treeGrid')
 public pageSettings: PageSettingsModel;
 public sortSettings: SortSettingsModel;
 public treeGridObj: TreeGridComponent;
  public toolbarOptions: ToolbarItems[];
 public data: Object[];
 public editSettings: EditSettingsModel;
  toolbar: string[];
 
constructor() { }
ngOnInit(): void {
  this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    this.data = sampleData;
    this.sortSettings = { columns: [{ field: 'taskName', direction: 'Ascending' }, { field: 'taskID', direction: 'Descending' }]  }
    this.pageSettings = { pageSize: 10 };
    this.toolbarOptions = ['ExcelExport'];
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel']
}

toolbarClick(args: Object) : void {
  if (args['item'].text === 'Excel Export') {
      this.treeGridObj.excelExport();
  }
}
}
