"use strict";

var auth = document.getElementById("auth");
var auth_menu = document.getElementById("auth-menu");
var auth_menu_opt = document.getElementsByClassName("auth-menu-opt");

setElementAttributes(auth, {
  onclick: function(e) {
    auth_menu.style.display = "block";
  },
  onmouseover: function(e) {
    if (auth_menu_opt[0].style.display == "") {
      for (var x = 0; x < auth_menu_opt.length; ++x) {
        auth_menu_opt[x].style.display = "block";
      }
    }
  }
});
