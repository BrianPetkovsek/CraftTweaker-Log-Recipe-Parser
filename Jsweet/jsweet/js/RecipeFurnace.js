var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var RecipeFurnace = (function (_super) {
    __extends(RecipeFurnace, _super);
    function RecipeFurnace(f, b, args) {
        var _this = _super.call(this, f, b, args) || this;
        if (_this.itemInput === undefined)
            _this.itemInput = null;
        if (_this.cooktime === undefined)
            _this.cooktime = null;
        _this.isFurnace = f;
        _this.isShaped = b;
        _this.itemReturn = args[0];
        _this.recipeName = _this.itemReturn.getName();
        _this.numReturn = args[1];
        _this.itemInput = args[2];
        _this.cooktime = args[args.length - 1];
        _this.craftingPattern = null;
        return _this;
    }
    /**
     *
     * @return {string}
     */
    RecipeFurnace.prototype.toString = function () {
        return "{\"isFurnace\": " + this.isFurnace + ",\"isShaped\": " + this.isShaped + ",\"itemInput\": " + this.itemInput.toString() + ",\"recipeName\": \"" + this.recipeName.toString() + "\", \"itemReturn\": " + this.itemReturn.toString() + ",\"numReturn\": " + this.numReturn.toString() + ",\"craftingPattern\": null}";
    };
    return RecipeFurnace;
}(Recipe));
RecipeFurnace["__class"] = "RecipeFurnace";
