// need to install multer,cloudinary ,multer-storage-cloudinary
const multer=require("multer")
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage }=require("multer-storage-cloudinary")


cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key:process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRETE
  });
  const storage = new CloudinaryStorage({
      cloudinary: cloudinary,
      params: {
        folder: 'photography',
      //   format: async (req, file) => 'png', // supports promises as well
      //   public_id: (req, file) => 'computed-filename-using-request',
      },
    });
    const parser = multer({ 
      storage: storage ,
      fileFilter: function (req, file, cb) {
          // Accept images only
          let extArray = file.originalname.split(".");
          let extension = extArray[extArray.length - 1];
          let allowedExt = ["png", "jpg", "jpeg"];
          if (!allowedExt.includes(extension)) {
              return cb(new Error('Only image files are allowed!'), false);
          }
          cb(null, true);
        }
  });
  module.exports=parser