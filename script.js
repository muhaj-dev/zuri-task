const parentContainer = document.querySelector(".read-more-container");

parentContainer.addEventListener("click", event =>{
    const current = event.target;

    const isReadMoreBtn = current.className.includes("read-more-btn")
    
    if (!isReadMoreBtn) return;
    const currentText = event.target.parentNode.querySelector(".read-more-text");

    currentText.classList.toggle("read-more-text--show")

})

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}