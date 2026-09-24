
let button=document.getElementById("button");
let heading = document.getElementsByTagName("h1");

function buttonclick(){
    let namee=document.getElementById("Name").value;
    let order=document.getElementsByClassName("order");
    let selectedOrders="";
    for(let i=0;i<order.length;i++){
if (order[i].checked){
     selectedOrders += order[i].value + " ";
}
    }
    document.write("Hello "+ namee +" !"+"Your order is "+ selectedOrders);
}
function color(){
button.style.backgroundColor="blue";
heading[0].style.color = "red";
}
function oregin(){
button.style.backgroundColor="gray";
heading[0].style.color = "black";
}

