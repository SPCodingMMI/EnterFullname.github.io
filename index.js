//VARIBALES

const firstnameinput = document.getElementById("FirstName"); //This will store the value of first name
const lastnameinput = document.getElementById("LastName"); //This will store the value of second name
const submit = document.getElementById("SubmitBtn"); //Stores the submit button ID

submit.onclick = function(){
    document.getElementById("nameoutput").textContent = `Hello ${firstnameinput.value} ${lastnameinput.value}. Thanks for trying this out!`;
    firstnameinput.value = "";
    lastnameinput.value = "";
}