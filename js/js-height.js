window.onload = function() {

var mainDivs = document.getElementsByClassName("column1");
var maxHeight = 0;
for (var i = 0; i < mainDivs.length; ++i) {
if (maxHeight < mainDivs[i].clientHeight) {
maxHeight = mainDivs[i].clientHeight; 
}
}
for (var i = 0; i < mainDivs.length; ++i) {
mainDivs[i].style.height = maxHeight + "px";
}
}