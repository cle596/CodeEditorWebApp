document.getElementById("file").onclick = function(e) {
  if (document.getElementsByClassName("file-menu-opt")[0].style.display == "") {
    for (var x = 0; x < document.getElementsByClassName("file-menu-opt").length; ++x) {
      document.getElementsByClassName("file-menu-opt")[x].style.display = "block";
    }
  } else if (document.getElementsByClassName("file-menu-opt")[0].style.display == "block") {
    for (var x = 0; x < document.getElementsByClassName("file-menu-opt").length; ++x) {
      document.getElementsByClassName("file-menu-opt")[x].style.display = "";
    }
  }
};

document.getElementById("edit").onclick = function(e) {
  if (document.getElementsByClassName("edit-menu-opt")[0].style.display == "") {
    for (var x = 0; x < document.getElementsByClassName("edit-menu-opt").length; ++x) {
      document.getElementsByClassName("edit-menu-opt")[x].style.display = "block";
    }
  } else if (document.getElementsByClassName("edit-menu-opt")[0].style.display == "block") {
    for (var x = 0; x < document.getElementsByClassName("edit-menu-opt").length; ++x) {
      document.getElementsByClassName("edit-menu-opt")[x].style.display = "";
    }
  }
};
