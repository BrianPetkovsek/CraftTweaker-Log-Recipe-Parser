const fs = require('fs');
eval(fs.readFileSync(__dirname+'/bundle.js')+'')
exports.java = java;
eval(fs.readFileSync(__dirname+'/DumbArray.js')+'')
exports.DumbArray = DumbArray;
eval(fs.readFileSync(__dirname+'/CraftingPattern.js')+'')
exports.CraftingPattern = CraftingPattern;
eval(fs.readFileSync(__dirname+'/Item.js')+'')
exports.Item = Item;
eval(fs.readFileSync(__dirname+'/Recipe.js')+'')
exports.Recipe = Recipe;
eval(fs.readFileSync(__dirname+'/RecipeFurnace.js')+'')
exports.RecipeFurnace = RecipeFurnace;
eval(fs.readFileSync(__dirname+'/Recipes.js')+'')
exports.Recipes = Recipes;
