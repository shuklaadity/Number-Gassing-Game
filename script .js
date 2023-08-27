let number;
const gunrate= ()=> {
    let n1=Math.random();
    let n2=n1*10;
    n2= Math.trunc(n2);
    n2= (n2%6)+1;
    number=n2;
    
}

const gunratnum=()=>{
    
   
    let sec1=document.getElementById("section1-container")
    let sec2=document.getElementById("section2-container")
    let sec3=document.getElementById("section3-container")
    
    
    sec1.style.display="none";
    sec1.style.transition="all 2s ease";
    sec2.style.display="block";
    
    setTimeout(function(){
        sec2.style.transition="all 2s ease";
        sec2.style.display="none";
        
        sec3.style.display="block";
        gunrate();
    },2000);
}


// matching

function matchnum(){
   let input=document.getElementById("input-num").value
   
   
      if(input== number)
      {
         let sec3=document.getElementById("section3-container")
          let sec4=document.getElementById("section4-container")
         sec3.style.display="none";
         sec4.style.display="block";
      }
      else if(input=='')
     {
         alert("  Enter the number please")
     }
     else if(input>number)
     {
         alert("  Enter lower number")
     }
     
      else if(input<number)
     {
         alert("  Enter greater number")
     }
     else
     {
        alert("try again")
       
     }
   
   
}

const again=()=>{
   let sec1=document.getElementById("section1-container")
    let sec2=document.getElementById("section2-container")
    let sec3=document.getElementById("section3-container")
   let sec4=document.getElementById("section4-container")
   
    sec4.style.display="none";
    sec3.style.display="none";
    sec1.style.display="none";
    sec1.style.transition="all 2s ease";
    sec2.style.display="block";
    
    setTimeout(function(){
        sec2.style.transition="all 2s ease";
        sec2.style.display="none";
        sec3.style.display="block";
        gunrate();
    },2000);
}