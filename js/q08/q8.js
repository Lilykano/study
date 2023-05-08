var random = Math.floor(Math.random() * 6) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
var player = random;

switch (player) {
    case 1 :
        document.write("<img src='1.png'>");
        //...
        //...
        break;
    case 2 :
        document.write("<img src='2.png'>");
        //...
        //...   
        break;     
    case 3 :
        document.write("<img src='3.png'>");
        break;
    case 4 :
        document.write("<img src='4.png'>");
        //...   
        //...   
        break;     
    case 5 :
        document.write("<img src='5.png'>");
        //...
        //...   
        break;
    case 6 :
        document.write("<img src='6.png'>");
        //...
        //...   
        break;
}

// switch (player) {
//     case "가위": a = 1;
//         break;
//     case "바위": a = 2;
//         break;
//     case "보":  a = 3;
//         break;
// }
