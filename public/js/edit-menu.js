"use strict";

var edit = document.getElementById("edit");
var edit_menu = document.getElementById("edit-menu");
var edit_menu_opt = document.getElementsByClassName("edit-menu-opt");

setElementAttributes(edit, {
  onclick: function(e) {
    menu_clicked = !menu_clicked;
    if (menu_clicked) {
      edit_menu.style.display = "";
      if (edit_menu_opt[0].style.display == "") {
        for (var x = 0; x < edit_menu_opt.length; ++x) {
          edit_menu_opt[x].style.display = "block";
        }
      }
    }
  },
  onmouseover: function(e) {
    if (menu_clicked) {
      if (edit_menu_opt[0].style.display == "") {
        for (var x = 0; x < edit_menu_opt.length; ++x) {
          edit_menu_opt[x].style.display = "block";
        }
      }
    }
  }
});

setElementAttributes(edit_menu, {
  onmouseleave: function(e) {
    if (edit_menu.style.display == "") {
      edit_menu.style.display = "none";
    }
    menu_clicked = false;
  }
});
