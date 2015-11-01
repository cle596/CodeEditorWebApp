"use strict";

var menu_clicked = false;

var file = document.getElementById("file");
var edit = document.getElementById("edit");
var help = document.getElementById("help");
var file_menu_opt = document.getElementsByClassName("file-menu-opt");
var edit_menu_opt = document.getElementsByClassName("edit-menu-opt");
var help_menu_opt = document.getElementsByClassName("help-menu-opt");


setElementAttributes(file, {
  onclick: function(e) {
    var x;
    menu_clicked = !menu_clicked;
    if (menu_clicked) {
      if (file_menu_opt[0].style.display === "") {
        for (x = 0; x < file_menu_opt.length; ++x) {
          file_menu_opt[x].style.display = "block";
        }
      }
    }
  },
  onmouseleave: function(e) {
    if (file_menu_opt[0].style.display == "block") {
      for (var x = 0; x < file_menu_opt.length; ++x) {
        file_menu_opt[x].style.display = "";
      }
    }
  },
  onmouseover: function(e) {
    if (menu_clicked) {
      if (file_menu_opt[0].style.display == "") {
        for (var x = 0; x < file_menu_opt.length; ++x) {
          file_menu_opt[x].style.display = "block";
        }
      }
    }
  }
});

setElementAttributes(edit, {
  onclick: function(e) {
    menu_clicked = !menu_clicked;
    if (menu_clicked) {
      if (edit_menu_opt[0].style.display == "") {
        for (var x = 0; x < edit_menu_opt.length; ++x) {
          edit_menu_opt[x].style.display = "block";
        }
      }
    }
  },
  onmouseleave: function(e) {
    if (edit_menu_opt[0].style.display == "block") {
      for (var x = 0; x < edit_menu_opt.length; ++x) {
        edit_menu_opt[x].style.display = "";
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
  onmouseleave: function(e) {
    if (help_menu_opt[0].style.display == "block") {
      for (var x = 0; x < help_menu_opt.length; ++x) {
        help_menu_opt[x].style.display = "";
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
