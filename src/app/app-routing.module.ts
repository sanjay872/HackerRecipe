import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';


const routes: Routes = [
  {path:'',component:RecipeListComponent},
  {path:'view/:id',component:ViewRecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
