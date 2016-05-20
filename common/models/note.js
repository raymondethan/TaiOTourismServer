module.exports = function(Poi) {
    Poi.getUpdate = function(date, cb) {
        _d = new Date(date);
        Poi.find({where: {lastModified: {gt: _d}}},function (err, posts) {
            cb(null, posts);
            console.log("err: " + err);});
    }
    Poi.observe('before save', function(ctx, next) {
      lm = Date.now();
      ctx.Model.lastModified = lm;
      console.log("Poi " + ctx.Model.name + " inserted with timestamp " + lm)
      next();
    });
};
