import { REPL_MODE_SLOPPY } from "repl";
import { ABSTRACT } from "sequelize/types";

const models = require("../models");
const Actividad = models.actividad;
const Conferencista = models.conferencista;
const Usuario = models.usuario;
const Sede = models.sede;
const Evento = models.evento;
const _Evento = models._evento;
const Photos = models.photos;
const TipoActividad = models.tipoActividad;

const request = require("request-promise-native");
const path = require("path");

export async function events(req: any, reply: any) {
  _Evento.findAll().then(async function(actividades: any) {
    var arr = [];
    for (var i = 0; i < actividades.length; i++){
      const val = await Conferencista.findAll({
        where: {
            nombre: actividades[i].speaker_name
        }
       });
      var data = {
        name: actividades[i].name,
        date: actividades[i].date,
        hour: actividades[i].hour,
        place: actividades[i].place,
        speaker: {
          speaker_name: actividades[i].speaker_name,
          photo: actividades[i].perfil,
          nationality: "none",
          cv: "none"
        }
      }
      arr.push(data)
    }
    reply.send([{ event: arr}])
  })
}
/**
 * @byDay
 * @param req 
 * @param reply 
 */
export async function byDay(req: any, reply: any) {
  _Evento.findAll().then(function(actividades: any) {
    var arr = [];
    for (var i = 0; i < actividades.length; i++){
      var data = {
        date: actividades[i].date,
        name: actividades[i].name,
        hour: actividades[i].hour,
        place: actividades[i].place,
        speaker: {
          speaker_name: actividades[i].speaker_name,
          photo: "none",
          nationality: "none",
          cv: "none"
        }
      }
      arr.push(data)
    }
    reply.send({ event: arr })
  })
}

 // end
 /**
  * 
  * @param req @byHour
  * @param reply 
  */
 export async function byHour(req: any, reply: any) {
  _Evento.findAll().then(function(actividades: any) {
    var arr = [];
    for (var i = 0; i < actividades.length; i++){
      var data = {
        hour: actividades[i].hour,
        name: actividades[i].name,
        date: actividades[i].date,
        place: actividades[i].place,
        speaker: {
          speaker_name: actividades[i].speaker_name,
          photo: "none",
          nationality: "none",
          cv: "none"
        }
      }
      arr.push(data)
    }
    reply.send({ event: arr })
  })
}
  //end
  /**
   * @byPlace
   * @param req 
   * @param reply 
   */
  export async function bySalon(req: any, reply: any) {
    _Evento.findAll().then(function(actividades: any) {
      var arr = [];
      for (var i = 0; i < actividades.length; i++){

        var data = {
          place: actividades[i].place,
          name: actividades[i].name,
          date: actividades[i].date,
          hour: actividades[i].hour,
          speaker: {
            speaker_name: actividades[i].speaker_name,
            photo: "",
            nationality: "none",
            cv: "none"
          }
        }
        arr.push(data)
      }
      reply.send({ event: arr })
    })
  }
  //end
