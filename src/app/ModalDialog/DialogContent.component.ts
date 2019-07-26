import { Component, OnInit } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import { MatDialogRef } from '@angular/material';


@Component({
selector: 'myDialog',
templateUrl: './DialogContent.component.html'
})
export class DialogContent implements OnInit {
    private products: any[];
    private productsUrl = "https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json";


    constructor(private http: HttpClient, private dialogRef: MatDialogRef<DialogContent>) {

    }

    ngOnInit(): void {
        this.http.get<any[]>(this.productsUrl).subscribe(data=>{  this.products = data.slice(0,10);},error=> { console.error(error);});
       // this.products = [{productId:1,productName:'a1'},{productId:2,productName:'a2'}];             
    }

    selectedProduct;

    confirmSelection() {
        this.dialogRef.close(this.selectedProduct);
      }


}