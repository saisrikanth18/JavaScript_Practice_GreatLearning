var book = {
    name: 'Biology',
    authors: ['Srikanth'],
    "publication year": 2021,
    publisher: 'VGS'
};

console.log( book );

book["change name"] = function(newName){
    this.name = newName;
};
book["change name"]('Sociology');
console.log( book );

book.addAuthors = function( newAuthors ){
    this.authors[this.authors.length] = newAuthors;
}
book.addAuthors('Arjith');
//or
book.addAuthors = function( newAuthors ){
    this.authors.push(newAuthors);
}
book.addAuthors('Yubha');

console.log( book );