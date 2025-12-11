let form = document.querySelector("form");
form.addEventListener("submit", function (){
    event.preventDefault();
    let user = this.elements[0];
    let pass = this.elements[1];
    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");
    console.log(user.value);
    console.log(pass.value);
    alert(`Hi ${user.value}, Your Password is set to ${pass.value}`);
})
let user = document.querySelector("#user");
user.addEventListener("change", function (){
    event.preventDefault();
    console.log("Input Value");
    console.log("final Value",this.value);

});

user.addEventListener("input", function (){
    event.preventDefault();
    console.log("Input Changed");
    console.log("final Value",this.value);

});