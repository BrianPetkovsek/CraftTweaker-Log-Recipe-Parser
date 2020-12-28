
import def.js.Number;
import def.js.Object;
import def.js.String;

public class Recipe{
	Boolean isFurnace;
	Boolean isShaped;	
	String recipeName;
	Item itemReturn;
	Number numReturn;
	CraftingPattern craftingPattern;
	
	public Recipe(Boolean f, Boolean b, Object ... args) {
		this.isFurnace = f;
		this.isShaped = b;
		this.recipeName = (String)args[0];
		this.itemReturn = (Item)args[1];
		this.numReturn = (Number) args[2];
		this.craftingPattern = (CraftingPattern)args[3];
	}
	
	@Override
	public java.lang.String toString(){
		return "{\"isFurnace\": "+isFurnace+",\"isShaped\": "+isShaped+",\"recipeName\": \""+recipeName.toJSString()+"\", \"itemReturn\": "+itemReturn.toString()+",\"numReturn\": "+numReturn.toJSString()+",\"craftingPattern\": "+craftingPattern.toJSString()+"}";
	}
	
}
