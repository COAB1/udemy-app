import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component ({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
  
  ingredients: Ingredient[] = [
    new Ingredient ('Suggar', 2),
    new Ingredient ('Eggs', 30),
    new Ingredient ('Wheat', 10),
    new Ingredient ('Butter', 5)
  ];

  constructor() { }

  ngOnInit(): void {
  }
}