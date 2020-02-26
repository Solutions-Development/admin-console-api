module.exports = (sequelize, Sequelize) => {
    const Evento = sequelize.define("evento", {

      id: { type: Sequelize.INTEGER, primaryKey: true },
      nombre: { type: Sequelize.STRING },
      fecha_inicio: {  type: Sequelize.STRING },
      fecha_termino: {  type: Sequelize.STRING },
      ciudad: {  type: Sequelize.STRING },
      pais: {  type: Sequelize.STRING },
      direccion: {  type: Sequelize.STRING },
      sede: {  type: Sequelize.STRING },
      banner: {  type: Sequelize.STRING },
      iconografia: {  type: Sequelize.STRING },
      mapa: { type: Sequelize.STRING }
    });
    return Evento;
};
