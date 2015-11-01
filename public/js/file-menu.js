"use strict";

var menu_clicked = false; //should be menu_selected

var file = document.getElementById("file");
var file_menu = document.getElementById("file-menu");
var file_menu_opt = document.getElementsByClassName("file-menu-opt");

setElementAttributes(file, {
  onclick: function(e) {
    var x;
    menu_clicked = !menu_clicked;
    if (menu_clicked) {
      file_menu.style.display = "";
      if (file_menu_opt[0].style.display == "") {
        for (x = 0; x < file_menu_opt.length; ++x) {
          file_menu_opt[x].style.display = "block";
        }
      }
    }
  },
  onmouseover: function(e) {
    if (menu_clicked) {
      if (file_menu_opt[0].style.display == "") {
        for (var x = 0; x < file_menu_opt.length; ++x) {
          file_menu_opt[x].style.display = "block";
        }
      }
    }
  }
});

setElementAttributes(file_menu, {
  onmouseleave: function(e) {
    if (file_menu.style.display == "") {
      file_menu.style.display = "none";
    }
    menu_clicked = false;
  }
});
