var request = require('request'),
    config = require('npcp'),
    logger = require('scribe'),
    q = require('q');

/**
 * Initialize Logging
 */
var log = logger.getLog();
log.info('Logger Loaded for Access Module');

var expiresTimeStamp = 0,
    cachedData;
/**
 * Main Verify Method
 * This is called by the routes function to validate the users access
 */
exports.verify = function (ssoid) {
    var deferred = q.defer();
    getUsers(ssoid).then(function (data) {
        deferred.resolve(data);
    }, function () {
        deferred.reject(false);
    });
    return deferred.promise;
};
/**
 * Get Users Method
 * This will check the current list of users against an in memory cache, if users have access we will return true
 * return boolean
 */
var getUsers = function (ssoid) {
    var deferred = q.defer();
    var currentTimestamp = new Date().getTime();
    var cacheExpiresIn = validateTimeDifference(currentTimestamp);
    log.info("Current TimeStamp: " + currentTimestamp);
    log.info("Expires TimeStamp: " + expiresTimeStamp);
    log.info("Cache Expires in: " + cacheExpiresIn);
    if (cacheExpiresIn > 1) {
        var data = {
            offset: 0,
            limit: 500,
            fields: ['record_id', 'dt_created', 'created_by', 'dt_updated', 'updated_by', 'proxy_created_by', 555616, 555596, 555632],
            filters: {},
            sort: {},
            case_sensitive: true
        };
        var headers = {
            'Content-Type': 'application/json',
            'accept': 'application/json, text/javascript, */*; q=0.01'
        };
        var options = {
            'url': 'http://api.forms.ge.com/v1/forms/65382/records?access_token=' + config.accessToken,
            'json': data,
            'method': 'post',
            'headers': headers
        };

        var req = request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                expiresTimeStamp = new Date().getTime() + 1800000;
                log.info("New Expires Stamp: " + expiresTimeStamp);
                log.info(body);
                cachedData = body.records;
                if (validateUserList(ssoid)) {
                    log.info(ssoid + " has been validated for beta access");
                    deferred.resolve(true);
                } else {
                    log.info(ssoid + " has no access for beta access");
                    deferred.resolve(false);
                }
            }else{
                log.error(error);
                deferred.reject(false);
            }
        });
        req.on('error',function(error){
            log.error('Error with Access ', error);
        });
    } else {
        deferred.resolve(validateUserList(ssoid));
    }
    return deferred.promise;
};
/**
 * Validate User List
 * Used to parse the cached list of users
 * @param ssoid
 * @returns {boolean}
 */
var validateUserList = function(ssoid){
    for (var i = 0; i < cachedData.length; i++) {
        if (cachedData[i].field_555596[0] === ssoid) {
            return true;
        }
    }
    return false;
};
/**
 * Validate TIme Difference
 * This is used to check the cache and see if it is expired
 * @param now
 * @returns {number}
 */
var validateTimeDifference = function(now){
    return now - expiresTimeStamp;
};