export async function homeScreen(req: any,  reply: any) {
  
  const event = req.params.event;
  Promise.resolve(request.get({
  url: "https://dummy-data-api.herokuapp.com/home_screen_icons",
  json: true
 })).then(async (response: any) => {
   var arr = [];
   for (var i = 0; i < 11; i++){
     var data = {
       title: response[i].title,
       icon: response[i].icon,
     }
     arr.push(data);
   }
   const val = await Evento.findAll({
    where: {
        nombre: event
    }
   });
  
   const banner = {
     title: "app_banner",
     icon: val[0].banner
   }
   arr.push(banner);
   reply.send(arr);
 });
}
export async function ConferencistasEvent(req: any, reply: any) {
  const event = req.params.event;
  const val = await Conferencista.findAll({
    where: {
      eventoAsignado: event
    }
  });
  var conferencistasArray = [];
  for (var i = 0; i < val.length; i++) {
    var data = val[i]
    await conferencistasArray.push(data);
  }
  await reply.send(conferencistasArray);
}
export async function eventsByEvent(req: any, reply : any) {
  _Evento.findAll().then(async function(actividades: any) {
    var arr = [];
    for (var i = 0; i < actividades.length; i++){
      const val = await _Evento.findAll({
        where: {
            eventoAsignado: req.params.event
        }
       });
      var data = {
        name: val[i].name,
        date: val[i].date,
        hour: val[i].hour,
        place: val[i].place,
        speaker: {
          speaker_name: val[i].speaker_name,
          photo: val[i].perfil,
          nationality: "none",
          cv: "none"
        }
      }
      arr.push(data)
    }
    reply.send([{ event: arr}]);
  }) 
}
export async function sendBanner(req: any, reply: any) {
  const name = req.params.name;
  reply.sendFile(path.resolve(`../webapp-api/${name}.png`));
}
export async function clearEvents(req: any, reply: any) {
  Evento.destroy({
    where: {},
    truncate: true
  });
  reply.end();
}
export async function clearActividades(req: any, reply: any) {
  _Evento.destroy({
    where: {},
    truncate: true
  });
  reply.end();
}
export async function clearConferencistas(req: any, reply: any) {
  Conferencista.destroy({
    where: {},
    truncate: true
  });
  reply.end();
}
export async function links(req: any, reply: any) {
 const links = { link1: "http://google.com", link2: "http://amazon.com", link3: "http://locomotora.com" };
 reply.send([links]);
}
export async function root(req: any, reply: any) {
  reply.status(200)
       .send({
         message: "Travel Solutions - Admin Console API"
       });
}
export async function mail(req: any, reply: any) {
    const rq = req.body;
    const mailgun = require("mailgun-js");
    const DOMAIN = 'mail.sistemasolutions.tech';
    const api_key: string = "22287c3561519fb4db4a2403d7d5ffe3-713d4f73-52566cfe"
    const mg = mailgun({apiKey: api_key, domain: DOMAIN});
    const data = {
	  from: 'Solutions Admin <me@samples.mailgun.org>',
	  to: 'jdcoding01@gmail.com, jdcoding@icloud.com',
	  subject: 'Solicitud Acceso',
	  text: `Nueva Solicitud de Accesso \n Detalles de solicitud: \n Nombre Completo: ${rq.nombre} \n Correo: ${rq.correo} \n Cedula de Identidad: ${rq.cedula} \n Empresa: ${rq.empresa} \n Posicion: ${rq.posicion} \n Numero Contacto: (${rq.codigoArea}) - ${rq.numero} \n Travel Solutions (c) 2020; Plataforma Integrada Administrativa.`
    };
mg.messages().send(data, function (error: any, body: any) {
	console.log(body);
});
  await reply.redirect("http://eventos.solutions.com.do/enviada");
}
export async function actividad(req: any , res: any) {

      const rq = req.body;
      const actividad = {
        id: "0",
        nombre: rq.nombre_actividad,
        fecha_inicio: rq.fecha_inicio,
        fecha_termino: rq.fecha_termino,
        duracion: rq.duracion,
        locacion: rq.locacion,
        direccion: rq.direccion,
        actividad_dirigida: rq.actividad_dirigida,
        eventoAsignado: rq.eventoAsignado,
        createdAt: "Today",
        updatedAt: "Today"
      };

      const _evento = {
        id: "0",
        name: rq.nombre_actividad,
        date: rq.fecha_inicio,
        hour: rq.duracion,
        place: rq.locacion,
        speaker_name: rq.representante,
        eventoAsignado: rq.eventoAsignado,
        profile: ''
      }
     await  Actividad.create(actividad);
      await _Evento.create(_evento).then(async (data: any) => {
        console.log(data);
        res.send("OK")
      })
}
export async function conferencistas(req: any , res: any) {

  const rq = req.body;
  const conferencista = {
    id: "0",
    nombre: rq.nombre,
    cedula: rq.cedula,
    nacionalidad: rq.nacionalidad,
    telefono_movil: rq.telefono_movil,
    correo: rq.correo,
    estudio_grado: rq.estudio_grado,
    sub_especialidad: rq.sub_especialidad,
    practica_publica: rq.practica_publica,
    practica_privada: rq.practica_privada,
    membresias: rq.membresias,
    biografia: rq.biografia,
    perfil: rq.perfil,
    eventoAsignado: rq.eventoAsignado,
    createdAt: "Today",
    updatedAt: "Today"
  };
  Conferencista.create(conferencista)
    .then(async (data: any) => {
      res.send(data);
    })
    .catch(async (err:any) => {
      res.status(500).send({
        error:
          err.message || "Some error occurred."
      });
    });
}

export async function usuario(req: any , res: any) {

  const rq = req.body;
  const usuario = {
    id: "0",
    usuario: rq.usuario,
    password: rq.password,
    role: rq.role,
    createdAt: "Today",
    updatedAt: "Today"
  };
  Usuario.create(usuario)
    .then(async (data: any) => {
      res.send(data);
    })
    .catch(async (err:any) => {
      res.status(500).send({
        error:
          err.message || "Some error occurred."
      });
    });
}

