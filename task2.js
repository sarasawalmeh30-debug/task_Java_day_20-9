
let menu=[
    {
        name:"Burger",
        price:"5.99 JD",
        category:"Fast Food",
        availabl:"Yes",
    },
    {
       name:"Shwerma",
        price:"2.5 JD",
        category:"Fast Food",
        availabl:"Yes",
    },
    {
        name:"Mansif",
        price:"4.99 JD",
        category:"Favourite",
        availabl:"Yes",
    },
    {
         name:"salt",
        price:"2.75 JD",
        category:"Salt",
        availabl:"Not ",
    },
    {
         name:"Sezer salt",
        price:"4.75 JD",
        category:"salt",
        availabl:"Not ",
    }
];
function showMenu(){
    for(let i=0;i<menu.length;i++){
       
        alert(menu[i].name);
    }
   
}
showMenu();
let Choose=prompt("Enter a food name :");
let selectedfood=false;
while(!selectedfood){
   for(let i=0;i<menu.length;i++){
    if(Choose===menu[i].name && menu[i].availabl==="Yes"){
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
       document.write(menu[x].name+"<br>");
       document.write(menu[x].price+"<br>");
       document.write(menu[x].availabl+"<br>");
       document.write(menu[x].category+"<br>");
       break;
    }
    
}