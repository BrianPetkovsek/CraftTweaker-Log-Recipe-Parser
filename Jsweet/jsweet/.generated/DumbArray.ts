/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
class DumbArray {
    arr : Object[];

    public constructor(...obj : Object[]) {
        if(this.arr===undefined) this.arr = null;
        this.arr = obj;
    }

    /**
     * 
     * @return {string}
     */
    public toString() : string {
        let s : string = "[";
        for(let index201=0; index201 < this.arr.length; index201++) {
            let elm = this.arr[index201];
            {
                if(<boolean><any>elm) s += elm.toString() + ","; else s += "null,";
            }
        }
        if(this.arr.length > 0) s = s.substring(0, s.length - 1);
        return s + "]";
    }
}
DumbArray["__class"] = "DumbArray";



