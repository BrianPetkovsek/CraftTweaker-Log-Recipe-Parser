/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
class Item {
    /*private*/ name : string;

    /*private*/ tags : JSON;

    constructor(name : string) {
        if(this.name===undefined) this.name = null;
        if(this.tags===undefined) this.tags = null;
        this.name = name;
    }

    public withTag(tags : JSON) : Item {
        this.tags = tags;
        return this;
    }

    public getName() : string {
        return this.name;
    }

    public toString() : string {
        let s : string = "{\"name\": \"" + this.name.toString() + "\",\"tags\": ";
        if(<boolean><any>this.tags) s += JSON.stringify(this.tags); else s += "null";
        return s + "}";
    }
}
Item["__class"] = "Item";



