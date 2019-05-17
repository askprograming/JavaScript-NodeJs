
'use strict'
const expect = require("chai").expect;
const book = require("../lib/books");


describe("Book", () => {
  
 it("returns requested book", () => {
   let result = book.get("My Cat Likes to Hide");
   expect(result).to.deep.equal({ISBN: 8783116,title:"My Cat Likes to Hide",author:"Lynley Dodd ",gender:"female",publisher:"Mallinson Rendel"});
 });
  
 it("fails return invalid book", () => {
   let result = book.get("fake");
   expect(result).to.be.undefined;
 });

 it("add new book", () => {
   let result = book.add({ISBN: 8783117,title:"Likes to Hide",author:"Lynley Dodd ",gender:"female",publisher:"Mallinson Rendel"});
   expect(result.added).to.be.true;
  });

 it("fails to add existing book", () => {
  let result = book.add({ISBN: 8783116,title:"My Cat Likes to Hide",author:"Lynley Dodd ",gender:"female",publisher:"Mallinson Rendel"});
  expect(result.added).to.be.false;
});
 it("delet existing book",() =>{
  let result = book.delete('The Hobbit');
  expect(result.deleted).to.be.true;
 });
 it("fails deleting invalid book", () =>{
   let result = book.delete("nodejs");
   expect(result.deleted).to.be.false;
 })
 
});

// to run the test => npm test

//to test the password
//var describe = mocha.describe
// const validatePassword =(password) =>{
//     if(password.toLowerCase()!=password);
// }
