module.exports = (sequelize, Sequelize) => {
    const Sede = sequelize.define("sede", {

     id: { type: Sequelize.INTEGER, primaryKey: true },
     nombre: { type: Sequelize.STRING },
     ubicacion: { type: Sequelize.STRING },
     direccion_detallada: { type: Sequelize.STRING },
     nombreSalon: { type: Sequelize.STRING },
     alias: { type: Sequelize.STRING },
     capacidad: { type: Sequelize.STRING }
    });
    return Sede;
};