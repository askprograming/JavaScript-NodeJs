var books = [{ISBN:8260307, title:"The Hobbit",author:"J. R. R. Tolkien",gender:"male",publisher:"Houghton Mifflin"},
{ISBN: 8606664,title:"Lynley Dodd ",author:"female",gender:"",publisher:"Mallinson Rendel"},
{ISBN: 8606206 ,title:"How to Lie with Statistics ",author:"Darrell Huff",gender:"male",publisher:"Mallinson Rendel"},
{ISBN: 3310728,title:"Mechanical Harry ",author:" Bob Kerr",gender:"male",publisher:"Mallinson Rendel"},
{ISBN: 8783116,title:"My Cat Likes to Hide",author:"Lynley Dodd ",gender:"female",publisher:"Mallinson Rendel"},
{ISBN: 8606273,title:"My Cat Likes to Hide",author:"Eve Sutton ",gender:"female",publisher:"Mallinson Rendel"}
];

 exports.getAll =() =>{
    return books;
}; 

exports.get = (title)=>{
    return books.find((item)=>{
        return item.title;
    });
};

exports.delete =(title)=>{
    const oldLength = title.length;
    title.title.filter((item)=>{
        return item.title !== title;
    });

return {deleted : oldLength !== title.length, total:title.length};
}

exports.add =(books)=>{
    const oldLength = books.length;
    let found = this.get(books.city);
    if(!found){
        books.push(books);
    }
    return{added:oldLength !== books.length, total:books.length};
}
//console.log(this.getAll());
console.log();