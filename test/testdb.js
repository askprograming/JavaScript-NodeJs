const book = require("../models/book");

// return all records
book.find({}, (err, items) => {
  if (err) return next(err);
  console.log(items.length);
  // other code here
});