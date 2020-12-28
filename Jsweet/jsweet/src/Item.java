import def.js.JSON;
import def.js.Object;
import def.js.String;

public class Item extends Object{
	private String name;
	private JSON tags;
	
	Item(String name){
		this.name = name;
	}
	
	public Item withTag(JSON tags){
		this.tags = tags;
		return this;
	}

	public String getName() {
		return name;
	}
	
	public java.lang.String toString(){		
		java.lang.String s = "{\"name\": \""+name.toJSString()+"\",\"tags\": "; 
		if((boolean)(java.lang.Object)tags)
			s += JSON.stringify(tags);
		else
			s += "null";
		return s+"}";
	}
}
