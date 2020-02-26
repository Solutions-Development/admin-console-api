const { Router } = require("express");
const cors = require("cors");
export const router = Router();

const _ = require("../controllers/main");
const cdn = require("../controllers/cdn");

var whitelist = ['https://webapp-congresos.herokuapp.com', 'http://eventos.solutions.com.do', '0.0.0.0/0', 'http://localhost:4000', '127.0.0.1', 'localhost', 'https://webapp-v5.herokuapp.com', 'http://gastro.solutions.com.do'];
var corsOptionsDelegate = function (req: any, callback: any) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } 
  } else {
    corsOptions = { origin: false } 
  }
  callback(null, corsOptions) 
}



router.post('/mail', _.mail);
router.get('/', cors(corsOptionsDelegate), _.root);
router.get('/events', cors(corsOptionsDelegate), _.events);
router.get('/events/:event', cors(corsOptionsDelegate), _.eventsByEvent);
router.post('/actividad', cors(corsOptionsDelegate), _.actividad);
router.get('/actividad', _.getActividad);
router.post('/conferencistas', _.conferencistas);
router.get('/conferencistas', cors(corsOptionsDelegate), _.getConferencistas);
router.post('/sede', _.sede);
router.get('/sede', cors(corsOptionsDelegate), _.getSede);
router.post('/usuario', _.usuario);
router.get('/usuario', _.getUsuario);
router.get('/evento', _.getEventos);
router.post('/evento', _.evento);
router.post('/auth', _.auth);
router.get('/root', _.index);
router.get('/links', _.links);
router.get('/clear/eventos', _.clearEvents);
router.get('/gastro/banner/:name', _.sendBanner);
router.get('/home_screen_icons/:event', cors(corsOptionsDelegate), _.homeScreen);
router.get('/conferencistas/:event', cors(corsOptionsDelegate), _.ConferencistasEvent);
router.get('/photos', _.photosPoint);
router.get('/events/byDay', _.byDay);
router.get('/events/byHour', _.byHour);
router.get('/events/bySalon', _.bySalon);
router.get('/eventos', cors(corsOptionsDelegate), _.allEventos);
router.get('/actividades', _.allActividades);
router.get('/tipoActividad', cors(corsOptionsDelegate), _.tipoActividad);
router.post('/tipoActividad', cors(corsOptionsDelegate), _.createTipoActividad);
router.get('/clear/conferencistas', _.clearConferencistas);
router.get('/clear/actividades', cors(corsOptionsDelegate), _.clearActividades);

router.get('/cdn/:banner', cdn.banner);