var socket = io.connect();

window.onload = function () { 
	var word = $("#hiddeninput").val();
	if(word) {
   		socket.emit('loaded word', word);
	} else {
		var text = document.getElementById("dynamictext"); 
		text.innerHTML = "Hello!";
	}
}

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
	window.location.href = "/" + retrievedentry[0];
});
socket.on('got entry', function (retrievedentry) {
	if(error(retrievedentry)) {
      	return;
	}
	$("#dynamictext, #dynamiclink").fadeOut().promise().done(function() {
		var linkhref = retrievedentry.link ? retrievedentry.link : "";
        var linktext = retrievedentry.link ? "[x]" : "";

        $("#dynamictext").html(retrievedentry.text).fadeIn(); 
        $("#dynamiclink").prop('href', linkhref); 
        $("#dynamiclink").text(linktext).fadeIn();
    }); 
});

var error = function(retrievedentry) {
	if(retrievedentry.hasOwnProperty("error")) {
		window.location.href = "/err";
      	return true;
	}
	return false;
}

