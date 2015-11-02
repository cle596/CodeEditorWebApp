"use strict";

var html = document.getElementsByTagName("html")[0];

html.onclick = function(e) {
  if (e.target != file) {
    file_menu.style.display = "none";
  }
  if (e.target != edit) {
    edit_menu.style.display = "none";
  }
  if (e.target != tools) {
    tools_menu.style.display = "none";
  }
  if (e.target != auth) {
    auth_menu.style.display = "none";
  }
  if (e.target != help) {
    help_menu.style.display = "none";
  }
}
