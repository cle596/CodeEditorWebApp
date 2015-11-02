var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
   document.getElementById("notification").innerHTML = xhttp.responseText;
   document.getElementById("notification").style.visibility = "visible";
  }
}

document.getElementById("save").onclick = function(e){
  var data = document.getElementById("edit-space").value;
  xhttp.open("POST","push",true);
  xhttp.setRequestHeader("Content-type","text/plain");
  xhttp.send(data);
}
