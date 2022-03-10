let para1= document.getElementById("firstp");
const para2 = document.getElementById("secondp");

para1.innerHTML= "Finally working on JS";
para2.innerHTML = "Second paragraph";

para1.onclick = (event) => {

 para1.style.color = "blue"; 
}


para2.onclick = (event)=>{
    let para3 = document.createElement('p');
    para3.id = "thirdp";
    para3.innerHTML="This is our new paragraph";
    document.body.appendChild(para3);
}
