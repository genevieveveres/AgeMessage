// document.getElementById("submit").addEventListener("click", function(){
//     age = document.getElementById("age").value;
// });

let age = prompt("How old are you?");
let message = "Don't lie to me.";

if (-0.75 <= age && age < 0 ) {
    message = "Death Stranding, aka, Norman Reedus and the Fetus";
}
else if (0 <= age && age  <= 1) {
    message = "Who's a cute widdle baaaaby <3 You are! Yes you are! <3";
}
else if (1 < age && age  < 3){
    message = "A toddler! How precious.";
}
else if (3 <= age && age  < 5){
    message = "Welcome to preschool kid";
}
else if (5 <= age && age  < 12){
    message = "Gradeschool might be the golden period of life";
}
else if (12 <= age  && age < 18){
    message = "Teen angst is real";
}
else if (18 <= age && age  < 21){
    message = "You're kind of an adult but let's face it, not really";
}
else if (21 <= age && age <= 116){
    message = "You're a REAL adult now";
}

alert(message)