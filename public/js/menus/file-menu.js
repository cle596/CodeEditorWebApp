"use strict";

var menu_clicked = false; //should be menu_selected

var file = document.getElementById("file");
var file_menu = document.getElementById("file-menu");
var file_menu_opt = document.getElementsByClassName("file-menu-opt");

setElementAttributes(file, {
  onclick: function(e) {
    file_menu.style.display = "block";

  }
});
