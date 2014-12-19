var Busboy = require('busboy');

exports.upload = function(cloudinary, req, res, next) {

  var busboy = new Busboy({ headers: req.headers }),
      options = {},
      uploadStream;

  busboy.on('file', function(fieldname, file) {

    uploadStream = cloudinary.uploader
      .upload_stream(function(result) {
        next(null, result);
      }, options);

    file.pipe(uploadStream);

  });
  busboy.on('field', function(fieldname, val) {
    if(fieldname === 'folder') {
      options['folder'] = val;
    }
    else if(fieldname === 'tags') {
      options['tags'] = val;
    }
  });

  req.pipe(busboy);
};

