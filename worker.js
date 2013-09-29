self.addEventListener('message', function(msg){
	//make XmlHttpRequest
	var xhr = new XMLHttpRequest();
	if(msg.data === "left"){
	xhr.open('GET', '/car?lol=left', true);
	//alert("left");}
	else {
	//alert("right");
	  xhr.open('GET', '/car?lol=right', true);
	}
	xhr.send();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200) {
			self.postMessage();
		}
	}
}, false);
