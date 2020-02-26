module.exports = (sequelize, Sequelize) => {
const Photos = sequelize.define("photos", {

     id: { type: Sequelize.INTEGER, primaryKey: true },
     map: { type: Sequelize.STRING },
     sponsors_diamond: { type: Sequelize.STRING },
     sponsors_gold: { type: Sequelize.STRING },
     sponsors_silver: { type: Sequelize.STRING },
     sponsors_bronze: { type: Sequelize.STRING },
     gallery: { type: Sequelize.STRING }
    });
    return Photos;
};