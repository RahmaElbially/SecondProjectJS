// Default Number = 0
let count = 0;
// Div That Has Counter 
var number = document.querySelector("#counter");
// Btns Div
var btns = document.querySelectorAll(".btn")
// Make Foreach Loop On Buttons
btns.forEach(function(btn){
    // Add Event Listener On Every Buttons
    btn.addEventListener("click", (x) => {
        // Creare an Variable To Store Class Name 
        var storage = x.target.classList;
        // Make Diifferent If Conditions To Check Class Name 
        if (storage.contains ("decrease")){
            count--;
        }
        else if(storage.contains("increase")){
            count++;
        }
        else{count =0;}

        // Make Diifferent If Conditions To Change Number Color

        if (count > 0){
            number.style.color = "blue";
            number.style.fontSize = "80px";
        }
        else if (count <0){
            number.style.color = "rgb(148,0,211)";
            number.style.fontSize = "80px";
        }
        else{
            number.style.color = "#333";
            number.style.fontSize = "80px";
        }

        number.innerHTML = count;
    });
});
