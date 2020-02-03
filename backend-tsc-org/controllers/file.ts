const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const config = require('../config/config');

// aws.config.update({
//     secretAccessKey: config.AWS_ACCESS_KEY_ID,
//     accessKeyId: config.AWS_SECRET_KEY_ID,
//     region: 'ap-northeast-2'
//   });
aws.config.update({
  secretAccessKey: config.AWS_SECRET_KEY_ID,
  accessKeyId: config.AWS_ACCESS_KEY_ID,
  region: 'ap-northeast-2'
});
const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: config.AWS_S3_BUCKET_NAME,
    key: (req, file, cb) => {
      console.log(file);
      cb(null, 'asdf' + Date.now() + file.originalname); //use Date.now() for unique file keys
    }
  })
});

//use by upload form
const fileUpload = (req, res, next) => {
  console.log(req.files);
  res.json({ url: req.files[0].location });
};

export = {
  upload,
  fileUpload
};
