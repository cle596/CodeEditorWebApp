"use strict";

var tools = document.getElementById("tools");
var tools_menu = document.getElementById("tools-menu");
var tools_menu_opt = document.getElementsByClassName("tools-menu-opt");

setElementAttributes(tools, {
  onclick: function(e) {
    tools_menu.style.left = "auto";
  }
});
