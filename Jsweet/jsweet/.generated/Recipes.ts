/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
class Recipes {
    recipes : java.util.LinkedList<Recipe> = <any>(new java.util.LinkedList<Recipe>());

    constructor() {
        console.log("Created");
    }

    public addShaped(...args : Object[]) {
        if(this.recipe_filter(1, ...args)) return;
        this._add_shaped.apply(this, args);
    }

    public addShapeless(...args : Object[]) {
        if(this.recipe_filter(1, ...args)) return;
        this._add_shapeless.apply(this, args);
    }

    public addRecipe(...args : Object[]) {
        if(this.recipe_filter(0, ...args)) return;
        this._addRecipe.apply(this, args);
    }

    /*private*/ _add_shaped(...args : Object[]) {
        console.log("add Shaped");
        let a : Recipe = <any>new (__Function.prototype.bind.apply(Recipe, [null, false, true].concat(<any[]>args)));
        console.log(a);
        this.recipes.push(a);
    }

    /*private*/ _add_shapeless(...args : Object[]) {
        console.log("add Shapeless");
        let a : Recipe = <any>new (__Function.prototype.bind.apply(Recipe, [null, false, false].concat(<any[]>args)));
        console.log(a);
        this.recipes.push(a);
    }

    public _addRecipe(...args : Object[]) {
        console.log("add Recipe");
        let a : Recipe = new RecipeFurnace(true, true, args);
        console.log(a);
        this.recipes.push(a);
    }

    /*private*/ recipe_filter(loc : number, ...args : any[]) : boolean {
        if(<boolean>args[loc]) return false;
        return true;
    }

    public toString() : string {
        let s : string = "[";
        for(let index202=this.recipes.iterator();index202.hasNext();) {
            let recipe = index202.next();
            {
                s += recipe.toString() + ",";
            }
        }
        if(this.recipes.size() > 0) s = s.substring(0, s.length - 1);
        return s + "]";
    }
}
Recipes["__class"] = "Recipes";



var __Function = Function;
