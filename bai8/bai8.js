let number1 = +prompt("nhap vao so thu nhat");
let number2 = +prompt("nhap vao so thu hai");
let number3 = +prompt("nhap vao so thu ba");

max =number1;
if(number2> max){
    max=number2
}
if(number3> max){
    max=number3
}
document.write("so lon nhat la "+max);