window.onload = function(){
    var board = [];

    //Get all divs after an element with id "board"
    let squares = document.querySelectorAll("#board div");

    //Add the class "square" to all divs
    for(let x = 0; x <= 8; x++){
        squares[x].setAttribute("class", "square")
    }
    
    var num_clicks = 9;
    for(let x = 0; x <= 8; x++){
        squares[x].addEventListener('click', function(){
            if(num_clicks%2==0 && squares[x].innerHTML==""){
                squares[x].setAttribute("class","square X");
                squares[x].innerHTML="X";
                num_clicks--;
            }
            if(num_clicks%2==1 && squares[x].innerHTML==""){
                squares[x].setAttribute("class","square O");
                squares[x].innerHTML="O";
                num_clicks--;
            }
        });
    }



}