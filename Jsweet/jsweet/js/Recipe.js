/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var Recipe = (function () {
    function Recipe(f, b) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        if (this.isFurnace === undefined)
            this.isFurnace = null;
        if (this.isShaped === undefined)
            this.isShaped = null;
        if (this.recipeName === undefined)
            this.recipeName = null;
        if (this.itemReturn === undefined)
            this.itemReturn = null;
        if (this.numReturn === undefined)
            this.numReturn = null;
        if (this.craftingPattern === undefined)
            this.craftingPattern = null;
        this.isFurnace = f;
        this.isShaped = b;
        this.recipeName = args[0];
        this.itemReturn = args[1];
        this.numReturn = args[2];
        this.craftingPattern = args[3];
    }
    /**
     *
     * @return {string}
     */
    Recipe.prototype.toString = function () {
        return "{\"isFurnace\": " + this.isFurnace + ",\"isShaped\": " + this.isShaped + ",\"recipeName\": \"" + this.recipeName.toString() + "\", \"itemReturn\": " + this.itemReturn.toString() + ",\"numReturn\": " + this.numReturn.toString() + ",\"craftingPattern\": " + this.craftingPattern.toString() + "}";
    };
    return Recipe;
}());
Recipe["__class"] = "Recipe";
