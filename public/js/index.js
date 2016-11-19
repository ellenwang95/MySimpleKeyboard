var socket = io.connect();

window.addEventListener("keydown", update, false);

function update(e) {
	if (!e.metaKey ) {
      e.preventDefault();
    }
    socket.emit('keydown', e.keyCode); 
}

//listen for socket events from server
socket.on('update', function (retrievedentry) {
	if(error(retrievedentry)) {
		return;
	}
	entry = retrievedentry[0].value;
	var linkhref = entry.link ? entry.link : "";
    var linktext = entry.link ? "[x]" : "";

    updatePage(entry.word, entry.text, linkhref, linktext);
});

var error = function(retrievedentry) {
	if(retrievedentry.hasOwnProperty("error")) {
		updatePage("", "oh didn't get that one yet", "", "");
      	return true;
	}
	return false;
}

var updatePage = function(word, text, linkhref, linktext) {
	if(word) {
		word = "<b>[ " + word + " ]<b/> <br/>";
	}
	$("#word").html(word);
	$("#text").html(text);
	$("#link").prop('href', linkhref); 
    $("#link").text(linktext);
}

