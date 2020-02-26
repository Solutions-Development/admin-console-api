module.exports = (sequelize, Sequelize) => {
    const _Evento = sequelize.define("_evento", {

      id: { type: Sequelize.INTEGER, primaryKey: true },
      name: { type: Sequelize.STRING },
      date: { type: Sequelize.STRING },
      hour: { type: Sequelize.STRING },
      place: { type: Sequelize.STRING },
      speaker_name: { type: Sequelize.STRING },
      eventoAsignado: { type: Sequelize.STRING }
 });
    return _Evento;
};
