var handler = require('./cloudinary-handler');
var cloudinary = require('cloudinary');

module.exports = CloudinaryService;


function CloudinaryService(options) {
  if (!(this instanceof CloudinaryService)) {
    return new CloudinaryService(options);
  }
  if(options.url !== undefined) {
    process.env.CLOUDINARY_URL = options.url;
  }
  else {
    cloudinary.config({
      cloud_name: options.cloudName,
      api_key: options.apiKey,
      api_secret: options.apiSecret
    });
  }
}

CloudinaryService.prototype.upload = function(req, res, next) {
  handler.upload(cloudinary, req, res, next);
};

CloudinaryService.prototype.upload.shared = true;
CloudinaryService.prototype.upload.accepts = [
  {arg: 'req', type: 'object', 'http': {source: 'req'}},
  {arg: 'res', type: 'object', 'http': {source: 'res'}}
];
CloudinaryService.prototype.upload.returns = {arg: 'result', type: 'object'};
CloudinaryService.prototype.upload.http = {verb: 'post', path: '/upload'};
