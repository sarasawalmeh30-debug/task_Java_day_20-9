
let name = prompt("Enter your Name : ");
let age =Number(prompt("Enter your Number :"));
let Gender = prompt("Enter your Gender (Femal or Male) : ");
if(Gender=="Male" || Gender=="male"){
    alert("Welcome Mr."+name);
}else if(Gender=="Female" || Gender=="female"){
    alert("Welcome Ms."+name );
}
else{
    alert("Welcome "+name );
}
let valid=0;
let invalid=0;
let order= "no";
let orderState=" no"
if (age <16){
   alert("you are not eligible to place an order");
}else if(age >=16){
     order = prompt("Enter one of the following (Burger or Shawarma or Zinger ) : ");
    if(order=="Burger"||order=="Shawarma"||order=="Zinger"){
        valid=1;
        orderState="Your order is being prepared .";
    }else{
        orderState="invalid order . Please try again.";
        invalid=1;
    }

    if(age>=18  && valid==1){
      alert("Order confirmed .");
    } else if(age<18 || valid==1){
        alert("Order requires verification .");
    }
}
console.log("Customer Name: " + name);
console.log("Age: " + age);
console.log("Gender: " + Gender);
console.log("Order: " + order);
console.log("Order Status: " + orderState);

document.write(`
    <div class="box">
    <h1>Restaurant Ordering System</h1>
   <p><b>Customer Name:</b> ${ name} </p>
   <p><b>Age:</b> ${ age } </p>
   <p><b>Gender:</b> ${Gender}</p>
   <p><b>Order:</b>${ order } </p>
   <p><b>Order Status:</b> ${orderState}</p>
   </div>
`);
