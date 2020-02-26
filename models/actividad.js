module.exports = (sequelize, Sequelize) => {
    const Actividad = sequelize.define("actividad", {

     id: { type: Sequelize.INTEGER, primaryKey: true },
      nombre: { type: Sequelize.STRING },
      fecha_inicio: {  type: Sequelize.STRING },
      fecha_termino: { type: Sequelize.STRING },
      duracion: { type: Sequelize.STRING },
      locacion: { type: Sequelize.STRING },
      direccion: { type: Sequelize.STRING },
      actividad_dirigida: { type: Sequelize.STRING },
      eventoAsignado: { type: Sequelize.STRING }
    });
    return Actividad;
};