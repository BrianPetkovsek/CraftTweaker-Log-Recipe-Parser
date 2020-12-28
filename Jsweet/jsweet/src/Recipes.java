


import static def.dom.Globals.*;

import java.util.LinkedList;

import def.js.Object;

public class Recipes {
	LinkedList<Recipe> recipes = new LinkedList<Recipe>();
	
	Recipes(){
		console.log("Created");
	}
	
	public void addShaped(Object ... args){
		if(recipe_filter(1, args)) return;
		_add_shaped(args);
	}
	
	public void addShapeless(Object ... args){
		if(recipe_filter(1, args)) return;
		_add_shapeless(args);
	}
	
	public void addRecipe(Object ... args){
		if(recipe_filter(0, args)) return;
		_addRecipe(args);
	}
	
	private void _add_shaped(Object ... args){
		console.log("add Shaped");
		Recipe a = new Recipe(false, true, args);
		console.log(a);
		recipes.push(a);
	}
	
	private void _add_shapeless(Object ... args){
		console.log("add Shapeless");
		Recipe a = new Recipe(false, false, args);
		console.log(a);
		recipes.push(a);
	}
	
	public void _addRecipe(Object ... args){
		console.log("add Recipe");
		Recipe a = new RecipeFurnace(true, true, args);
		console.log(a);
		recipes.push(a);
	}
	
	private boolean recipe_filter(int loc, java.lang.Object ... args){
		if((boolean)args[loc]) return false;
		
		return true;
	}
	
	
	public java.lang.String toString(){
		String s = "[";
		for (Recipe recipe : recipes){
			s += recipe.toString()+",";
		}
		if(recipes.size() > 0)
			s = s.substring(0,s.length() -1);
		return s + "]";
	}
}