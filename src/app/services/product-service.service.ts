import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  public host:string="http://localhost:8080";

  constructor(private http:HttpClient) { }

  public getProduct():Observable<Product>{
    return this.http.get<Product>(this.host+"/products");
  }

  public getProductByPage(page:number,size:number):Observable<Product>{
    return this.http.get<Product>(this.host+"/products?page="+page+"&size="+size);
  }

  public getProductByKeyWord(mc:string,page:number,size:number):Observable<Product>{
    return this.http.get<Product>(this.host+"/products/search/byDesignationPage?mc="+mc+"&page="+page+"&size="+size);
  }

  public saveRessource(url:string,data:any):Observable<Product>{
    return this.http.post<Product>(url,data);
  }

  public deleteRessource(url:string){
    return this.http.delete(url);
  }

  public getRessource(url:string):Observable<Product>{
    return this.http.get<Product>(url);
  }

  public updateRessource(url:string,data:Product){
    return this.http.patch(url,data);
  }
}
