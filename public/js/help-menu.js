"use strict";

var help = document.getElementById("help");
var help_menu = document.getElementById("edit-menu");
var help_menu_opt = document.getElementsByClassName("help-menu-opt");

setElementAttributes(help, {
  onclick: function(e) {
    menu_clicked = !menu_clicked;
    if (menu_clicked) {
      if (help_menu_opt[0].style.display == "") {
        for (var x = 0; x < help_menu_opt.length; ++x) {
          help_menu_opt[x].style.display = "block";
        }
      }
    }
  },
  onmouseover: function(e) {
    if (menu_clicked) {
      if (help_menu_opt[0].style.display == "") {
        for (var x = 0; x < help_menu_opt.length; ++x) {
          help_menu_opt[x].style.display = "block";
        }
      }
    }
  }
});


setElementAttributes(help_menu, {
  onmouseleave: function(e) {
    if (help_menu.style.display == "block") {
      for (var x = 0; x < help_menu.length; ++x) {
        help_menu.style.display = "";
      }
    }
  }
});
