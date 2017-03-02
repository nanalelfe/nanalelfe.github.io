var express = require('express');
var router = express.Router();
var nodemailer =  require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/contact', function(req, res, next) {
    res.redirect('/');
});

router.post('/contact', function(req, res, next) {
  req.sanitize('name').escape();
  req.sanitize('name').trim();
  req.assert('name', 'Validation errors occurred. Please confirm that all the fields are filled out and ' +
      'submit again.').notEmpty();

  req.sanitize('email').escape();
  req.sanitize('email').trim();
  req.assert('email', 'Validation errors occurred. Please confirm that all the fields are' +
      ' filled out and submit again.').notEmpty().withMessage("Email Required.").isEmail();

  req.sanitize('message').escape();
  req.sanitize('message').trim();
  req.assert('message', 'Validation errors occurred. Please confirm that all the fields are filled out and ' +
      'submit again.').notEmpty();

  var errors = req.validationErrors();
  if (errors){
      res.render('index', {errors: errors[0].msg});
  } else {
    //res.render('index', {success: "Message sent."});
      var transporter = nodemailer.createTransport({
          service: "Gmail",
          auth: {
              user: 'solutionsrepo0@gmail.com',
              pass: 'lamptable'
          }
      });p
      var company = '';
      if (req.body.company) {
          company = ' from ' + req.body.company;
      }

        var mailOptions = {
            from: req.body.name + ' <' + req.body.email + '>',
            to: 'nanalelfe@gmail.com',
            subject: req.body.name + company + ' has contacted you through nana-nosirova.herokuapp.com - ' + req.body.email,
            text: req.body.message,
            html: "<p>" +  req.body.message + "</p>"
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.render('index', {errors: "An error has occurred. Please try again."});
            } else {
                res.render('index', { success: "Message sent."});
            }
        });
  }
});

module.exports = router;

