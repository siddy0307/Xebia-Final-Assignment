
/**
 *  File to generate SMUser details for the person making the request
 */
var config = require('npcp');

exports.get = function(req){
    var user;
    console.log(req.user);
    /**
     * 1. Check to see if Open ID Pattern exists
     * 2. Check if the sm session pattern exists
     * 3. Use test data
     */
    if(req.user && req.user.sub){
        user = {
            id: req.user.sub,
            first: req.user.firstname,
            last: req.user.lastname,
            ifg: req.user.gehrindustrygroup,
            title: req.user.title
        };
    }else if(req.headers && req.headers.sm_user) {
        user = {
            id: req.headers.sm_user,
            first: req.headers.sm_first_name,
            last: req.headers.sm_last_name,
            ifg: req.headers.gehrindustrygroup
        };
    } else {
        user = {
            id: config.ssoid,
            first: config.firstName,
            last: config.lastName,
            ifg: 'Test IFG'
        };
    }
    return user;
};

exports.getSSO = function(req){
    if(req.user){
        return req.user.sub;
    } else if (req.headers && req.headers.sm_user){
        return req.headers.sm_user;
    } else {
        return config.ssoid;
    }
};