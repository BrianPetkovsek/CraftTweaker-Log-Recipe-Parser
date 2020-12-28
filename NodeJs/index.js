const { match } = require('assert');
const fs = require('fs');
const {Recipes, Item, CraftingPattern, DumbArray} = require('recipes');


String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

let recipes  = new Recipes();
let furnace = recipes;

var lineReader = require('readline').createInterface({
    input: fs.createReadStream('crafttweaker.log')
});

let openReplace = 'new DumbArray('
let foundRecipes = false;
let line;
lineReader.on('line', function (line) {
    line = line.toString()
    if (foundRecipes && line.startsWith('recipes.add') || line.startsWith('furnace.add')){
        console.log(line);

        let match = line.match(/recipes\.add.+?\(.*?\, .*?\, \[/)
        if(match){
            line = line.splice(match[0].length-1, 1, 'new CraftingPattern(')
            line = line.splice(line.lastIndexOf("]"), 1, ')')
        }
        
        matches = line.matchAll(/(\<(.*?)\>)(?! \| )|(\.withTag\(\{.+?\}*?\)[\,\)\]]?)/g)
        let offset = 0;
        for (let match of matches) {
            if (match[0].indexOf('\|') != -1){
                line = line.splice(match.index+offset,0, openReplace)
                offset += openReplace.length;
                if (line[match.index+match[0].length+offset] == "."){
                    match = matches.next()['value']
                    line = line.splice(match.index+match[0].length+offset-1,0, ')')
                }else{
                    line = line.splice(match.index+match[0].length+offset,0, ')')
                }
                offset++;
            }
        }
        
        match = line.match(/^furnace\.addRecipe\(<.+?>[^,]*/)
        if(match && match[0].charAt(match[0].length-3) == '*')
            line = line.splice(match.index+match[0].length-3, 1, ',')
        else if(match)
            line = line.splice(match.index+match[0].length, 0, ',1')  
        
        line = line.replace(/\-\>/g,'to')
        line = line.replace(/\'/g,'\\\'')
        line = line.replace(/\|/g,',')
        line = line.replace(/</g,'new Item("')
        line = line.replace(/>/g,'")')

        brakLoc = line.indexOf("new CraftingPattern(")
        match = line.match(/\* \d+\, new CraftingPattern\(/)
        if(match && match.index+match[0].length == brakLoc+20){
            line = line.replace(/ \* /,',')
        }else{
            line = line.replace(/\)\, new CraftingPattern\(/,'), 1, new CraftingPattern(')
        }

        matches = line.matchAll(/: (\[.*?\]|\d+|[+-]?(?:[0-9]*[.])?[0-9]+) (?:(as) (.+?)){1,}([\,\}])/g)
        offset = 0;
        for (const match of matches) {
            start = match.index+2
            end = start+match[0].length-1
            numOfTypeDepth = Math.floor((end-start-match[1].length)/(1+match[2].length+1+match[3].length))
            isArray = match[3].substring(match[3].length-2) == "[]"

            baseType = match[3]
            if(isArray){
                baseType = baseType.substring(0, baseType.length-2);
            }
            s = ': {"value":'+match[1]+',"type":"'+baseType+'","depth":'+numOfTypeDepth+',"isArray":'+isArray+'}'+match[4]

            line = line.splice(match.index+offset,match[0].length, s)
            offset += s.length - match[0].length
            console.log(match)
        }
        matches = line.matchAll(/([^\{\ \"]+?): /g)
        offset = 0;
        for (const match of matches) {
            start = match.index
            end = start+match[0].length-2
            s = '"'+match[1]+'"'
            line = line.splice(start+offset,match[1].length, s)
            offset += 2
        }

        line = line.replace(/\[/g,' new DumbArray(')
        line = line.replace(/\]/g,')')

        console.log("\n")
        console.log(line)
        eval(line) 
    }
    else if (line == "Recipes:" || line == "Furnace Recipes:")
        foundRecipes = true;
});

lineReader.on('close', () => {
    console.log('done')
    
    fs.writeFile('minecraft crafting recipes.json', JSON.stringify(JSON.parse(recipes.toString()),null,2), function (err) {
        if (err) throw err;
        console.log('Written!');
    });
})

