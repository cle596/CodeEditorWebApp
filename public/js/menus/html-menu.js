"use strict";

var html = document.getElementsByTagName("html")[0];

html.onclick = function(e) {
  if (e.target != file) {
    file_menu.style.left = "-9999px";
  }
  if (e.target != edit) {
    edit_menu.style.left = "-9999px";
  }
  if (e.target != tools) {
    tools_menu.style.left = "-9999px";
  }
  if (e.target != auth) {
    auth_menu.style.left = "-9999px";
  }
  if (e.target != help) {
    help_menu.style.left = "-9999px";
  }
  if (e.target != login &&
    e.target != user_login &&
    e.target != user_login_form &&
    e.target != user_login_input &&
    e.target != user_login_pw &&
    e.target != user_login_submit) {
    user_login.style.top = "-9999px";
  }
}
