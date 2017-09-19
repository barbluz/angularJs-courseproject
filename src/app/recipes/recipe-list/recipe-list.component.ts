import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe('Name', 'Lorem ipsum comidum dolor na barrigum', 'https://goo.gl/shS4r1'),
		new Recipe('Name', 'Lorem ipsum comidum dolor na barrigum', 'https://goo.gl/shS4r1')
	];

  constructor() { }

  ngOnInit() {
  }

}
