var bookArray = [
    { title: "Harry Potter", author: "J. K. Rowling"},
    { title: "The Giving Tree", author: "Shel Silverstein"},
    { title: "Good Night Moon", author: "Margaret Wise Brown"}
];

const list_display = function(req, res) {
    res.render('list_display', {books: bookArray, title: "Book List"});
};

const display= function(req, res) {
  res.render('display', { display: display, title: "More to read"});
}; 

module.exports = {
    list_display,
    display
};