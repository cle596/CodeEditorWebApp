"use strict";

var help = document.getElementById("help");
var help_menu = document.getElementById("help-menu");
var help_menu_opt = document.getElementsByClassName("help-menu-opt");

setElementAttributes(help, {
  onclick: function(e) {
    help_menu.style.display = "block";
  }
});
