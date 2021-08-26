var plusButton = document.getElementById("add");
var minusButton = document.getElementById("sub");
var reset = document.getElementById("re");
// Counter Activator
var counter = document.getElementById("count");

// Function to increase count by one
$(plusButton).on("click", function() {
   // Part to disable the button after 10
    if(counter < 10){
       counter++;
       plusButton.removeAttribute("disabled");
    }
    else{
        plusButton.attributes('disabled', "disabled");
    }
    
    //Part to check counter is even or odd
    if(counter % 2 == 0){
        $("body").css("background-color", "rgb(124, 202, 253)");
        $('p').css("color", "white");
    }
    else{
        $("body").css("background", "grey");
        $('p').css("color", "red");
    }
    $('p').text(counter);
});
 
// Function to reduce count by one
$(minusButton).on("click", function() {
    
    // Part to disable the button after 0
    if(counter < 1){
        minusButton.attribute("disabled", "disabled");
    }
    else{
        counter--;
        minusButton.removeAttribute("disabled");
    }
    //Part to check counter is even or odd
    if(counter % 2 == 0){
        $("body").css("background-color", "rgb(124, 202, 253)");
        $('p').css("color", "white");
    }
    else{
        $("body").css("background", "grey");
        $('p').css("color", "red");
    }
    $('p').text(counter);
});
// Function to reset the button
$(reset).on("click", function(){
    counter = 0;
    $('p').text(counter);
    $('body').css("background-color", "rgb(124, 202, 253)");
})
