var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
   document.getElementById("demo").innerHTML = xhttp.responseText;
  }
}

document.getElementById("push").onclick = function(e){
  xhttp.open("POST","push",true);
  xhttp.setRequestHeader("Content-type","text/plain");
  xhttp.send(document.getElementById("edit-space").value);
}
