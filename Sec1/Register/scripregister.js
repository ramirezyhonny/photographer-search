//option usertype

const form1 = document.getElementById('form_user_type');
const selectElement = document.getElementById('type_user');
const formPri = document.getElementById('form_principal');
const formClient= document.getElementById("form_principal_client");
const formPho= document.getElementById("form_principal_photographer");

form1.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const opt = selectElement.value;
  if (opt === 'client') {
    formPri.style.display = 'block';
    formClient.style.display="block"
    formPho.style.display="none"

  } else if(opt==="ph"){
    formPri.style.display = 'block';
    formPho.style.display="block"
    formClient.style.display="none"
  } else{
    formPri.style.display = 'none';
  }
});
//select
