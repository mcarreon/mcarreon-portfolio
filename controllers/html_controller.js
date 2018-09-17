var db = require("../models");

module.exports = function (app) {
    // Load index page
    app.get("/", function (req, res) {
        db.project.findAll({ limit: 16, order: [['project_creation_date', 'DESC']]}) 
        .then(function(data) {
            var projectData = [];
            data.forEach(function(e) {
                var date = e.dataValues.project_creation_date;
                var dateSub = date.toString();
                var finalDate = dateSub.substring(0, dateSub.indexOf(':') - 3);
                e.dataValues.project_creation_date = finalDate;

                projectData.push(e);
            });




            var handlebarsObj = {
                projectData: projectData
            }
            //console.log(handlebarsObj.projectData);
            res.render("index", handlebarsObj);
        });
    });

    app.get("/message", function (req, res) {
        res.render("message");
    });

    // Render 404 page for any unmatched routes
    app.get("*", function (req, res) {
        res.render("404");
    });
};