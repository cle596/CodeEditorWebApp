"use strict";

var html = document.getElementsByTagName("html")[0];

html.onclick = function(e) {
  if (e.target != file) {
    file_menu.style.display = "none";
  }
  if (e.target != edit) {
    edit_menu.style.display = "none";
  }
}
