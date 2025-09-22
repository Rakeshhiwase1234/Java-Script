const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

button.forEach(function(button) {
    console.log(button);
    button.addEventListener("click", function(r){
     console.log(r)
     console.log(r.target);
     if(r.target.id === "grey") {
        body.style.backgroundColor = r.target.id ;
     }
     if(r.target.id === "white") {
        body.style.backgroundColor = r.target.id ;
     }
     if(r.target.id === "blue") {
        body.style.backgroundColor = r.target.id ;
     }
     if(r.target.id === "yellow") {
        body.style.backgroundColor = r.target.id ;
     }




     

    });

});
