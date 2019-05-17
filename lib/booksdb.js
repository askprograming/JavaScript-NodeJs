var books = require("../models/book.js");

exports.getAll = () => {
  return books.find({}, (err, result) => {
    if (err) {
      return err;
    }
    
    return result;
  });
};

//console.log(result.length);
// this.getAll().then((items) => {
//   console.log(items)
// });

exports.delete = (title) => {
  return books.remove({}, (err, result) => {
    if (err) {
      return err;
    }
    
    return result;
  });
};

this.delete().then((title)=> {
console.log("Mechanical Harry")
});