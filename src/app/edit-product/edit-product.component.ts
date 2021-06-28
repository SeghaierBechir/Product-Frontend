import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product.model';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public currentProduct:Product;
  public url:string;

  constructor(private prodService:ProductServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.url=atob(this.route.snapshot.params.id);
    this.prodService.getRessource(this.url)
    .subscribe(data=>{
      this.currentProduct=data;
    },err=>{
      console.log(err);
    })
  }

  onUpdateProduct(p:Product){
    this.prodService.updateRessource(this.url,p)
    .subscribe(data=>{
      alert('mise à jour effectué avec succés')
      this.router.navigateByUrl('/product');
    },err=>{
      console.log(err);
    })
  }

}
