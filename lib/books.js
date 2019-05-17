
var books = [{ISBN:8260307, title:"The Hobbit",author:"J. R. R. Tolkien",gender:"male",publisher:"Houghton Mifflin"},
{ISBN: 8606664,title:"Lynley Dodd ",author:"Darrell Huff",gender:"female",publisher:"Mallinson Rendel"},
{ISBN: 8606206 ,title:"How to Lie with Statistics",author:"Darrell Huff",gender:"male",publisher:"Mallinson Rendel"},
{ISBN: 3310728,title:"Mechanical Harry ",author:" Bob Kerr",gender:"male",publisher:"Mallinson Rendel"},
{ISBN: 8783116,title:"My Cat Likes to Hide",author:"Lynley Dodd ",gender:"female",publisher:"Mallinson Rendel"},


];

//return all books lists
 exports.getAll =() =>{
    return books;
};

//check with a console.log(books); to view the array
exports.get = (title)=>{
    return books.find((item)=>{
    return item.title === title;
    });
};
exports.delete = (title) => {
    let oldArray = books.length;
    let newArray = books.filter((item)=>{
        return item.title!==title;
    });
    books=newArray;
    return{delete:title,total:books.length};
    
};

exports.add =(new_books)=>{
    const oldLength = books.length;
    // .get() method /to check if book already in our list/
    let found = this.get(books.title);
    if(!found){
        books.push(new_books);
    }
   return {added: oldLength !== books.length, total: books.length };
}

//console.log(add);
console.log(this.delete("Mechanical Harry"));
//console.log();
