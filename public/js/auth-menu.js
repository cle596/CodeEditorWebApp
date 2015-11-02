"use strict";

var auth = document.getElementById("auth");
var auth_menu = document.getElementById("auth-menu");
var auth_menu_opt = document.getElementsByClassName("auth-menu-opt");

setElementAttributes(auth, {
  onclick: function(e) {
    menu_clicked = !menu_clicked;
    if (menu_clicked) {
      auth_menu.style.display = "";
      if (auth_menu_opt[0].style.display == "") {
        for (var x = 0; x < auth_menu_opt.length; ++x) {
          auth_menu_opt[x].style.display = "block";
        }
      }
    }
  },
  onmouseover: function(e) {
    if (menu_clicked) {
      if (auth_menu_opt[0].style.display == "") {
        for (var x = 0; x < auth_menu_opt.length; ++x) {
          auth_menu_opt[x].style.display = "block";
        }
      }
    }
  }
});

setElementAttributes(auth_menu, {
  onmouseleave: function(e) {
    if (auth_menu.style.display == "") {
      auth_menu.style.display = "none";
    }
    menu_clicked = false;
  }
});
