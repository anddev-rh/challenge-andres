const closeBtn = document.getElementById('close');
const modalContainer = document.getElementById('modal_container');

const saveLocalStorage = () =>{
  let wasVisited = true;
  localStorage.setItem("wasVisited", wasVisited);
}

const firstVisit = () => {
  
  if(!localStorage.getItem("wasVisited")) {
    modalContainer.classList.add("show");
  }
  saveLocalStorage();
}

firstVisit();

closeBtn.addEventListener('click', () => {modalContainer.classList.remove("show")})








