module.exports = function(GeneralInfo) {
        GeneralInfo.getUpdate = function(date, cb) {
        _d = new Date(date);
        GeneralInfo.find({where: {lastModified: {gt: _d}}},function (err, posts) {
            cb(null, posts);
            console.log("err: " + err);});
    }
};
