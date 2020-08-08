import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Recipe } from '../Recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  constructor(private appService:AppService,private route:Router) { 
    
  }
  recipeList:Recipe[]=[];
  originalList:Recipe[]=[];
  ngOnInit(){
   this.appService.loadList().subscribe(data=>{
    this.originalList=data;
    this.recipeList=this.originalList;
    this.appService.originalList=this.originalList;
  });
  }
  filterItem(value)
  {
    if(!value)
    {
      this.recipeList=this.originalList;
    }
    else
    {
      this.recipeList = Object.assign([],this.originalList).filter(
        item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
     )
    }
  }
  view(id)
  {
    this.route.navigate(['/view/',id]);
  }
}
