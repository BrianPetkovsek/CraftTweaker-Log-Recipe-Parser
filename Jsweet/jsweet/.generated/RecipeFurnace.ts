/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
class RecipeFurnace extends Recipe {
    itemInput : Item;

    cooktime : number;

    public constructor(f : boolean, b : boolean, args : Object[]) {
        super(f, b, args);
        if(this.itemInput===undefined) this.itemInput = null;
        if(this.cooktime===undefined) this.cooktime = null;
        this.isFurnace = f;
        this.isShaped = b;
        this.itemReturn = <Item>args[0];
        this.recipeName = this.itemReturn.getName();
        this.numReturn = <number>args[1];
        this.itemInput = <Item>args[2];
        this.cooktime = <number>args[args.length - 1];
        this.craftingPattern = null;
    }

    /**
     * 
     * @return {string}
     */
    public toString() : string {
        return "{\"isFurnace\": " + this.isFurnace + ",\"isShaped\": " + this.isShaped + ",\"itemInput\": " + this.itemInput.toString() + ",\"recipeName\": \"" + this.recipeName.toString() + "\", \"itemReturn\": " + this.itemReturn.toString() + ",\"numReturn\": " + this.numReturn.toString() + ",\"craftingPattern\": null}";
    }
}
RecipeFurnace["__class"] = "RecipeFurnace";



