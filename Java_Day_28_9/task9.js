let div1=document.getElementById("div1");
fetch("menu.json")
.then(Response=>Response.json())
.then(data=>{

for(let i=0;i<data.length;i++){
    
    div1.innerHTML+=`
     <h3>Meal Name: ${data[i].MealName}</h3>
     <h3>Price :${data[i].price}</h3>
     <h3> availabl :${data[i].availabl}</h3>
     <hr>`
}

});