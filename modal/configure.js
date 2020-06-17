


class Modal {


  // Show an element
  static fadeIn (elem) {

    // Get the natural height of the element
    var getHeight = function () {
      elem.style.display = 'block'; // Make it visible
      var height = elem.scrollHeight + 'px'; // Get it's height
      elem.style.display = ''; //  Hide it again
      return height;
    };

    var height = getHeight(); // Get the natural height
    elem.classList.add('is-visible'); // Make the element visible
    elem.style.height = height; // Update the max-height

    // Once the transition is complete, remove the inline max-height so the content can scale responsively
    window.setTimeout(function () {
      elem.style.height = '';
    }, 350);

  };

  // Hide an element
  static fadeOut (elem) {

    // Give the element a height to change from
    elem.style.height = elem.scrollHeight + 'px';

    // Set the height back to 0
    window.setTimeout(function () {
      elem.style.height = '0';
    }, 1);

    // When the transition is complete, hide it
    window.setTimeout(function () {
      elem.classList.remove('is-visible');
    }, 350);

  };

  // Toggle element visibility
  static fadeToggle (elem, timing) {

    // If the element is visible, hide it
    if (elem.classList.contains('is-visible')) {
      Modal.fadeOut(elem);
      return;
    }

    // Otherwise, show it
    Modal.fadeIn(elem);
    
  };

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
    contentDiv.classList.add('toggle-content');
    document.body.appendChild(contentDiv); 
  
    fetch('/modal/modal.html')
      .then(response => response.text())
      .then(data => {
        // Add content modal
        document.querySelector('#content').innerHTML = data;
  
        // Get elements
        Modal.configure()

        // Fade In
        window.setTimeout(function(){
          // Get the content
          var content = document.getElementById("content");

          // Toggle the content
          Modal.fadeToggle(content);

        }, 1000)

      });
  }

}








