var random = Math.floor(Math.random() * 100) + 1;

for(i=1; i<=random; i++) {
    document.write("<img src ='cat.jpg'>")
    document.write(i)
}
/* 표현 1 */
// var random = Math.floor(Math.random() * 6) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
// var s = "주사위를 굴려 ( " + random + " ) 이 나왔습니다.";
// document.write(s);