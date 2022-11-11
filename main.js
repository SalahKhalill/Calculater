(function() {

    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn"); // TO TAKE ALL THE NUMBERS 
    let clear = document.querySelector(".btn-clear");
    let equal = document.querySelector(".btn-eq");
    
    
    
    buttons.forEach(function (button) {
        button.addEventListener('click', function (e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });
    equal.addEventListener('click', function(e){
        if (screen.value === '') {
            screen.value = "Please enter";
        }else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })
    clear.addEventListener('click', function(e){
        screen.value = "";
    })



})();