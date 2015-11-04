var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    console.log(xhttp.readyState,xhttp.status);
    if (xhttp.readyState == 4 && xhttp.status == 200) {
	document.getElementById("notification").innerHTML = xhttp.responseText;
	document.getElementById("notification").style.visibility = "visible";
    }
}

document.getElementById("save").onclick = function(e){
    var data = document.getElementById("edit-space").value;
    xhttp.open("POST","save",true);
    xhttp.setRequestHeader("Content-type","text/plain");
    xhttp.send(data);
}

document.getElementById("user-login-form").addEventListener("submit",function(e){
    var user = document.getElementById("user-login-input").value;
    var pw = document.getElementById("user-login-pw").value;
    var data = user+pw;
    xhttp.open("POST","login",true);
    xhttp.setRequestHeader("Content-type","text/plain");
    xhttp.send(data);
});