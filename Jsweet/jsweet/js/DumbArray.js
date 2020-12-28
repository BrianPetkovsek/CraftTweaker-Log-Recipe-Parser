/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var DumbArray = (function () {
    function DumbArray() {
        var obj = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            obj[_i] = arguments[_i];
        }
        if (this.arr === undefined)
            this.arr = null;
        this.arr = obj;
    }
    /**
     *
     * @return {string}
     */
    DumbArray.prototype.toString = function () {
        var s = "[";
        for (var index201 = 0; index201 < this.arr.length; index201++) {
            var elm = this.arr[index201];
            {
                if (elm)
                    s += elm.toString() + ",";
                else
                    s += "null,";
            }
        }
        if (this.arr.length > 0)
            s = s.substring(0, s.length - 1);
        return s + "]";
    };
    return DumbArray;
}());
DumbArray["__class"] = "DumbArray";
