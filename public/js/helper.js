function checkIfElementLoaded(element) {
  var c = setInterval(function() {
    if (document.querySelector(element) != null) {
      clearInterval(c);
      console.log(element + " has been loaded.");
    }
  }, 0);
}

function getAllAttributesById(node) {
  var el = document.getElementById(node);
  for (var i = 0, atts = el.attributes, n = atts.length, arr = []; i < n; i++) {
    arr.push(atts[i].nodeName);
  }
  return arr;
}

function getMembersOfElement(element){
  for (var x in document.getElementById(element)){
    console.log(x);
  }
}
