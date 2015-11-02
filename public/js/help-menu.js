"use strict";

var help = document.getElementById("help");
var help_menu = document.getElementById("help-menu");
var help_menu_opt = document.getElementsByClassName("help-menu-opt");

setElementAttributes(help, {
  onclick: function(e) {
    help_menu.style.display = "block";
  },
  onmouseover: function(e) {
    if (help_menu_opt[0].style.display == "") {
      for (var x = 0; x < help_menu_opt.length; ++x) {
        help_menu_opt[x].style.display = "block";
      }
    }
  }
});
