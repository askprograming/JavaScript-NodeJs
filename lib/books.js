var books = [{ISBN:8260307, title:"The Hobbit",author:"J. R. R. Tolkien",gender:"male",publisher:"Houghton Mifflin"},
{ISBN: 8606664,title:"Lynley Dodd ",author:"female",gender:"",publisher:"Mallinson Rendel"},
{ISBN: 8606206 ,title:"How to Lie with Statistics ",author:"Darrell Huff",gender:"male",publisher:"Mallinson Rendel"},
{ISBN: 3310728,title:"Mechanical Harry ",author:" Bob Kerr",gender:"male",publisher:"Mallinson Rendel"},
{ISBN: 8783116,title:"My Cat Likes to Hide",author:"Lynley Dodd ",gender:"female",publisher:"Mallinson Rendel"},
{ISBN: 8606273,title:"My Cat Likes to Hide",author:"Eve Sutton ",gender:"female",publisher:"Mallinson Rendel"}
];

//return all books lists
 exports.getAll =() =>{
    return books;
};


//
exports.get = (title)=>{
    return books.find((item)=>{
    return item.title === title;
    });
};

exports.delete =(title)=>{
  //
    const oldLength = books.length;
    title = books.filter((item)=>{
    return item.title !== title;
    });
    // if old & new array lengths differ, delete item
return {deleted: oldLength !== books.length, total: books.length };
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

console.log(title);


//console.log(this.delete('Lynley Dodd'));
//console.log();