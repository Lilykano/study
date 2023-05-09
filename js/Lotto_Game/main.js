// 1. 컴퓨터가 1~45 수를 6개 뽑아서 출력
// 1. 내가 한 게임을 구매했다고 가정하고
// 2. 컴퓨터의 랜덤값도

var random1 = Math.floor(Math.random()*45 +1);
var random2 = Math.floor(Math.random()*45 +1);
var random3 = Math.floor(Math.random()*45 +1);
var random4 = Math.floor(Math.random()*45 +1);
var random5 = Math.floor(Math.random()*45 +1);
var random6 = Math.floor(Math.random()*45 +1);
var lotto_Number=new Array();

lotto_Number = [random1, random2, random3, random4, random5, random6];
var L1 = lotto_Number[0];
var L2 = lotto_Number[1];

function lotto(){
    document.write("로또 번호는 : ",lotto_Number, "입니다.");

}

lotto();
