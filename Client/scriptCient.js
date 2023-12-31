//hidden responsive
let link=document.getElementById("myperfil");
let hidden=document.getElementById("hidden");
let closeHi=document.getElementById("but_clo_hi");
let nameUser=document.getElementById("name_user");
link.addEventListener("click", ()=>{
        hidden.style.opacity="1";
        hidden.style.display="block";
        hidden.style.animation="hid 0.5s forwards"
        nameUser.style.animation="namuser 2s forwards"
});
closeHi.addEventListener("click", ()=>{
    if(hidden.style.opacity==="1" && hidden.style.display==="block"){
        hidden.style.opacity="0";
        hidden.style.display="none";
        hidden.style.animation=false;
    } else{
        hidden.style.opacity="1";
        hidden.style.display="block";
        hidden.style.width="300px";
    }
});
//menu responsive
let buttres=document.getElementById("menuresp_button");
let list=document.getElementById("navrespon");
let buttCancel=document.getElementById("cancel_navres");
let link2=document.getElementById("myperfil_res");

buttres.addEventListener("click", ()=>{
    buttres.style.display="none"
    list.style.display="flex"
})
buttCancel.addEventListener("click", ()=>{
    buttres.style.display="block"
    list.style.display="none"
})
link2.addEventListener("click", ()=>{
    if(hidden.style.opacity==="0" && hidden.style.display==="none"){
        hidden.style.opacity="1";
        hidden.style.display="block";
        hidden.style.animation="hid 0.5s forwards"
    } else{
        hidden.style.opacity="0";
        hidden.style.display="none";
        hidden.style.animation=false;
    };
});
//select theme
let buttonFont=document.getElementById("button_font");
let contFont=document.getElementById("cont_election");
buttonFont.addEventListener("click", ()=>{
    if(contFont.style.display==="none"){
        contFont.style.display="block";
        buttonFont.style.display="none";
    }
});
let closeLinks=document.getElementById("closeLinkFont");
closeLinks.addEventListener("click", ()=>{
    if(contFont.style.display==="block"){
        contFont.style.display="none";
        buttonFont.style.display="block";
    }
})
//Opt theme
let darkLink=document.getElementById("dark_span");
let lightLink=document.getElementById("light_span");
let bodyBack=document.getElementById("body");
//other lets
let objPara=document.querySelectorAll("#objP");
let navbar=document.getElementById("navbar");
let titleSearch=document.getElementById("title_search");
let presentation=document.getElementById("presentation");

darkLink.addEventListener("click", ()=>{
    if(bodyBack.classList.contains("light")){
        bodyBack.classList.remove("light");
    } else{
        bodyBack.classList.add("dark");
        objPara.forEach(objP => {
            objP.style.color="#fff";
            navbar.style.backgroundColor="#181820";
            navbar.style.color="#fff";
            titleSearch.style.color="#fff";
            
          });
          hidden.style.boxShadow="none"
          hidden.style.backgroundColor="#181820";
          hidden.style.color="#919499";
          hidden.style.borderRadius="0";
          presentation.style.color="#919499";
    }
})
lightLink.addEventListener("click", ()=>{
    if(bodyBack.classList.contains("dark")){
        bodyBack.classList.remove("dark");
        objPara.forEach(objP => {
            objP.style.color="#000";
            navbar.style.backgroundColor="#000";
            titleSearch.style.color="#000";
            presentation.style.color="#000";
          });
        hidden.style.borderRadius="20px 0 0 20px";
        hidden.style.backgroundColor="rgba(55, 53, 56, 0.504)";
        hidden.style.color="#000";
        hidden.style.boxShadow="0 0 20px 0";
    } else{
        bodyBack.classList.add("light");
        navbar.style.color="#fff";
    }
})
//Reservations scrip
let linkReservation=document.getElementById("reservation_link");
let contReservation=document.getElementById("reservations_section");
let cancelContR=document.getElementById("close_reservation");
let modalBackdrop=document.getElementById("modalBackdrop");
let fBody=document.getElementsByName("body");
linkReservation.addEventListener("click", ()=>{
    setTimeout(()=>{
        contReservation.style.display="block";
        modalBackdrop.style.display="block";
        fBody.classList.add("blur-background");
    },300);
});
cancelContR.addEventListener("click",()=>{
    contReservation.style.display="none";
    fBody.classList.remove("blur-background");
    
})



