module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {

     id: { type: Sequelize.INTEGER, primaryKey: true },
     usuario: { type: Sequelize.STRING },
     password: { type: Sequelize.STRING },
     role: { type: Sequelize.STRING }
    });
    return Usuario;
};