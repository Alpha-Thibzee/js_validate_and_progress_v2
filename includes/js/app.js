let mode = document.getElementById("mode");
let toggler = document.getElementById('icon');
function toggle(){
     mode.classList.remove('white');
    mode.classList.toggle("dark");

     if(toggler.classList.contains('fa-solid')){
          toggler.classList.remove('fa-solid');
          toggler.classList.add('fa-regular');
     }else {
          toggler.classList.remove('fa-regular');
          toggler.classList.add('fa-solid');
     }

}

icon.addEventListener('click',()=>  toggle());

let password = document.getElementById("password");
const regex = new RegExp('^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\\W).*$');



function test() {
     $text ="";
    let value = password.value;
   if(regex.test(value) === true){
        $text = "Mot de passe sécurisé";
        document.getElementById("infos").innerText= $text;
   } else if(regex.test(value) === false) {
        $text = "Mot de passe non sécurisé";
        document.getElementById("infos").innerText= $text;
   }
} 

function addValue(){
     let input = document.getElementById('password').length;
     document.getElementById("progress").value ++;
}

function delValue(){
     let input = document.getElementById('password').length;
     document.getElementById("progress").value --;
}

password.addEventListener("input",(e) =>{ 
test();
console.log(password.value.length);
if(password.value.length < 11 && password.value.length >= 0 ){
console.log(e);
     if(e.data != null){
     addValue();
     }

     if(password.value.length == 10)
     {
 
          

     }
     else {

          if (e.data === null){
          delValue();
          document.getElementById("paragraphe").innerText = "";
          }

     }

     if(password.value.length <= 2.5){
          document.getElementById("stylebar").className = "rouge";
     } else if (password.value.length <= 5 && password.value.length > 2.5){
          document.getElementById("stylebar").className = "orange";
     } else if (password.value.length <= 7.5 && password.value.length > 5){
          document.getElementById("stylebar").className = "jaune";
     } else if (password.value.length <= 10 && password.value.length > 7.5){
          document.getElementById("stylebar").className = "vert";
     }




}

if(password.value.length == 0){
     
     document.getElementById("progress").setAttribute("value",0);

}

},true);










