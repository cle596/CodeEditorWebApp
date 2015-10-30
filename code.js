function checkIfLoaded(element){
    var c = setInterval(function(){
	if (document.querySelector(element)!=null){
	    console.log("lol");
	    clearInterval(c);
	}
    },0);
}

checkIfLoaded("body");
