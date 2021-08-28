//alert("hola mundo")
const closeBtn = document.getElementById('close');
const modalContainer = document.getElementById('modal_container');



// const getLocalStorage = () => {
//   const wasPrevioslyVisited = localStorage.getItem("wasVisited");
//   console.log(wasPrevioslyVisited)
// }

const saveLocalStorage = () =>{
  let wasVisited = true;
  localStorage.setItem("wasVisited", wasVisited);
}

const firstVisit = () => {
  
  if(!localStorage.getItem("wasVisited")) {
    modalContainer.classList.add("show");
  }

  //getLocalStorage();

  saveLocalStorage();

}

firstVisit();

closeBtn.addEventListener('click', () => {modalContainer.classList.remove("show")})








