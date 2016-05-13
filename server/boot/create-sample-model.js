// module.exports = function(app) {
//   app.dataSources.mysqlDs.automigrate('POI', function(err) {
//     if (err) throw err;
//         app.models.POI.create([
//           {
//             "name": "poi1",
//             "coordinates": {
//               "lat": 22.253155,
//               "lng": 113.858185
//             },
//             "category": "Tour_Stop",
//             "tourOrder": 1,
//             "description": "Description for tour stop 1",
//             "openingHours": "08:00:00",
//             "counter": 0,
//             "lastModified": "2016-05-10T00:00:00.000Z",
//             "id": 1
//           }
//         ], function(err, pois) {
//           if (err) throw err;
     
//           console.log('Models created: \n', pois);
//         });
//   });
// };