function loadCss(filename) {
    var cssNode = document.createElement("link");
    cssNode.setAttribute("rel", "stylesheet");
    cssNode.setAttribute("type", "text/css");
    cssNode.setAttribute("href", filename);
    document.getElementsByTagName("head")[0].appendChild(cssNode);
}
loadCss("//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css");

var script = document.createElement('script');
script.onload = function () {
    //do stuff with the script
};
script.src = "//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js";

document.head.appendChild(script);


window.addEventListener("load", function(){
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#bd227c"
    },
    "button": {
      "background": "white",
      "text": 'black'
    },
    
   
  },
    "content": {
	     "message": "Stay at Home Mum uses cookies to ensure the best browsing experience. For more information:",
	     "link": "Read our Privacy Policy",
    "href": "/privacy-policy/"
  },
  "position": "bottom-right"
})});

function insertCss( code ) {
    var style = document.createElement('style');
    style.type = 'text/css';

    if (style.styleSheet) {
        // IE
        style.styleSheet.cssText = code;
    } else {
        // Other browsers
        style.innerHTML = code;
    }

    document.getElementsByTagName("head")[0].appendChild( style );
}

insertCss('.cc-link {margin-bottom: 10px;} .cc-btn {margin-top: 10px !important;margin-bottom: 10px !important;} .cc-btn:hover {color:black  !important; background: #5cdbf2 !important;}');


