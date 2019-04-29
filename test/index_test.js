var expect = require("chai").expect;
//var book = require("../lib/book");

//to test the password
const validatePassword =(password) =>{
    if(password.toLowerCase()!=password);
}


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

