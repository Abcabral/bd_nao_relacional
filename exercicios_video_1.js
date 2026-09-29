    //#region ex1
    db.produtos.find(
   
        {preco:{$gte: 2000 }}
    )
    //#endregion
    //#region ex2
    db.produtos.find({
        $and: [
            {categoria:"Móveis"},
            {avaliacao:{$gt: 4.5 }}
        ]
    
        })
        //#endregion
    //#region ex3
    db.produtos.find({
        $or: [
            {preco:{$lt: 2000}},
            {estoque:{$gt: 20 }}
        ]
    
        })
         //#endregion
    //#region ex4
    db.produtos.find(   
            {avaliacao:{$exists: true }}
        )
        //#endregion
    //#region ex5
    db.produtos.find({
        $nor: [
            {categoria:"Eletrônicos"},
            {preco:{$gt: 3000 }}
        ]
    
        })
    //#endregion
