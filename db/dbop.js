var db = require('./db');

/**
ADD CONTENT 

var keycode = 0;
var word = "";
var text = "";
var link = null; 
var more = "";

db.add(keycode, word, text, link); 
**/

var keycode = 69;
var word = "ew";
var text = "My full name is Ellen Wang.";
var link = "";
var more = "E.W., e.w., ew.. you get it.";

db.update(keycode, word, text, link, more); 

// db.get(75, function (value) { console.log(value); });