export async function sede(req: any , res: any) {

  const rq = req.body;
  const sede = {
    id: "0",
    nombre: rq.nombre,
    ubicacion: rq.ubicacion,
    direccion_detallada: rq.direccion_detallada,
    nombreSalon: rq.nombreSalon,
    alias: rq.alias,
    capacidad: rq.capacidad,
    createdAt: "Today",
    updatedAt: "Today"
  };
  Sede.create(sede)
    .then(async (data: any) => {
      res.send(data);
    })
    .catch(async (err:any) => {
      res.status(500).send({
        error:
          err.message || "Some error occurred."
      });
    });
}
export async function evento(req: any , res: any) {
  const rq = req.body;
  const evento = {
    id: "0",
    nombre: rq.nombre,
    fecha_inicio: rq.fecha_inicio,
    createdAt: "null",
    updatedAt: "null",
    fecha_termino: rq.fecha_termino,
    ciudad: rq.ciudad,
    pais: rq.pais,
    direccion: rq.direccion,
    sede: rq.sede,
    banner: rq.banner,
    iconografia: rq.iconografia,
    mapa: rq.mapa,
  }
  await Evento.create(evento).then(res.status(200).end());
}
export async function getActividad(req: any, reply: any) {
  const count = req.query.limit;
  const countTwo = req.query.start;
  const limit = Number(count);
  const offset = Number(countTwo);
  Actividad.findAll({offset:offset, limit:limit }).then(function(actividades: any) {
    // projects will be an array of all Actividades instances
    reply.send(actividades)
  })
}
export async function index(req: any, reply: any) {
 Evento.findAll().then(function(eventos: any) {
    reply.send(eventos)
 })
}
export async function getConferencistas(req: any, reply: any) {
  Conferencista.findAll().then(function(conferencistas: any) {
    // projects will be an array of all Conferencistas instances
    reply.send(conferencistas)
  })
}
export async function getSede(req: any, reply: any) {
  Sede.findAll().then(function(sedes: any) {
    // projects will be an array of all Sedes instances
    reply.send(sedes)
  })
}
export async function allEventos(req: any, reply: any) {
 Evento.findAll().then(function(evento: any) {
   reply.send(evento);
 });
}
export async function allActividades(req: any, reply: any) {
  Actividad.findAll().then(function (actividad: any) {
  reply.send(actividad);
 });
}
export async function getUsuario(req: any, reply: any) {
  const count = req.query.limit;
  const countTwo = req.query.start;
  const offset = Number(countTwo);
  const limit = Number(count);
  Usuario.findAll({ offset: offset, limit: limit}).then(function(usuario: any) {
    reply.send(usuario)
  })
}
export async function getEventos(req: any, reply: any) {
  const count = req.query.limit;
  const countTwo = req.query.start;
  const offset = Number(countTwo);
  const limit = Number(count);
 /**
  * @Private property @Eventos
  */
  Evento.findAll({ offset: offset, limit: limit }).then(function(eventos: any) {
    // projects will be an array of all Eventos instances
    reply.send(eventos);
  })
}

export async function photos(req: any, reply: any) {
  /*
  const data = {
    map: "",
    sponsors_diamond: [],
    sponsors_gold: [],
    sponsors_silver: [],
    sponsors_bronze: [],
    gallery: []
  }
  reply.send([data]);
  */
 Photos.findAll().then(function(eventos: any) {
  // projects will be an array of all Photos instances
  reply.send(eventos);
 })
}
export async function auth(req: any, reply: any) {
  const username = req.body.username;
  const password = req.body.password;
  const empresa = req.body.empresa;

    const auth = await Usuario.findAll({
        where: {
            usuario: username,
            password: password,
        }
    });
   
   if(auth[0].password === password) {
     if (empresa === "MariJoe") {
      reply.redirect(`http://eventos.solutions.com.do/marijoe/${username}`);
    } else {
      reply.redirect(`http://eventos.solutions.com.do/dashboard/${username}`);
    }
   } else {
     reply.redirect("http://eventos.solutions.com.do");
   }
};
export async function tipoActividad<T>(req: any, reply: any) {
  TipoActividad.findAll().then(function(eventos: any) {
    // projects will be an array of all Actividades instances
    reply.send(eventos);
   });
}
export async function createTipoActividad(req: any, reply: any) {
  const name = req.body.nombre;
  const data = {
    id: "0",
    nombre: name,
    createdAt: "12/12/12",
    updatedAt: "12/12/12"
  };
  await TipoActividad.create(data).then(reply.status(200).end());
  
}

export async function photosPoint(req: any, reply: any) {
  Promise.resolve(request.get({
    url: "http://dummy-data-api.herokuapp.com/photos",
    json: true
  })).then(async response => {
    reply.send(response);
  })
}
const os = require("os");

export async function ireq<T>(req: any, reply: any) {
  reply.status(200)
       .send({
         message: "STATUS 200 OK",
         hostname: os.hostname
       })
}

export async function agenda<T>(req: any, reply: any) {
  const username = req.params.username;
  const data = {
    name: username,
    title: `By: ${username}`
  }
  await reply.send([data]);
}