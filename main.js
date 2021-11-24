const inputText = document.querySelector("#list__text")
const inputButton = document.querySelector("#list__add")

const outputText = document.querySelector("#list__output")

// const resetButton = document.querySelector("#reset")
// const deleteButton = document.querySelector("#delete")

inputButton.addEventListener("click",()=>{
   return outputText.innerHTML += 
   `<div class="task">
      <input type="checkbox" class="select">
      <span class="task__log">${inputText.value}</span>
      <span class="task__edit">&#9998</span>
   </div>`;
})