var sm = require('./services/smuser.js'),
    Logger = require('nodeserv').Logger,
    url = require('url'),
    request = require('request'),
    fs = require('fs');
var secrets = require("secret-processor");

var appconfig = secrets.process(JSON.parse(fs.readFileSync('appconfig.json', 'utf8')));
/**
 * Initialize Logging
 */
var logger = new Logger(appconfig.logFileWrite, 'route_logs', appconfig.logPath);
/**
 * Standard Route Log Function
 * @param req
 * @param res
 */
var logRouting = function (route, req, user) {
    logger.debug(route + ' Route (' + req.url + ') Hit By User', user);
};
/**
 * Routes Index
 * Standard Index Route
 * @param req
 * @param res
 */
exports.index = function (req, res) {
    var user = sm.get(req);
    logRouting('Index', req, user);
    var pageData = {
        user: JSON.stringify(user),
        paths: JSON.stringify(appconfig.apipaths),
        jspath: appconfig.structpaths.js,
        csspath: appconfig.structpaths.css,
        applications: JSON.stringify(appconfig.applications)
    };
    res.render('index', pageData);
};
/**
 * Page Not Found
 * @param req
 * @param res
 */
exports.pagenotfound = function (req, res) {
    var user = sm.get(req);
    logRouting('Page Not Found', req, user);
    var pageData = {
        user: JSON.stringify(user),
        paths: JSON.stringify(appconfig.apipaths),
        jspath: appconfig.structpaths.js,
        csspath: appconfig.structpaths.css,
        applications: JSON.stringify(appconfig.applications)
    };
    res.render('pagenotfound', pageData);
};
/**
 *  Health Check
 *  Used to perform a health check on the node service
 */
exports.healthCheck = function (req, res) {
    res.render('health', {});
};
/**
 * Version and Stats
 */
exports.version = function (req, res) {
    res.render('stats', {
        name: process.env.npm_package_name,
        version: process.env.npm_package_version
    });
};
