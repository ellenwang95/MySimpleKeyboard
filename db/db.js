var levelup = require('levelup');
var contentdb = levelup('db/keyboardcontent', {valueEncoding : 'json'});
var mapdb = levelup('db/keyboardmap', {valueEncoding : 'json'});

function todaysDate() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; 
	var yyyy = today.getFullYear();
	return dd+'/'+mm+'/'+yyyy;
}

var add = function(word, text, link) {
	//to contentdb
	word = word.toLowerCase();
	var value = {
		word: word,
		text: text,
		link: link,
		date: todaysDate()
	};
	contentdb.put(word, value, function (err) {
		if (err) return console.log('some I/O error in contentdb AH!', err);
		console.log("Added to contentdb word: " + word + "with value: ", value);
	});

	//to mapdb 
	var letter = word.charAt(0);
	existingRelateds = getRelated(letter, function (value) {
		var relateds = [ word ];  
		if(value.hasOwnProperty("relateds")) {
			relateds = value.relateds; 
			relateds.push(word);  
		}
		mapdb.put(letter, relateds, function (err) {
			if (err) return console.log('some I/O error in mapdb AHHH!', err);
			console.log("Added in mapdb word: " + word + " to list: ", letter);
		});
	});
}

var getContent = function(word, callback) {
	word = word.toLowerCase();
	contentdb.get(word, function (err, value) {
		if (err) {
			console.log("Word not found: " + word);
			callback({ error: true });
		} else {
			console.log("Found word: ", word);
			// console.log("Value: ", value);
			callback(value); //use retrieved value
		}	
	});
}

var getRelated = function(letter, callback) {
	letter = letter.toLowerCase();
	mapdb.get(letter, function (err, value) {
		if (err) {
			console.log("Letter mapping not found: " + letter);
			callback({error: true});
		} else {
			console.log("Found letter: ", letter);
			callback(value); //use retrieved value
		}
	});
}

var printReadStream = function() {
	contentdb.createReadStream({  
	  limit     : 100           // maximum number of entries to read
	  , keys      : true          // see db.createKeyStream()
	  , values    : true          // see db.createValueStream()
	}).on('data', function (data) {
	      // console.log("key:", data.key);
	      // console.log("value:", data.value);
	    });
}

module.exports = {
  add: add,
  getContent: getContent,
  getRelated: getRelated,
  printReadStream: printReadStream
};

