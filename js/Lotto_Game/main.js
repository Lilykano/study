// 1. 컴퓨터가 1~45 수를 6개 뽑아서 출력
// 1. 내가 한 게임을 구매했다고 가정하고
// 2. 컴퓨터의 랜덤값도

//배열 선언
var Lotto_Number=new Array();
var My_Lotto = new Array();
//결과
var win = 0;
var result = "";
//배열
Lotto_Number = [random1 = Math.floor(Math.random()*45 +1), random2 = Math.floor(Math.random()*45 +1), random3 = Math.floor(Math.random()*45 +1), random4 = Math.floor(Math.random()*45 +1), random5 = Math.floor(Math.random()*45 +1), random6 = Math.floor(Math.random()*45 +1), random7 = Math.floor(Math.random()*45 +1)];
My_Lotto = [PL1 = Math.floor(Math.random()*45 +1), PL2 = Math.floor(Math.random()*45 +1), PL3 = Math.floor(Math.random()*45 +1), PL4 = Math.floor(Math.random()*45 +1), PL5 = Math.floor(Math.random()*45 +1), PL6 = Math.floor(Math.random()*45 +1)];
var My_bonus = Math.floor(Math.random()*45 +1);

document.write("로또 번호는 : ");
document.write(Lotto_Number[0]);
document.write(",");
//중복예외처리
while(true){
    if(Lotto_Number[1] != Lotto_Number[0]){   // 같지 않으면 빠져나감
        
        document.write(Lotto_Number[1]);
        document.write(",");
        break;
    }
    else{
        Lotto_Number[1]=Math.floor(Math.random() *45 +1);
    }

}

while(true){
    if(Lotto_Number[2] != Lotto_Number[1] && Lotto_Number[2] != Lotto_Number[0]){
        document.write(Lotto_Number[2]);
        document.write(",");
        break;
    }
    else{
        Lotto_Number[2]=Math.floor(Math.random() *45 +1);
    }
}

while(true){
    if(Lotto_Number[3] != Lotto_Number[2] && Lotto_Number[3] != Lotto_Number[1] && Lotto_Number[3] != Lotto_Number[0]){
        document.write(Lotto_Number[3]);
        document.write(",");
        break;
    }
    else{
        Lotto_Number[3]=Math.floor(Math.random() *45 +1);
    }
}

while(true){
    if(Lotto_Number[4] != Lotto_Number[3] && Lotto_Number[4] != Lotto_Number[2] && Lotto_Number[4] != Lotto_Number[1] && Lotto_Number[4] != Lotto_Number[0]){
        document.write(Lotto_Number[4]);
        document.write(",");
        break;
    }
    else{
        Lotto_Number[4]=Math.floor(Math.random() *45 +1);
    }
}

while(true){
    if(Lotto_Number[5] != Lotto_Number[4] && Lotto_Number[5] != Lotto_Number[3] && Lotto_Number[5] != Lotto_Number[2] && Lotto_Number[5] != Lotto_Number[1] && Lotto_Number[5] != Lotto_Number[0]){
        document.write(Lotto_Number[5]);
        break;
    }
    else{
        Lotto_Number[5]=Math.floor(Math.random() *45 +1);
    }
}

while(true){
    if(Lotto_Number[6] != Lotto_Number[5] && Lotto_Number[6] != Lotto_Number[4] && Lotto_Number[6] != Lotto_Number[3] && Lotto_Number[6] != Lotto_Number[2] && Lotto_Number[6] != Lotto_Number[1] && Lotto_Number[6] != Lotto_Number[0]){
        document.write(" 보너스번호:",Lotto_Number[6]);
        break;
    }
    else{
        Lotto_Number[6]=Math.floor(Math.random() *45 +1);
    }
}
document.write("입니다.");
document.write("<br>");

