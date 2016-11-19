var db = require('./db');

/**
var word = "";
var text = "";
var link = null; 
**/

var word = "ew";
var text = "My full name is Ellen Wang (E.W., e.w., ew.. you get it).";
var link = null; 

db.add(word, text, link); 
db.printReadStream();