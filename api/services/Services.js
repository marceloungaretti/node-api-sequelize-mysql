const database = require('../models')

class Services {
    constructor(nomeDoModelo){
        this.nomeDoModelo = nomeDoModelo
    }

    async pegaTodosOsRegistros(){
        return database[this.nomeDoModelo].findAll()
    }

    async pegaUmRegistro(id){
        return database[this.nomeDoModelo]
    }

    async criaRegistro(dados){

    }

    async atualizaRegistro(dadosAtualizados, id){

    }

    async apagaRegistro(id){
        
    }
}

module.exports = Services