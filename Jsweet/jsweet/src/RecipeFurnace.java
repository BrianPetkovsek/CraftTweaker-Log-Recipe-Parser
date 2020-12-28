import def.js.Number;
import def.js.Object;

public class RecipeFurnace extends Recipe{
	Item itemInput;
	Number cooktime;

	public RecipeFurnace(Boolean f, Boolean b, Object[] args) {
		super(f, b, args);
		
		this.isFurnace = f;
		this.isShaped = b;
		this.itemReturn = (Item)args[0];
		this.recipeName = itemReturn.getName();
		this.numReturn = (Number) args[1];
		this.itemInput = (Item)args[2];
		this.cooktime = (Number) args[args.length-1];
		this.craftingPattern = null;
	}
	
	
	@Override
	public java.lang.String toString(){
		return "{\"isFurnace\": "+isFurnace+",\"isShaped\": "+isShaped+",\"itemInput\": "+itemInput.toJSString()+",\"recipeName\": \""+recipeName.toJSString()+"\", \"itemReturn\": "+itemReturn.toString()+",\"numReturn\": "+numReturn.toJSString()+",\"craftingPattern\": null}";
	}
}
