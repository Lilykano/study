function addCatAndInputText(){
    var a1=prompt("아무 단어나 입력해주세요");
    var animal = new Array();
    animal = ["고양이", a1];
    var sum = animal[0] + animal[1];
    document.write(sum);
}

addCatAndInputText();
