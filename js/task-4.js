const formEl=document.querySelector(".login-form");

formEl.addEventListener("submit", formSubmit);

function formSubmit(ev){
    ev.preventDefault();
    const {email, password}=ev.target.elements;
    if(email.value.trim()===""||password.value.trim()===""){
        return alert("All form fields must be filled in");
    };
   console.log({email:email.value.trim(),password:password.value.trim()});
   ev.target.reset();
}

