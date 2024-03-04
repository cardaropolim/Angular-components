import type { Meta, StoryObj } from "@storybook/angular";
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { TableComponent } from "../app/table/table.component";
import { DialogComponent } from "../app/dialog/dialog.component";

const Meta: Meta<TableComponent> = {
    component: TableComponent,
}

export default {
    title:'Components/Table',
    imports: [
      MatPaginator,
      MatPaginatorModule,
      MatTableDataSource,
      MatTableModule,
      Component,
      ViewChild,
    ],
    component: TableComponent, 
    parameters : {
        layout : 'centered',
        controls: {
            expanded: true,
        },
        tags: ['autodocs'],
        render: (args: TableComponent) => ({
            props: {
                ...args
        }
    }),
}
        
        
    
    } as Meta<TableComponent>;

    type TableComponentStory = StoryObj<TableComponent>

    export const Primary: TableComponentStory = {
    args: {

    },
}