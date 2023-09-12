var arrayInt = [1,4,6,7,11];
for(let i = 0; i < 5 ; i ++){
    if(arrayInt[i] % 2 == 0){
        arrayInt[i] = arrayInt[i] + 1;
} else if(arrayInt[i] % 2 != 0){
    console.log("impar");
}
}
console.log(arrayInt);