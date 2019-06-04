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

  //add
  exports.add = (newbook) =>{
    let houseofsale = title.name;

    books.updateOne({'title': houseofsale}, newbook, {upsert: true},(err, result) =>{
      if(err) {
        return err;
      } return result;
    })};
    
    //delete
    exports.delete = (title) => {
  return books.findOneAndDelete({'title':title}, (err, deleted) => {
    if (err) {
      return err;
    }
    return deleted;
  })
};

exports.count = () => {
  return books.countDocuments((err, count) => {
    return count
  })
}
