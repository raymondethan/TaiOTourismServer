module.exports = function(Poi) {
    Poi.getUpdate = function(date, cb) {
        _d = new Date(date);
        console.log(_d);
        //console.log(date);
        // Poi.findById( 1, function (err, instance) {
        //     response = "Name of coffee shop is " + instance.name;
        //     cb(null, response);
        //     console.log(response);
        // });
        Poi.find({where: {lastModified: {gt: _d}}},function (err, posts) {
            if (null != posts && posts.length > 0) {
                response = "Name of coffee shop is " + posts[0].name;
            }
            else {
                response = "no posts";
            }
            cb(null, posts);
            console.log(response);});
        // cb(null,Poi.find({where: {id: 1}},function (err, posts) { console.log("error: " + err + ", " + posts)} ));
    }
    Poi.remoteMethod('getUpdate',{
        http: {path: '/getupdate', verb: 'get'},
        accepts: {arg: 'date', type: 'string', http: { source: 'query' } },
        returns: {arg: 'pois', type: 'string'}
    });
};
