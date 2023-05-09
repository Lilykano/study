// 1. 컴퓨터가 1~45 수를 6개 뽑아서 출력
// 1. 내가 한 게임을 구매했다고 가정하고
// 2. 컴퓨터의 랜덤값도
var lotto_Number=new Array();

lotto_Number = [];
lotto_Number.push(Math.floor(Math.random()*45 +1));
var i;


for(i=1;i<7;i++){
    lotto_Number.push(Math.floor(Math.random()*45 +1));
}

var L1 = lotto_Number[0];
var L2 = lotto_Number[1];
var L3 = lotto_Number[2];
var L4 = lotto_Number[3];
var L5 = lotto_Number[4];
var L6 = lotto_Number[5];

function lotto(){
    document.write("로또 번호는 : ",L1,L2,L3,L4,L5,L6, "입니다.");
}

lotto();
