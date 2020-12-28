/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var Item = (function () {
    function Item(name) {
        if (this.name === undefined)
            this.name = null;
        if (this.tags === undefined)
            this.tags = null;
        this.name = name;
    }
    Item.prototype.withTag = function (tags) {
        this.tags = tags;
        return this;
    };
    Item.prototype.getName = function () {
        return this.name;
    };
    Item.prototype.toString = function () {
        var s = "{\"name\": \"" + this.name.toString() + "\",\"tags\": ";
        if (this.tags)
            s += JSON.stringify(this.tags);
        else
            s += "null";
        return s + "}";
    };
    return Item;
}());
Item["__class"] = "Item";
