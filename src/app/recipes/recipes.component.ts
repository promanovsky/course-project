import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipesService} from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'] ,
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }
}