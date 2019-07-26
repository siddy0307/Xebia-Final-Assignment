var NodeService = require('nodeserv').NodeServ;
var fs = require('fs');
var routes = require('./lib/routes');
var secrets = require("secret-processor");
/**
 * Load the app config
 */
var appconfig = secrets.process(JSON.parse(fs.readFileSync('appconfig.json', 'utf8')));
//Only enable the below line if we need to debug the app config on kubernetes.
fs.writeFileSync('dump.json', JSON.stringify(appconfig, null, 2))
/**
 * Create Server Instance and Configure
 */
var nodeServ = new NodeService(appconfig);
nodeServ.createServer();


nodeServ.enableAuthentication(appconfig.auth);


nodeServ.configureTemplateEngine('hbs', 'handlebars');

nodeServ.hostStaticContent(__dirname + '/public');
nodeServ.hostStaticContent(__dirname + '/public/build');
nodeServ.hostStaticContent(__dirname + '/views');
nodeServ.setViewsDirectory(__dirname + '/views');


console.log(__dirname + '../node_modules');

nodeServ.enableHttpProxy('/http_proxy/*');
nodeServ.registerProxy('/internal_proxy/*', appconfig.oauth3l, true);
nodeServ.registerProxy('/proxy/*', appconfig.oauth3l, true);

/**
 * Setup Routes
 */
nodeServ.registerURL('get', '/health/health.html', routes.healthCheck);
nodeServ.registerURL('get', '*', routes.index, true);

/**
 * Start Up
 */
nodeServ.startService(appconfig.listenIP, appconfig.listenPort);