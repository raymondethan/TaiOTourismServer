// declare a new module called 'myApp', and make it require the `ng-admin` module as a dependency
var myApp = angular.module('myApp', ['ng-admin']);
// declare a function to run when the module bootstraps (during the 'config' phase)
myApp.config(['NgAdminConfigurationProvider', function (nga) {
    // create an admin application
    var admin = nga.application('Admin interface Tai O guide')
      .baseApiUrl('http://0.0.0.0:3000/api/'); // main API endpoint
    // create a poi entity
    // the API endpoint for this entity will be 'http://jsonplaceholder.typicode.com/pois/:id
    var poi = nga.entity('pointOfInterests');
    // set the fields of the poi entity list view
    poi.listView().fields([
        nga.field('name').isDetailLink(true),
        nga.field('nameCH').label('Chinese name'),
        nga.field('description', 'text')
            .map(function truncate(value) {
                if (!value) return '';
                return value.length > 50 ? value.substr(0, 50) + '...' : value;
            }),
        nga.field('descriptionCH', 'text').label('Chinese description')
            .map(function truncate(value) {
                if (!value) return '';
                return value.length > 50 ? value.substr(0, 50) + '...' : value;
            }),
        nga.field('tourOrder', 'number'),
        nga.field('category'),
    ]);

    poi.creationView().fields([
        nga.field('name')
            .validation({ required: true, minlength: 3, maxlength: 100 }),
        nga.field('nameCH').label('Chinese name')
            .validation({ required: true, minlength: 3, maxlength: 100 }),
        nga.field('description', 'text'),
        nga.field('descriptionCH', 'text').label('Chinese description'),
        nga.field('tourOrder', 'number')
            .validation({ pattern: '[0-9]+'}),
        nga.field('coordinates.lat').label('Latitude')
            .validation({ required: true, pattern: '^-?([0-8]?[0-9]|90)\.[0-9]{1,6}' }),
        nga.field('coordinates.lng').label('Longitude')
            .validation({ required: true, pattern: '^-?((1?[0-7]?|[0-9]?)[0-9]|180)\.[0-9]{1,6}' }),
        nga.field('category', 'choice')
            .choices([
        { value: 'Tour_Stop', label: 'Tour Stop' },
        { value: 'Restaurant', label: 'Restaurant' },
        { value: 'Facility', label: 'Facility (e.g restrooms)' },
        ]),
        nga.field('picture', 'file').uploadInformation({ 'url': 'http://0.0.0.0:3000/api/containers/:container/upload', 'apifilename': 'picture_name' }),
        nga.field('openingHours'),
        nga.field('rating'),
        nga.field('lastModified', 'datetime').label('Last Modified')
            .validation({ required: true }),
    ]);
    // use the same fields for the editionView as for the creationView
    poi.editionView().fields(poi.creationView().fields());
    // add the poi entity to the admin application
    admin.addEntity(poi);
    // attach the admin application to the DOM and execute it
    nga.configure(admin);
}]);
