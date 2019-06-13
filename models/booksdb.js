let books = require("./book");

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
    }return item
  })};

  
  exports.add = (newbook) =>{
    let houseofsale = title.name;

    books.updateOne({'title': TheHobbit}, newbook, {upsert: true},(err, result) =>{
      if(err) {
        return err;
      } return result;
    })};
    
    
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
