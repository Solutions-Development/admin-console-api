module.exports = (sequelize, Sequelize) => {
    const Conferencista = sequelize.define("conferencista", {

      id: { type: Sequelize.INTEGER, primaryKey: true },
      nombre: { type: Sequelize.STRING },
      cedula: { type: Sequelize.STRING },
      nacionalidad: { type: Sequelize.STRING },
      telefono_movil: { type: Sequelize.STRING },
      correo: { type: Sequelize.STRING },
      estudio_grado: { type: Sequelize.STRING },
      sub_especialidad: { type: Sequelize.STRING },
      practica_publica: { type: Sequelize.STRING },
      practica_privada: { type: Sequelize.STRING },
      membresias: { type: Sequelize.STRING },
      biografia: { type: Sequelize.STRING } ,
      perfil: { type: Sequelize.STRING },
      eventoAsignado: { type: Sequelize.STRING },
    });
    return Conferencista;
};