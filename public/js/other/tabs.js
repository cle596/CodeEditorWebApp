var tab1 = document.getElementById("tab-1");
var tab2 = document.getElementById("tab-2");
var tab3 = document.getElementById("tab-3");
var tab4 = document.getElementById("tab-4");

var tab1_content = "";
var tab2_content = "";
var tab3_content = "";
var tab4_content = "";

var edit_space = document.getElementById("edit-space");
tab1.addEventListener("click",function(e){
    edit_space.value = tab1_content;
});

tab2.addEventListener("click",function(e){
    edit_space.value = tab2_content;
});

tab3.addEventListener("click",function(e){
    edit_space.value = tab3_content;
});

tab4.addEventListener("click",function(e){
    edit_space.value = tab4_content;
});

