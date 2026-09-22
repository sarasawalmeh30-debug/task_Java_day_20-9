let arr=prompt("enter 3 digit to 6 diget of number:")
function reverses(arr){  
    for(let i=arr.length-1;i>=0;i--){
        document.write(arr[i]);
    }
}

reverses(arr);
document.write("<hr>")
for(let i=0;i<=15;i++){
if(i%2==0){
    document.write("<br>"+i, " is even"+"<br>");
}
else{
     document.write(i, " is odd");
     
}
}
document.write("<hr>")
let num=prompt("enter nmber from 6 digit");
let result = "";

for (let i = 0; i < num.length; i++) {

    result += num[i];

    if (num[i] % 2 === 0 && num[i + 1] % 2 === 0) {
        result += "-";
    }
}

document.write(result);

document.write("<hr>")
let age=Number(prompt("Enter your age: "))
function Agechecker(age){
     if(age>=18){
        document.write("The user is Adult");
     }else{
        document.write("The user is Minor");
     }
}
Agechecker(age);