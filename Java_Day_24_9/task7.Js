function submit(){
    let username=document.getElementById("Username").value;
    let p1=document.getElementById("p1");
    let usernameRegex = /^\S+$/;
    let cheekusername=usernameRegex.test(username);
    if(cheekusername==true){
        p1.style.display="none";
        sessionStorage.setItem("username",username);
     
    }else{
           p1.style.display="inline";
    }


    let Password=document.getElementById("Password").value;
    let p2=document.getElementById("p2");
    let PasswordRegex = /^(?=.*\d).{8,}$/;
    let cheekPassword=PasswordRegex.test(Password);
    if(cheekPassword==true){
        p2.style.display="none";
        localStorage.setItem("Password",Password);
     
    }else{
           p2.style.display="inline";
    }
    
    let Phone=document.getElementById("PhoneNumber").value;
    let p3=document.getElementById("p3");
    let PhoneRegex = /^(?=.*\d).{8,}$/;
    let cheekPhone=PhoneRegex.test(Phone);
    if(cheekPhone==true){
        p3.style.display="none";
        localStorage.setItem("Phone",Phone);
     
    }else{
           p3.style.display="inline";
    }

    let order=document.getElementById("Order").value;
    localStorage.setItem("order",order);


    alert("Welcome," + sessionStorage.getItem("username")+"\n"+"Saved Order: " + localStorage.getItem("order")+"\n"+"Saved username: " + sessionStorage.getItem("username"));


}