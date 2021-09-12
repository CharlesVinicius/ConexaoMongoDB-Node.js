/*const mongoClient = require("mongodb").MongoClient
mongoClient.connect("mongodb://localhost:27017",{useUnifiedTopology:true},

(error, connection)=>{
if(error) return console.log(error)
global.connection = connection.db("site")
console.log("Conectado")



})*/

const mongoose = require("mongoose")



//Conectando ao banco
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/mongodata",{
    useMongoClient:true
}).then (()=>{

    console.log("MongoDB conectado ")

}).catch((err)=>{
    console.log("Houve um erro ao se conectar ao mongoDB" +err)
})

// Model - usuários
//Definindo o model

const UsuarioSchema = mongoose.Schema({
    nome:{
        type: String,
                        //Para colocar como campo obrigatório: require = true
    },

    sobrenome:{
        type : String,
        require : true
    },

    email:{
        type:String,
        require: true
    },

    idade:{
        type: Number,
        require:true
    },
    pais: {
        type: String,

    }

})

//Collection
mongoose.model('usuarios',UsuarioSchema)

const user = mongoose.model('usuarios')

new user ({

    nome:"Junior",
    sobrenome: "Kyle",
    idade: 19,
    email: "kyle@gmail.com",
    pais:"California"

}).save().then(()=>{

    console.log("usuario adicionado")

}).catch((err)=>{

        console.log("Erro ao adicionar")

})