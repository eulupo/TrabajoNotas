const db = require('../database/models');


module.exports = {

    index: function(req, res) {
        db.Nota.findAll()
        .then(resultados => {
            res.render('index', {notas: resultados})
        })        
    },    

    new: function(req, res) {
        db.Nota.create({
            titulo: req.body.title,
            mensaje: req.body.message
        })
        .then(resultado => res.redirect('/'))
    },

    detail: function(req, res) {
        db.Nota.findByPk(req.params.id)
        .then(resultado => {
            res.render('detail', {nota: resultado})
        })
    },

    edit: function(req, res) {
        db.Nota.update({
            titulo: req.body.title,
            mensaje: req.body.message           
        }, {
            where: {id: req.params.id}
        })
        .then(resultado => res.redirect('/'))
    },

    delete: function(req, res) {
        db.Nota.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(resultado => res.redirect('/'))
    },

}