document.write("당신의 번호는 : ", My_Lotto," 보너스번호:",My_bonus, "입니다.");
//일치갯수 확인1
if (My_Lotto[0] == Lotto_Number[0]) {
    win = win + 1;
}
if (My_Lotto[0] == Lotto_Number[1]) {
    win = win + 1;
}
if (My_Lotto[0] == Lotto_Number[2]) {
    win = win + 1;
}
if (My_Lotto[0] == Lotto_Number[3]) {
    win = win + 1;
}
if (My_Lotto[0] == Lotto_Number[4]) {
    win = win + 1;
}
if (My_Lotto[0] == Lotto_Number[5]) {
    win = win + 1;
}
//일치갯수 확인2
if (My_Lotto[1] == Lotto_Number[0]) {
    win = win + 1;
}
if (My_Lotto[1] == Lotto_Number[1]) {
    win = win + 1;
}
if (My_Lotto[1] == Lotto_Number[2]) {
    win = win + 1;
}
if (My_Lotto[1] == Lotto_Number[3]) {
    win = win + 1;
}
if (My_Lotto[1] == Lotto_Number[4]) {
    win = win + 1;
}
if (My_Lotto[1] == Lotto_Number[5]) {
    win = win + 1;
}
//일치갯수 확인3
if (My_Lotto[2] == Lotto_Number[0]) {
    win = win + 1;
}
if (My_Lotto[2] == Lotto_Number[1]) {
    win = win + 1;
}
if (My_Lotto[2] == Lotto_Number[2]) {
    win = win + 1;
}
if (My_Lotto[2] == Lotto_Number[3]) {
    win = win + 1;
}
if (My_Lotto[2] == Lotto_Number[4]) {
    win = win + 1;
}
if (My_Lotto[2] == Lotto_Number[5]) {
    win = win + 1;
}
//일치갯수 확인4
if (My_Lotto[3] == Lotto_Number[0]) {
    win = win + 1;
}
if (My_Lotto[3] == Lotto_Number[1]) {
    win = win + 1;
}
if (My_Lotto[3] == Lotto_Number[2]) {
    win = win + 1;
}
if (My_Lotto[3] == Lotto_Number[3]) {
    win = win + 1;
}
if (My_Lotto[3] == Lotto_Number[4]) {
    win = win + 1;
}
if (My_Lotto[3] == Lotto_Number[5]) {
    win = win + 1;
}
//일치갯수 확인5
if (My_Lotto[4] == Lotto_Number[0]) {
    win = win + 1;
}
if (My_Lotto[4] == Lotto_Number[1]) {
    win = win + 1;
}
if (My_Lotto[4] == Lotto_Number[2]) {
    win = win + 1;
}
if (My_Lotto[4] == Lotto_Number[3]) {
    win = win + 1;
}
if (My_Lotto[4] == Lotto_Number[4]) {
    win = win + 1;
}
if (My_Lotto[4] == Lotto_Number[5]) {
    win = win + 1;
}
//일치갯수 확인6
if (My_Lotto[5] == Lotto_Number[0]) {
    win = win + 1;
}
if (My_Lotto[5] == Lotto_Number[1]) {
    win = win + 1;
}
if (My_Lotto[5] == Lotto_Number[2]) {
    win = win + 1;
}
if (My_Lotto[5] == Lotto_Number[3]) {
    win = win + 1;
}
if (My_Lotto[5] == Lotto_Number[4]) {
    win = win + 1;
}
if (My_Lotto[5] == Lotto_Number[5]) {
    win = win + 1;
}
document.write("<br>");
document.write("일치하는 갯수 :", win);
document.write("<br>");

if(win<=2){
    document.write("꽝입니다");
}
if(win==3){
    document.write("5등 입니다");
}
if(win==4){
    document.write("4등 입니다");
}
// if(win==5){
//     document.write("3등 입니다");
// }
//5개를 맞추고 틀린 한 번호가 보너스 번호와 일치하면 2등임 <<< 2등 규칙.
if(win==5){
    for(i=0; i<=5; i++){
        if(My_bonus==Lotto_Number[i]){
            result = "2등 입니다";
        }
        else{
            result = "3등 입니다";
        }
    }
    document.write(result);
}
//2등 당첨 케이스를 디버깅을 통해서 값 조작을 이용해서 테스트하기
if(win==6){
    document.write("1등 입니다");
}