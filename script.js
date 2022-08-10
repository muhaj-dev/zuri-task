let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

const parentContainer = document.querySelector(".read-more-container");

parentContainer.addEventListener("click", event =>{
    const current = event.target;

    const isReadMoreBtn = current.className.includes("read-more-btn")
    
    if (!isReadMoreBtn) return;
    const currentText = event.target.parentNode.querySelector(".read-more-text");

    currentText.classList.toggle("read-more-text--show")

})


btn.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}