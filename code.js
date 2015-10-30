function checkIfElementLoaded(element){
    var c = setInterval(function(){
	if (document.querySelector(element)!=null){
	    console.log(element+" has been loaded.");
	    clearInterval(c);
	}
    },0);
}

function checkIfAllElementsLoaded(element){
    var c = setInterval(function(){
	if (document.querySelector(element)!=null){
	    console.log(element+" has been loaded.");
	    clearInterval(c);
	}
    },0);
}


checkIfElementLoaded("body");
