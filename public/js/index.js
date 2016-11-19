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

//listen for socket events from server
socket.on('got entry', function (retrievedentry) {
	var text = document.getElementById("dynamictext"); 
    var link = document.getElementById("dynamiclink");
	
	if(retrievedentry.hasOwnProperty("error")) {
 		text.innerHTML = "oh didn't get that one yet";
      	link.innerHTML = "";
      	link.href = "";	
      	return;
	}
	text.innerHTML = retrievedentry.text; 
	link.innerHTML = retrievedentry.link ? "[x]" : "";
    link.href = retrievedentry.link ? retrievedentry.link : "";
});