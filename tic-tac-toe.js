window.onload = function(){

    //Get all divs after an element with id "board"
    let squares = document.querySelectorAll("#board div");

    //Add the class "square" to all divs
    for(let x = 0; x <= 8; x++){
        squares[x].setAttribute("class", "square")
    }

}