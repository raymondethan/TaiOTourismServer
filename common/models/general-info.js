module.exports = function(GeneralInfo) {
        GeneralInfo.getUpdate = function(date, cb) {
        _d = new Date(date);
        GeneralInfo.find({where: {lastModified: {gt: _d}}},function (err, posts) {
            cb(null, posts);
            console.log("err: " + err);});
    }
    GeneralInfo.observe('before save', function(ctx, next) {
      lm = Date.now();
      ctx.Model.lastModified = lm;
      console.log("GeneralInfo inserted with timestamp " + lm)
      next();
    });
};
