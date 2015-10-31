var menu_clicked = false;

document.getElementById("file").onclick = function(e) {
  menu_clicked = true;
  if (document.getElementsByClassName("file-menu-opt")[0].style.display == "") {
    for (var x = 0; x < document.getElementsByClassName("file-menu-opt").length; ++x) {
      document.getElementsByClassName("file-menu-opt")[x].style.display = "block";
    }
  }
};

document.getElementById("edit").onclick = function(e) {
  menu_clicked = true;
  if (document.getElementsByClassName("edit-menu-opt")[0].style.display == "") {
    for (var x = 0; x < document.getElementsByClassName("edit-menu-opt").length; ++x) {
      document.getElementsByClassName("edit-menu-opt")[x].style.display = "block";
    }
  }
};

document.getElementById("help").onclick = function(e) {
  menu_clicked = true;
  if (document.getElementsByClassName("help-menu-opt")[0].style.display == "") {
    for (var x = 0; x < document.getElementsByClassName("help-menu-opt").length; ++x) {
      document.getElementsByClassName("help-menu-opt")[x].style.display = "block";
    }
  }
};


document.getElementById("file").onmouseleave = function(e) {
  if (document.getElementsByClassName("file-menu-opt")[0].style.display == "block") {
    for (var x = 0; x < document.getElementsByClassName("file-menu-opt").length; ++x) {
      document.getElementsByClassName("file-menu-opt")[x].style.display = "";
    }
  }
};

document.getElementById("edit").onmouseleave = function(e) {
  if (document.getElementsByClassName("edit-menu-opt")[0].style.display == "block") {
    for (var x = 0; x < document.getElementsByClassName("edit-menu-opt").length; ++x) {
      document.getElementsByClassName("edit-menu-opt")[x].style.display = "";
    }
  }
};

document.getElementById("help").onmouseleave = function(e) {
  if (document.getElementsByClassName("help-menu-opt")[0].style.display == "block") {
    for (var x = 0; x < document.getElementsByClassName("help-menu-opt").length; ++x) {
      document.getElementsByClassName("help-menu-opt")[x].style.display = "";
    }
  }
};


document.getElementById("file").onmouseover = function(e) {
  if (menu_clicked) {
    if (document.getElementsByClassName("file-menu-opt")[0].style.display == "") {
      for (var x = 0; x < document.getElementsByClassName("file-menu-opt").length; ++x) {
        document.getElementsByClassName("file-menu-opt")[x].style.display = "block";
      }
    }
  }
};

document.getElementById("edit").onmouseover = function(e) {
  if (menu_clicked) {
    if (document.getElementsByClassName("edit-menu-opt")[0].style.display == "") {
      for (var x = 0; x < document.getElementsByClassName("edit-menu-opt").length; ++x) {
        document.getElementsByClassName("edit-menu-opt")[x].style.display = "block";
      }
    }
  }
};

document.getElementById("help").onmouseover = function(e) {
  if (menu_clicked) {
    if (document.getElementsByClassName("help-menu-opt")[0].style.display == "") {
      for (var x = 0; x < document.getElementsByClassName("help-menu-opt").length; ++x) {
        document.getElementsByClassName("help-menu-opt")[x].style.display = "block";
      }
    }
  }
}
