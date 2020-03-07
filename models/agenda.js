module.exports = (sequelize, Sequelize) => {
    const Agenda = sequelize.define("agenda", {

     id: { type: Sequelize.INTEGER, primaryKey: true },
     code: { type: Sequelize.STRING },
     name: { type: Sequelize.STRING },
    });
    return Agenda;
};