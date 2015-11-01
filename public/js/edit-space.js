"use strict";

document.getElementById("edit-space").onkeydown = function(e) {
  if (e.keyCode == 9) {
    e.preventDefault();
    var mark = this.selectionStart;
    this.value =
      this.value.slice(0, this.selectionStart) +
      '\t' +
      this.value.slice(this.selectionStart);
    this.selectionStart = mark + 1;
    this.selectionEnd = mark + 1;
  }
};
