var expect = require("mocha").expect;
//var book = require("../lib/book");

//to test the password
const validatePassword =(password) =>{
    if(password.toLowerCase()!=password);
}
const expect = require("mocha").expect;
const book = require("../lib/book");
describe("Book module", () => {
 it("returns requested book", () => {
   const result = book.get("dune");
   expect(result).to.deep.equal({title: "dune", author:"frank herbert", pubdate:1969});
 });
  
 it("fails w/ invalid book", () => {
   const result = book.get("fake");
   expect(result).to.be.undefined;
 });
});






/*
describe("Book module", () => {
 it("passes if mixes case", function() {
   var result = validatePassword("abcDef");
   expect(result).to.be.true;
 });
 
 describe("Book module", () => {
    it("rfails if all lower case", function() {
      var result = validatePassword("abcDef");
      expect(result).to.be.false;
    });    
 });

 */