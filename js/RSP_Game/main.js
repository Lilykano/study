var scissors;
var rock;
var paper;
var random = Math.floor(Math.random() * 3 +1);

var choice = prompt("가위 바위 보 중 하나를 입력해주세요");

//가위 바위 보 중 하나가 랜덤하게 나와야한다
if(random==1){
    random="가위"
}
else if(random==2){
    random="바위"
}
else if(random==3){
    random="보"
}

//입력받은값 조건문 사용하여 출력
if(choice=="가위"){
    document.write("자신의 선택 : ", choice, "<br>");
    document.write("상대의 선택 : ", random, "<br>");
}
else if(choice=="바위"){
    document.write("자신의 선택 : ", choice, "<br>");
    document.write("상대의 선택 : ", random, "<br>");
}
else if(choice=="보"){
    document.write("자신의 선택 : ", choice, "<br>");
    document.write("상대의 선택 : ", random, "<br>");
}
else{
    document.write("잘못입력하셨습니다");
}

//승패여부 출력
if(random=="가위"&&choice=="바위"){
    document.write("승리!");
}
else if(random=="가위"&&choice=="가위"){
    document.write("비겼습니다");
}
else if(random=="가위"&&choice=="보"){
    document.write("패배!");
}
else if(random=="바위"&&choice=="보"){
    document.write("승리!");
}
else if(random=="바위"&&choice=="바위"){
    document.write("비겼습니다");
}
else if(random=="바위"&&choice=="가위"){
    document.write("패배!");
}
else if(random=="보"&&choice=="가위"){
    document.write("승리!");
}
else if(random=="보"&&choice=="보"){
    document.write("비겼습니다");
}
else if(random=="보"&&choice=="바위"){
    document.write("패배!");
}

//추가할것↓ 
//승패출력을 수식으로하여 간결하게 변경/문자가 아닌 이미지로 출력
//단판이 아닌 무한으로 가능하게 변경(text area사용)
//입력받을때 문자가 아닌 버튼을 누르는 방식으로 변경