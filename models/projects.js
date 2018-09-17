module.exports = function(sequelize, DataTypes) {
    var Project = sequelize.define("project", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true
        },
        project_link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        project_host: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        project_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        project_type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        project_desc: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        project_tags: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        project_creation_date: {
            type: DataTypes.DATE, 
            allowNull: true,
        }
    });
    return Project;
}