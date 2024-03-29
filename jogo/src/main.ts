
const cell = document.querySelectorAll(".cell") 
const addXNaTabela = () => {
  const marcar = "X"
  cell.forEach(element => {
    element.addEventListener("click", () => {
      element.innerHTML = marcar
    })
  });
}

addXNaTabela()