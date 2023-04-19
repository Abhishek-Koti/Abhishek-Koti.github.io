var c="<br><button onclick=count('c')>Clothes<div id=c></div></button><br>";
var e="<br><button onclick=count('e')>Electronics<div id=e></div></button><br>";
var g="<br><button onclick=count('g')>Grocery<div id=g></div></button><br>";

var cc=Number(localStorage.getItem('c'));
var ce=Number(localStorage.getItem('e'));
var cg=Number(localStorage.getItem('g'));

if(cc>ce && ce>cg) document.write(c+e+g);
else if(ce>cc && cc>cg) document.write(e+c+g);
else if(cg>cc && cc>ce) document.write(g+c+e);
else document.write(c+e+g);

document.write("<br><br>Click the buttons multiple times and Refresh this page");
  
document.getElementById('c').innerHTML=localStorage.getItem('c');
document.getElementById('e').innerHTML=localStorage.getItem('e');
document.getElementById('g').innerHTML=localStorage.getItem('g');

function count(x) { 
localStorage.setItem(x,Number(localStorage.getItem(x))+1);
document.getElementById(x).innerHTML=localStorage.getItem(x);
}
