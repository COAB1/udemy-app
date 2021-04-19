import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('cake', 'sweet food', 'https://blog.williams-sonoma.com/wp-content/uploads/2018/06/jun-23-Vanilla-Ombre-Layer-Cake.jpg' ),
    new Recipe('cake', 'sweet food', 'https://blog.williams-sonoma.com/wp-content/uploads/2018/06/jun-23-Vanilla-Ombre-Layer-Cake.jpg' ),
    new Recipe('cake', 'sweet food', 'https://blog.williams-sonoma.com/wp-content/uploads/2018/06/jun-23-Vanilla-Ombre-Layer-Cake.jpg' ),
    new Recipe('cake', 'sweet food', 'https://blog.williams-sonoma.com/wp-content/uploads/2018/06/jun-23-Vanilla-Ombre-Layer-Cake.jpg' )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
