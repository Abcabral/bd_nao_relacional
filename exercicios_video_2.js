 //#region item 1   
 db.menu.updateMany(
    {},
    {$mul : {price: 1.1}}
 )
 //#endregion

  //#region item 2 
 db.menu.updateOne(
    {dish : "Taco"},
    {$push : {ingredients: "Guacamole"}}
 )
 //#endregion
//#region item 3
 db.menu.updateOne(
    {dish : "Sushi"},
    {$set : {price: 35}}
 )
 //#endregion
//#region item 4
 db.menu.updateOne(
    {dish : "Taco"},
    {$pull : {ingredients: "Beef"}}
 )
  db.menu.updateOne(
    {dish : "Taco"},
    {$push : {ingredients: "Chicken"}}
 )
 //#endregion
