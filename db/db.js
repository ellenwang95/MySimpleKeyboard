var levelup = require('levelup');
var db = levelup('db/mykeyboard', {valueEncoding : 'json'});

/**
8: [ { word: ew
			text: "" 
			link: ""
			date: ...},
	 { word: edu ... } ]

10: [ .. ]
**/ 
function todaysDate() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; 
	var yyyy = today.getFullYear();
	return dd+'/'+mm+'/'+yyyy;
}

var get = function(keycode, callback) {
	db.get(keycode, function (err, value) {
		if (err) {
			console.log("Keycode mapping not found: " + keycode);
			callback({error: true});
		} else {
			console.log("Found keycode: ", keycode);
			callback(value); //use retrieved value
		}
	});
}

var add = function(keycode, word, text, link, more) {
	word = word.toLowerCase();
	var entry = {
		word: word,
		text: text,
		link: link,
		more: more,
		date: todaysDate()
	};
		
	get(keycode, function (value) {
		var words = [ entry ];
		if(!value.hasOwnProperty("error")) {
			words = value; 
			words.push(entry);
		}
		db.put(keycode, words, function (err) {
			if (err) return console.log('some I/O error in db!!!', err);
			console.log("Added word: " + word + " to list: ", keycode);
		});
	});
}

var update = function(keycode, word, newtext, newlink, newmore) {
	word = word.toLowerCase();

	get(keycode, function (value) {
		var words = value; 
		var updated = false;
		for (i in words) {
			var entry = words[i];
			if(entry.word == word) {
				entry.text = newtext;
				entry.link = newlink;
				entry.more = newmore;
				entry.date = todaysDate();
				updated = true;
				break;
			}
		}
		if (!updated) {
			console.log("Could not find word to update: ", word);
			return;
		}
		db.put(keycode, words, function (err) {
			if (err) return console.log('some I/O error in db!!!', err);
			console.log("Updated word: " + word + " in list: ", keycode);
		});
	});
}

var del = function(keycode, word) {
	word = word.toLowerCase();

	get(keycode, function (value) {
		var words = value; 
		for (i in words) {
			var entry = words[i];
			if(entry.word == word) {
				words.splice(i, 1);
				break;
			}
		}
		db.put(keycode, words, function (err) {
			if (err) return console.log('some I/O error in db!!!', err);
			console.log("Deleted word: " + word + " in list: ", keycode);
		});
	});
}

var del = function(keycode) {
	db.del(keycode, function (err) {
		if (err) return console.log('some I/O error AH!', err);
		console.log("Deleted: ", keycode);
	});
}

var printReadStream = function() {
	db.createReadStream({  
	  limit     : 100           // maximum number of entries to read
	  , keys      : true          // see db.createKeyStream()
	  , values    : true          // see db.createValueStream()
	}).on('data', function (data) {
	      console.log("key:", data.key);
	      console.log("value:", data.value);
	});
}

module.exports = {
  get: get,
  add: add,
  update: update,
  del: del,
  printReadStream: printReadStream
};

