module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('POI', function(err) {
    if (err) throw err;
 
  });
};