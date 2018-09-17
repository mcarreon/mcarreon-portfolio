var db = require('../models');

module.exports = function (app) {
  // return project table in json body
  app.get("/api/projects", function (req, res) {
    db.project.findAll({}).then(function (data) {
      res.json(data);
    });
  });

  // return project table with specific type of project
  app.get("/api/projects/:type", function (req, res) {
    db.project.findAll({
        where: {
          project_type: req.params.type
        }
      })
      .then(function (data) {
        res.json(data);
      });

  });
};