module.exports = function(Poi) {
        Poi.getUpdate = function(date, cb) {
        _d = new Date(date);
        Poi.find({where: {lastModified: {gt: _d}}},function (err, posts) {
            cb(null, posts);
            console.log("err: " + err);});
    }
};
