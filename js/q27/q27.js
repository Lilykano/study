// a가 b보다 크다 그리고 c가 d보다 작다
// or
// e가 100과 같다 그리고 f가 100이 아니다

var a = 3;
var b = 2;
var c = 6;
var d = 7;
var e = 100;
var f = 95;

if((a>b&&c<d)||(e==100&&f!=100)){
    document.write("cat");
}
else{
    document.write("x");
}

function br(){
    document.write("<br>");
}