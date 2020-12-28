/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
class Recipe {
    isFurnace : boolean;

    isShaped : boolean;

    recipeName : string;

    itemReturn : Item;

    numReturn : number;

    craftingPattern : CraftingPattern;

    public constructor(f : boolean, b : boolean, ...args : Object[]) {
        if(this.isFurnace===undefined) this.isFurnace = null;
        if(this.isShaped===undefined) this.isShaped = null;
        if(this.recipeName===undefined) this.recipeName = null;
        if(this.itemReturn===undefined) this.itemReturn = null;
        if(this.numReturn===undefined) this.numReturn = null;
        if(this.craftingPattern===undefined) this.craftingPattern = null;
        this.isFurnace = f;
        this.isShaped = b;
        this.recipeName = <string>args[0];
        this.itemReturn = <Item>args[1];
        this.numReturn = <number>args[2];
        this.craftingPattern = <CraftingPattern>args[3];
    }

    /**
     * 
     * @return {string}
     */
    public toString() : string {
        return "{\"isFurnace\": " + this.isFurnace + ",\"isShaped\": " + this.isShaped + ",\"recipeName\": \"" + this.recipeName.toString() + "\", \"itemReturn\": " + this.itemReturn.toString() + ",\"numReturn\": " + this.numReturn.toString() + ",\"craftingPattern\": " + this.craftingPattern.toString() + "}";
    }
}
Recipe["__class"] = "Recipe";



