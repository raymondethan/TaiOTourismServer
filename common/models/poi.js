module.exports = function(Poi) {
    Poi.getUpdate = function(date, cb) {
        _d = new Date(date);
        Poi.find({where: {lastModified: {gt: _d}}},function (err, posts) {
            if (null != posts && posts.length > 0) {
                response = "Name of coffee shop is " + posts[0].name;
            }
            else {
                response = "no posts";
            }
            cb(null, posts);
            console.log(response);});
    }
    Poi.remoteMethod('getUpdate',{
        http: {path: '/getupdate', verb: 'get'},
        accepts: {arg: 'date', type: 'string', http: { source: 'query' } },
        returns: {arg: 'pois', type: 'string'}
    });
};
