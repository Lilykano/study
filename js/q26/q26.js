function cat(){
    var cat_age=prompt("고양이 나이를 입력하세요 : ");
    var cat_type=prompt("고양이 종류를 입력하세요 : ");
    var cat_name=prompt("고양이 이름을 입력하세요 : ");
    var cat_all;
    
    cat_all=cat_age+cat_type+cat_name;
    document.write(cat_all);
}

cat();
//document.write(cat_age + ",\n" + cat_type + ",\n" + cat_name);