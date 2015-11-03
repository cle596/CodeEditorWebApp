"use strict";

var auth = document.getElementById("auth");
var auth_menu = document.getElementById("auth-menu");
var auth_menu_opt = document.getElementsByClassName("auth-menu-opt");

/*
setElementAttributes(auth, {
  onclick: function(e) {
    auth_menu.style.left = "10px";
  }
});
*/

auth.addEventListener("click",function(e){
  auth_menu.style.left = "10px";
});
