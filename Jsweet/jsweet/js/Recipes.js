/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var Recipes = (function () {
    function Recipes() {
        this.recipes = (new java.util.LinkedList());
        console.log("Created");
    }
    Recipes.prototype.addShaped = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.recipe_filter.apply(this, [1].concat(args)))
            return;
        this._add_shaped.apply(this, args);
    };
    Recipes.prototype.addShapeless = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.recipe_filter.apply(this, [1].concat(args)))
            return;
        this._add_shapeless.apply(this, args);
    };
    Recipes.prototype.addRecipe = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.recipe_filter.apply(this, [0].concat(args)))
            return;
        this._addRecipe.apply(this, args);
    };
    /*private*/ Recipes.prototype._add_shaped = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("add Shaped");
        var a = new (__Function.prototype.bind.apply(Recipe, [null, false, true].concat(args)));
        console.log(a);
        this.recipes.push(a);
    };
    /*private*/ Recipes.prototype._add_shapeless = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("add Shapeless");
        var a = new (__Function.prototype.bind.apply(Recipe, [null, false, false].concat(args)));
        console.log(a);
        this.recipes.push(a);
    };
    Recipes.prototype._addRecipe = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("add Recipe");
        var a = new RecipeFurnace(true, true, args);
        console.log(a);
        this.recipes.push(a);
    };
    /*private*/ Recipes.prototype.recipe_filter = function (loc) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (args[loc])
            return false;
        return true;
    };
    Recipes.prototype.toString = function () {
        var s = "[";
        for (var index202 = this.recipes.iterator(); index202.hasNext();) {
            var recipe = index202.next();
            {
                s += recipe.toString() + ",";
            }
        }
        if (this.recipes.size() > 0)
            s = s.substring(0, s.length - 1);
        return s + "]";
    };
    return Recipes;
}());
Recipes["__class"] = "Recipes";
var __Function = Function;
