import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product.model';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent implements OnInit {
  public currentProduct:Product;
  public mode:number=1;

  constructor(private prodService:ProductServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  onSaveProduct(data:Product){
    this.prodService.saveRessource(this.prodService.host+"/products",data)
    .subscribe((res:Product)=>{
      //this.router.navigateByUrl("/product")
      this.currentProduct=res;
      this.mode=2
    },err=>{
      console.log(err);
    })
  }

  onNewProduct(){
    this.mode=1;
  }

}
