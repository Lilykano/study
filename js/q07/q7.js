var random = Math.floor(Math.random() * 100) + 1;

for(var i=1; i<=random; i++) {
    if(i==7){
        document.write("<img id='gc' src ='cat.jpg' width='100px' height='100px'>")
        document.write(i)
        var gc_img = document.getElementById("gc");
        gc_img.style.borderColor = "gold";
        gc_img.style.borderStyle = "solid";
    }
    else{b
        document.write("<img id='border' src ='cat.jpg' width='100px' height='100px'>")
        document.write(i)
    }
}
/* 표현 1 */
// var random = Math.floor(Math.random() * 6) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
// var s = "주사위를 굴려 ( " + random + " ) 이 나왔습니다.";
// document.write(s);