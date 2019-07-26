import {Component } from '@angular/core'
import {MatDialog} from '@angular/material'
import {DialogContent} from './DialogContent.component'

@Component({
selector:'PageWithModalDialog',
template: `
    <h1>Your Emoji</h1>
    <div *ngIf="selectedProduct">
    <img [src]="selectedProduct.productImage" style="height:100px" /><br/>
        {{ selectedProduct.productName }}</div>
    <button mat-raised-button (click)="openEmojiDialog()">
      Make a selection
    </button>
  `//,
//   styles: [`div {
//     padding: 1rem;
//   }`]
})
export class PageWithModalDialog
{
    selectedProduct;

    constructor(public dialog: MatDialog) {}

    openEmojiDialog() {
        let dialog = this.dialog.open(DialogContent);
    
        dialog.afterClosed()
          .subscribe(selection => {
            if (selection) {
              this.selectedProduct = selection;
            } else {
              // User clicked 'Cancel' or clicked outside the dialog
            }
          });
      }


}
