const inputEl=document.querySelector("#name-input");
const outputEl=document.querySelector("#name-output");

inputEl.addEventListener("input", onInput);

function onInput(ev){
       if(ev.target.value.trim()){
        outputEl.textContent=ev.target.value.trim();
       } else {outputEl.textContent="Anonymous" };
}