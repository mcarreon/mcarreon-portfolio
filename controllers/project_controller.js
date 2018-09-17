var db = require('../models');
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (app) {
  // return project table in json body
  app.get("/api/projects", function (req, res) {
    db.project.findAll({}).then(function (data) {
      res.json(data);
    });
  });

  // return project table with specific type of project
  app.get("/api/projects/:query", function (req, res) {
    db.project.findAll({
        where: {
          [Op.or]: 
            [{ project_name: req.params.query }, {project_type: req.params.query,}]
          
        }
      })
      .then(function (data) {
        res.json(data);
      });

  });
};