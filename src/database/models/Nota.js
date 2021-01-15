module.exports = function(sequelize, DataTypes) {
    let alias = 'Nota';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        titulo: {
            type: DataTypes.STRING
        },

        mensaje: {
            type: DataTypes.STRING
        }
    };
    let config = {
        tableName: 'notas',
        timestamps: false,
        underscored: true
    };

    const Nota = sequelize.define(alias, cols, config);

    return Nota;
}