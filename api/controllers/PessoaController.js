const database = require('../models');

class PessoaController {
    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasAsPessoas);
            //"Pessoas" é o que está sendo retornado da classe models/pessoas.js, e findAll é um método do sequelize
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController;