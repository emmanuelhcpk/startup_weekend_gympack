var mongoose = require('mongoose'),
  Article = mongoose.model('Article');

exports.home = function (req,res,next) {
  res.send('hola');
};

//router.get('/home', function (req,res,next) {
//  res.send('hola');
//});
/*exports.home = function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
};*/
