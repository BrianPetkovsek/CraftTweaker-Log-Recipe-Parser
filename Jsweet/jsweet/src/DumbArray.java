
import def.js.Object;

public class DumbArray extends Object{
	Object[] arr;
	public DumbArray(Object ... obj){
		this.arr = obj;
	}
	
	@Override
	public java.lang.String toString(){
		String s = "[";
		for (Object elm : arr){
			if((boolean)(java.lang.Object)elm)
				s += elm.toJSString()+",";
			else
				s += "null,";
		}
		if(arr.length > 0)
			s = s.substring(0,s.length() -1);
		return s + "]";
	}
}

