
let menu=[
    {
        name:"Burger",
        price:5.99,
        category:"Fast Food",
        availabl:"Yes",
    },
    {
       name:"Shwerma",
        price:2.5,
        category:"Fast Food",
        availabl:"Yes",
    },
    {
        name:"Mansif",
        price:4.99,
        category:"Favourite",
        availabl:"Yes",
    },
    {
         name:"salt",
        price:2.75,
        category:"Salt",
        availabl:"Not ",
    },
    {
         name:"Sezer salt",
        price:4.75,
        category:"salt",
        availabl:"Not ",
    }
];
function showMenu(){
    let order=[];
    for(let i=0;i<menu.length;i++){
       
        order.push([menu[i].name]+"("+menu[i].price+")");
    }
   alert(order);
}
showMenu();
 let orderlist=[];
let Choose=prompt("Enter a food name :");
let quantity = Number(prompt("Enter quantity:"));
let total
let selectedfood=false;
while(!selectedfood){
   for(let i=0;i<menu.length;i++){
    if(Choose===menu[i].name && menu[i].availabl==="Yes"){
        total = menu[i].price * quantity;
        selectedfood=true;
        break;
    }
   }
   if (!selectedfood){
      Choose = prompt("Food is not available. Enter another food:");
   }
}
for(let x in menu){
    if(menu[x].name==Choose){
       document.write("Name :"+menu[x].name+"<br>");
       document.write("Total price :"+total+"<br>");
       document.write("category :"+menu[x].category+"<br>");
       break;
    }
    
}