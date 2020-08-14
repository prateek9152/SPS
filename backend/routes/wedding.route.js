let express = require('express'),
  multer = require('multer'),
  mongoose = require('mongoose'),
  router = express.Router();

// Multer File upload settings
const DIR = './wedding/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, fileName)
  }
});

// Multer Mime Type Validation
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});


// User model
let Wedding = require('../models/Wedding');


// POST User
router.post('/create-wedding', upload.single('photo1'), (req, res, next) => {
  const url = req.protocol + '://' + req.get('host')
  const user = new Wedding({
    id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    photo1: url + '/wedding/' + req.file.filename,
    photo2: url + '/wedding/' + req.file.filename,
    photo3: url + '/wedding/' + req.file.filename
  });
  user.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: "User registered successfully!",
      userCreated: {
        id: result.id,
        name: result.name,
        photo1: result.photo1,
        photo2:result.photo2,
        photo3:result.photo3
      }
    })
  }).catch(err => {
    console.log(err),
      res.status(500).json({
        error: err
      });
  })
})

// GET All Users
router.get("/", (req, res, next) => {
  User.find().then(data => {
    res.status(200).json({
      message: "Users retrieved successfully!",
      users: data
    });
  });
});


module.exports = router;
