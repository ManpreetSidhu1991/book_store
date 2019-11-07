const index = function(req, res) {
    res.render('index', {title: 'Popular books'});
};
module.exports = {
    index
};