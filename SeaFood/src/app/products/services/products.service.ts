import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  GetAllProducts(){
    return this.http.get(environment.baseApi+'/Products')
  }
  GetAllCategries(){
    return this.http.get(environment.baseApi+'/Categories')

  }
  GetProductbyCategry(keyword:string){
    return this.http.get(environment.baseApi+'/Products/productCatId/'+keyword)

  }

  GetProductById(id:any){
    return this.http.get(environment.baseApi+'/Products/'+id)
  }
}
