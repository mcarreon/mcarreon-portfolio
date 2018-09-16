module.exports = function(sequelize, DataTypes) {
    var Message = sequelize.define("message", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        message_sender: {
            type: DataTypes.STRING,
            allowNull: false, 
            validate: {
                len: [1]
            }
        },
        message_body: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    return Message;
}