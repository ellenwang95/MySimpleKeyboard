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

var add = function(keycode, word, text, link) {
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
		console.log("Added to contentdb word: " + word + " with value: ", value);
	});

	//to mapdb 
	existingRelateds = getRelated(keycode, function (value) {
		var relateds = [ word ];  
		if(value.hasOwnProperty("relateds")) {
			relateds = value.relateds; 
			relateds.push(word);  
		}
		mapdb.put(keycode, relateds, function (err) {
			if (err) return console.log('some I/O error in mapdb AHHH!', err);
			console.log("Added in mapdb word: " + word + " to list: ", keycode);
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

var getRelated = function(keycode, callback) {
	mapdb.get(keycode, function (err, value) {
		if (err) {
			console.log("Letter mapping not found: " + keycode);
			callback({error: true});
		} else {
			console.log("Found keycode: ", keycode);
			callback(value); //use retrieved value
		}
	});
}

var printContentReadStream = function() {
	contentdb.createReadStream({  
	  limit     : 100           // maximum number of entries to read
	  , keys      : true          // see db.createKeyStream()
	  , values    : true          // see db.createValueStream()
	}).on('data', function (contentdata) {
	      console.log("key:", contentdata.key);
	      console.log("value:", contentdata.value);
	});
}

var printMapReadStream = function() {
	mapdb.createReadStream({
		 limit     : 100           // maximum number of entries to read
	  , keys      : true          // see db.createKeyStream()
	  , values    : true          // see db.createValueStream()
	}).on('data', function (mapdata) {
	      console.log("key:", mapdata.key);
	      console.log("value:", mapdata.value);
	});
}

module.exports = {
  add: add,
  getContent: getContent,
  getRelated: getRelated,
  printContentReadStream: printContentReadStream,
  printMapReadStream: printMapReadStream
};

