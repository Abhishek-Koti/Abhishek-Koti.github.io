var a="<br><button style='background-color:red' onclick=count('a')>Apple<div id=a></div></button><br>";
var b="<br><button  style='background-color:yellow'  onclick=count('b')>Banana<div id=b></div></button><br>";
var c="<br><button  style='background-color:orange' onclick=count('c')>Carrot<div id=c></div></button><br>";

var ca=Number(localStorage.getItem('a'));
var cb=Number(localStorage.getItem('b'));
var cc=Number(localStorage.getItem('c'));

if(ca>cb && cb>cc) document.write(a+b+c);
else if(cb>ca && ca>cc) document.write(b+a+c);
else if(cc>ca && ca>cb) document.write(c+a+b);
else document.write(a+b+c);

document.write("<br><br>Click the buttons multiple times and Refresh this page");
  
document.getElementById('a').innerHTML=localStorage.getItem('a');
document.getElementById('b').innerHTML=localStorage.getItem('b');
document.getElementById('c').innerHTML=localStorage.getItem('c');

function count(x) { 
localStorage.setItem(x,Number(localStorage.getItem(x))+1);
document.getElementById(x).innerHTML=localStorage.getItem(x);
}
