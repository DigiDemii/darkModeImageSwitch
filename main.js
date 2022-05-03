// Variables

let body = document.querySelector('body');
let para = document.querySelector('p');
let button = document.querySelector('button');

const bttn = document.getElementById("buttonId");
let bool = false;

// Button event

bttn.addEventListener("click", () => {
    if (bool === false) {
        body.style.backgroundColor = "#FFFFFF";
        para.style.color = "#28262C";
        button.style.backgroundColor = "#777283";
        document.getElementById("logoImg").src = "assets/LogoGrey.png";
        changes.innerHTML = "This is light mode";
        bool = true;
    } else {
        body.style.backgroundColor = "#28262C";
        para.style.color = "#FFFFFF";
        button.style.backgroundColor = "#8775E1";
        changes.innerHTML = "This is dark mode";
        document.getElementById("logoImg").src = "assets/LogoLilac.png";
        bool = false;
    }
})

