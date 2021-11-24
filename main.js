const inputText = document.querySelector("#list__text")
const inputButton = document.querySelector("#list__add")

const outputText = document.querySelector("#list__output")

const resetButton = document.querySelector("#reset")
// const deleteButton = document.querySelector("#delete")

listNumber = 0

inputButton.addEventListener("click",()=>{
   listNumber=listNumber+1
   return outputText.innerHTML += 
   `<div class="task" id="task__${listNumber}">
      <input type="checkbox" class="select">
      <span class="task__log">${inputText.value}</span>
      <span class="task__edit">&#9998</span>
   </div>`;
})

resetButton.addEventListener("click",()=>{
    listNumber=0
    return outputText.innerHTML =  `<div id="list__output"></div>`
})