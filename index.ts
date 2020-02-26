const Express = require('express');
const server: any = Express();
const chalk = require("chalk");
const bodyParser = require("body-parser");
const firewall = require("node-firewall");
const logger = require("morgan");
const morgan = require("morgan");
const cors = require("cors");

const fw = new firewall.Firewall('fw.main', '^/');

fw.add('^/dev', null);

import { router } from "./routes/router";

firewall.use(server); 

fw.add('^/admin', ['role', 'admin', 'developer']);
fw.add('^/', ['role', 'user', 'developer']);

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use('/', router);
server.use('/', Express.static('assets'));
server.use(logger('common'));

server.set('view engine', 'ejs');

firewall.map.add(fw);


Promise.resolve(server.listen(80)).then(async () => {
  const _message = chalk.green.bold("[OK]");
  await console.log(`Server running... ${_message}`);
});
