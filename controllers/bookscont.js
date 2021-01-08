const db = require("../models");

module.exports = {
    searchAll: function(req, res) {
        db.googlebooks
            .search(req.query)
            .sort({ date: -1 })
            .then(dbModl => res.json(dbModl))
            .catch(err => res.status(422).json(err))
    },
    searchOne: function(req, res) {
        db.googlebooks
            .searchOne({id: req.params.id})
            .then(dbModl => res.json(dbModl))
            .catch(err => res.status(422).json(err))
    }
}