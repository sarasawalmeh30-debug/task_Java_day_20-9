let p=document.getElementById("p");
let font=document.getElementById("font");
let size=document.getElementById("size");
let Italic=document.getElementById("Italic");
let Bold=document.getElementById("Bold");
let Underline=document.getElementById("Underline");
function clickfont(){
    if(font.value=="Fantasy"){
      p.style.fontFamily="Fantasy";
    }else{
         p.style.fontFamily="Times New Roman";
    }
}
    
function clickpx(){
    if(size.value=="15px"){
        p.style.fontSize="15px";
    }else{
     p.style.fontSize="10px"
    
    }

}
function clickItalic(){
    if(Italic.checked){
         p.style.fontStyle="italic";
    }else{
         p.style.fontStyle="none";
    }
   
}
function clickBold(){
    if(Bold.checked){
          p.style.fontWeight="bold";
    }else{
          p.style.fontWeight="none";
    }
  
}
function clickUnderline(){
    if(Underline.checked
        
    ){
        p.style.textDecoration ="underline";
    }else{
        p.style.textDecoration = "none";
    }
 
}