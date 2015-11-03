"use strict";

var edit = document.getElementById("edit");
var edit_menu = document.getElementById("edit-menu");
var edit_menu_opt = document.getElementsByClassName("edit-menu-opt");

setElementAttributes(edit, {
  onclick: function(e) {
    edit_menu.style.display = "block";
  }
});
