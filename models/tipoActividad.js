module.exports = (sequelize, Sequelize) => {
    const TipoActividad = sequelize.define("tipoActividad", {

      id: { type: Sequelize.INTEGER, primaryKey: true },
      nombre: { type: Sequelize.STRING },
    });
    return TipoActividad;
};