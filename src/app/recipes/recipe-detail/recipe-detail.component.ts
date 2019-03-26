import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipesService} from '../recipes.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipesService, private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  onAddToShoppingList() {
    if(this.authService.isAuthenticated()){
      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }else{
      this.router.navigate(['/signin']);
    }
  }

  onDeleteRecipe(id: number) {
    this.recipeService.deleteRecipe(id);
    this.router.navigate(['/recipes']);
  }

  isUserAuthenticate() {
    return this.authService.isAuthenticated();
  }
}
