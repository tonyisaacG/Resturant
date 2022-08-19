import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryservicesService {
  
private url="Categories";

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

  constructor(private http:HttpClient) { }
 // public getallcategories(): category[] {
//     let cat=new category();
//     cat.id=1;
//     cat.name="مشويات";
//     cat.imagePath="";
//     cat.description="sjhgfjhdsg";
//  return[cat];}

public getallcategories():Observable<category[]>{
return this.http.get<category[]>(`${environment.ApiUrl}/${this.url}`);

}

public getcategory(id:number):Observable<category>{
  //console.log(`${environment.ApiUrl}/${this.url}/${id}`)
  return this.http.get<category>(`${environment.ApiUrl}/${this.url}/${id}`);
  }

public updatecategory(categoryin:category):Observable<category[]>{
  return this.http.put<category[]>(`${environment.ApiUrl}/${this.url}/${categoryin.id}`,categoryin)
  }


  public Addcategory(categoryin:any):Observable<any>{
    const headers={'content-type':'application/json'}
    console.log (categoryin);
    return this.http.post<category[]>(`${environment.ApiUrl}/${this.url}`,
    categoryin,{'headers':headers})
    }

  // Addcategory(data:any):Observable<any>{
  //   return this.http.post(`${environment.ApiUrl}/${this.url}`,data)
  // }


  // update(id, cat): Observable<category> {
  //   return this.http.put<category>(`${environment.ApiUrl}/${this.url}/${id}`, JSON.stringify(cat), this.httpOptions)
  // }

    public Deletecategory(id:number):Observable<category[]>{
      return this.http.delete<category[]>(`${environment.ApiUrl}/${this.url}/${id}`);
      }

  }
