"use strict";

var tools = document.getElementById("tools");
var tools_menu = document.getElementById("tools-menu");
var tools_menu_opt = document.getElementsByClassName("tools-menu-opt");

setElementAttributes(tools, {
  onclick: function(e) {
    menu_clicked = !menu_clicked;
    if (menu_clicked) {
      tools_menu.style.display = "";
      if (tools_menu_opt[0].style.display == "") {
        for (var x = 0; x < tools_menu_opt.length; ++x) {
          tools_menu_opt[x].style.display = "block";
        }
      }
    }
  },
  onmouseover: function(e) {
    if (menu_clicked) {
      if (tools_menu_opt[0].style.display == "") {
        for (var x = 0; x < tools_menu_opt.length; ++x) {
          tools_menu_opt[x].style.display = "block";
        }
      }
    }
  }
});

setElementAttributes(tools_menu, {
  onmouseleave: function(e) {
    if (tools_menu.style.display == "") {
      tools_menu.style.display = "none";
    }
    menu_clicked = false;
  }
});
