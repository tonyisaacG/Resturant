import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { Items } from './items.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private myhttp:HttpClient) { }
 Items_url:string='http://localhost:24637/api/Items';
 listItems:Items[]=[];
 ItemsData:Items=new Items();


 saveItems():Observable<Items[]>
 {
  return this.myhttp.post<Items[]>(this.Items_url,this.ItemsData);
 }


 updateItemservice()
 {
  return this.myhttp.put(`${this.Items_url}/${this.ItemsData.id}`,this .ItemsData );
 }



getItems():Observable<Items[]>
{
  return this.myhttp.get<Items[]>(this.Items_url);
  

}

deletItems(id:number)
{
  return this.myhttp.delete(`${this.Items_url}/${id}`);
}



}
