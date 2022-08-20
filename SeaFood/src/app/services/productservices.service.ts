import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Products } from '../models/products';
import { catchError } from 'rxjs/operators';
import { GlobalVariable } from '../BackEnd/Global/global-variable';

@Injectable({
  providedIn: 'root'
})
export class ProductservicesService {
  private url="Products";
 
  headers = GlobalVariable.headerWithAuth();

  options = { headers: this.headers }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
    constructor(private httpClient: HttpClient) { }
  
    getAllproducts(): Observable<Products[]> {
      return this.httpClient.get<Products[]>(`${environment.ApiUrl}/${this.url}`,this.options)
      .pipe(catchError(this.errorHandler)
      )
    }
  
    getById(id): Observable<Products> {
      return this.httpClient.get<Products>(`${environment.ApiUrl}/${this.url}/${id}`,this.options)
      .pipe(
        catchError(this.errorHandler)
      )
    }
  
    addproduct(inputProduct:any): Observable<Products> {
      let formdata=new FormData();
      formdata.append('product_name', inputProduct.product_name);
      formdata.append('product_price', inputProduct.product_price);
      formdata.append('product_description', inputProduct.product_description);
      formdata.append('product_imagePathsrc', inputProduct.product_imagePathsrc);
      formdata.append('product_imagePath', inputProduct.product_imagePath);
      formdata.append('cat_id', inputProduct.cat_id);
      formdata.append('cat_name', inputProduct.cat_name);
      return this.httpClient.post<any>(`${environment.ApiUrl}/${this.url}`,
      formdata,this.options)
      .pipe(
        catchError(this.errorHandler)
      )
    }  
  
    // updateusers(user): Observable<users> {
    //   return this.httpClient.put<users>(`${environment.ApiUrl}/${this.url}/${user.user_id}`, user, this.httpOptions)
    //   .pipe(
    //     catchError(this.errorHandler)
    //   )
    // }
  
    public updateproducts(product:Products):Observable<Products>{
      return this. httpClient.put<Products>(`${environment.ApiUrl}/${this.url}/${product.product_id}`,product,this.options)//,this.httpOptions)
      }
  
    deleteproducts(id){
      return this.httpClient.delete<Products>(`${environment.ApiUrl}/${this.url}/${id}`,this.options)//, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
    }
  
    errorHandler(error) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
   }
  
  
  
  }
  


  // upload(file):Observable<any> {
  
  //   // Create form data
  //   const formData = new FormData(); 
      
  //   // Store form name as "file" with file data
  //   formData.append("file", file, file.name);
      
  //   // Make http post request over api
  //   // with formData as req
  //   return this.http.post(this.baseApiUrl, formData)
//}
//}
