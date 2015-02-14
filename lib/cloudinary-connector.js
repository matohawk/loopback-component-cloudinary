var CloudinaryService = require('./cloudinary-service');

exports.initialize = function (dataSource) {
  var settings = dataSource.settings || {},
    a, b;

  var connector = new CloudinaryService(settings);
  dataSource.connector = connector;
  dataSource.connector.dataSource = dataSource;

  connector.DataAccessObject = function () {};

  for (a in CloudinaryService.prototype) {
    var method = CloudinaryService.prototype[a];
    if ('function' === typeof method) {
      connector.DataAccessObject[a] = method.bind(connector);
      for (b in method) {
        connector.DataAccessObject[a][b] = method[b];
      }
    }
  }

  connector.define = function (model, properties, settings) {};
};
