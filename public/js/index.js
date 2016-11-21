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
	if(isError(retrievedentry)) {
		return;
	}
	if(isMore(retrievedentry)) {
		showmore();
		return;
	}
	entry = retrievedentry[0];
	var linkhref = entry.link ? entry.link : "";
    var linktext = entry.link ? "[x]" : "";
    var more = entry.more ? entry.more : "";

    updatePage(entry.word, entry.text, linkhref, linktext, more);
});

var isError = function(retrievedentry) {
	if(retrievedentry.hasOwnProperty("error")) {
		updatePage("", "oh didn't get that one yet", "", "", "");
      	return true;
	}
	return false;
}

var isMore = function(retrievedentry) {
	if(retrievedentry.hasOwnProperty("more")) {
		return true;
	}
	return false;
}

var showmore = function() {
	var more = $("#hiddeninput").val();
	if(more) {
		$("#word").html("");
		$("#link").prop('href', ""); 
    	$("#link").text("");

		$("#text").html(more);
	}
}

var updatePage = function(word, text, linkhref, linktext, more) {
	if(word) {
		word = "<b>[ " + word + " ]<b/> <br/>";
	}
	$("#word").html(word);
	$("#text").html(text + "&nbsp");
	$("#link").prop('href', linkhref); 
    $("#link").text(linktext);
    $("#hiddeninput").val(more);
}

