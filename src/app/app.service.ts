import { HttpClient } from '@angular/common/http';
import { Recipe } from './Recipe.model';
import { Injectable } from '@angular/core';
@Injectable({providedIn:'root'})
export class AppService
{
  originalList:Recipe[]=[];
  constructor(private http:HttpClient){}
  loadList()
  {
    return this.http.get<Recipe[]>("http://starlord.hackerearth.com/recipe");
  } 
}
