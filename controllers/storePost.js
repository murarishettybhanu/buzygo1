const Post = require('../database/models/Post')

module.exports = (req, res) => {
  Post.create(req.body, (error, post) => {
    if (error) {
      req.flash('fail','Please try again')
      res.redirect('/');
    }
    req.flash('success','Thanks for your response !')
    res.redirect('/');
  });
}