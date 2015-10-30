document.getElementById("mytextarea").onkeydown = function(e) {
  if (e.keyCode == 9) {
    e.preventDefault();
    document.getElementById("mytextarea").value += '\t';
  }
};
