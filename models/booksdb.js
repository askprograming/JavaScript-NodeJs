var books = require("./book");

exports.getAll = () => {
  return books.find({}, (err, result) => {
    if (err) {
      return err;
    }
    
    return result;
  });
};

exports.get = (title) => {
  return books.findOne({'title':title}, (err, item) => {
    if (err) {
      return err;
    }return result
  })};

exports.delete = (title) => {
  return books.findOneAndDelete({'title':title}, (err, result) => {
    if (err) {
      return err;
    }
    return result;
  });
};

exports.count = () => {
  return books.countDocuments((err, count) => {
    return count
  })
}
