let linkLogin=document.getElementById("login_link");
let login=document.getElementById("login");
let closeLogin=document.getElementById("button_close");
let fontBody=document.getElementsByName("body");
let cont=document.getElementById("container_principal");
let modalBackdrop = document.getElementById('modalBackdrop');
linkLogin.addEventListener("click",()=>{
    if(login.style.display==="none"){
        setTimeout(()=>{
            login.style.display="block";
            login.classList.add("login_active");
            modalBackdrop.style.display = 'block';
            fontBody.classList.add('blur-background');
        },100)
    }
})
closeLogin.addEventListener("click",()=>{
    login.style.display="none"
    modalBackdrop.style.display="none";
    fontBody.classList.remove("blur-background")
})
//For animations
let span1=document.querySelector(".span1");
setTimeout(()=>{
    span1.style.animation="colorChange 2s forwards"
},3000);
//redirection_bottom
let linkButtom=document.getElementById("sing_up_link_buttom");
linkButtom.addEventListener("click",()=>{
    window.location.href="/Sec1/Register/registerpage.html"
})
