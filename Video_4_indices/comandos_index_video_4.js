
//consulta inicial sem index
db.socios.find({
    nome: { $regex: "SeuNome", $options: "i" }
}).explain("executionStats")
//criacao do index
db.socios.createIndex({
    nome_socios: "text"
})
//verificar se o index foi criado
db.socios.getIndexes()
//consulta usando o index
db.socios.find({
    $text: {
        $search: "SeuNome"
    }
}).explain("executionStats")
