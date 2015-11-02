"use strict";

var menu_clicked = false; //should be menu_selected

var file = document.getElementById("file");
var file_menu = document.getElementById("file-menu");
var file_menu_opt = document.getElementsByClassName("file-menu-opt");

setElementAttributes(file, {
  onclick: function(e) {
    file_menu.style.display = "block";

  },
  onmouseover: function(e) {
    if (file_menu_opt[0].style.display == "") {
      for (var x = 0; x < file_menu_opt.length; ++x) {
        file_menu_opt[x].style.display = "block";
      }
    }
  }
});
