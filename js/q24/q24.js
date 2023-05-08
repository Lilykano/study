var random = Math.floor(Math.random() * 10) + 1;
var i;

for(i=1; i<=10; i++){
    if(i==random){
        continue;
    }
    else{
        document.write(i);
    }
}