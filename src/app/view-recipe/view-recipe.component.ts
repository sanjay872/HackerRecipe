import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../app.service';
import { Recipe } from '../Recipe.model';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit {

  constructor(private route:ActivatedRoute,private appservice:AppService) { }
  recipe:Recipe;
  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.recipe=this.appservice.originalList[params['id']];
      console.log(this.appservice.originalList);
    })
  }
}
