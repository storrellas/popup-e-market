
class Modal {

  static configure(){
    var btn = document.getElementById("buy-button");
    var modal = document.getElementById("product-modal");
    var span = document.getElementsByClassName("close")[0];
  
    // When the user clicks the button, open the modal 
    btn.onclick = function () {
      modal.style.display = "block";
    }
  
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
  
  static  load(){
    // create a new div element 
    var contentDiv = document.createElement("div"); 
    contentDiv.id = "content"
    document.body.appendChild(contentDiv); 
  
    fetch('/modal/modal.html')
      .then(response => response.text())
      .then(data => {
        // Add content modal
        document.querySelector('#content').innerHTML = data;
  
        // Get elements
        Modal.configure()
  
      });
  }

}


