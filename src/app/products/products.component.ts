import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product.model';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public listProduct:Product
  public currentPage:number=0
  public size:number=5
  public totalPages:number
  public page:Array<number>=new Array
  public currentKeyword:string=""

  constructor(private http:HttpClient,private prodService:ProductServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  onGetProduct(){
    this.prodService.getProductByPage(this.currentPage,this.size)
    .subscribe(data=>{
      this.totalPages=data['page'].totalPages;
      this.page=new Array<number>(this.totalPages);
      this.listProduct=data
    },err=>{
      console.log(err);
    })
  }

  onPageProduct(i){
    this.currentPage=i;
    this.chercherProduct();
  }

  chercherProduct(){
    this.prodService.getProductByKeyWord(this.currentKeyword,this.currentPage,this.size)
    .subscribe(data=>{
      this.totalPages=data['page'].totalPages;
      this.page=new Array<number>(this.totalPages);
      this.listProduct=data
    },err=>{
      console.log(err);
    })
  }

  onChercher(form:any){
    this.currentPage=0;
    this.currentKeyword=form.keyword
    this.chercherProduct();
  }

  onDeleteProduct(p:any){
    let url=p._links.self.href;
    let conf=confirm('are you sure');
    if(conf){
      this.prodService.deleteRessource(url)
      .subscribe(data=>{
        this.chercherProduct();
      },err=>{
        console.log(err);
      })
    }
  }

  onEditProduct(p){
    let url=p._links.self.href;
    this.router.navigateByUrl('/edit-product/'+btoa(url));
  }

}
