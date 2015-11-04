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

var login = document.getElementById("login");
var user_login = document.getElementById("user-login");
var user_login_form = document.getElementById("user-login-form");
var user_login_input = document.getElementById("user-login-input");
var user_login_pw = document.getElementById("user-login-pw");
var user_login_submit = document.getElementById("user-login-submit");
login.addEventListener("click",function(e){
  user_login.style.top = "30px";
});
