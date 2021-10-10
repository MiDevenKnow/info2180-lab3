window.onload = function(){
    var board = ['-','-','-','-','-','-','-','-','-'];
    var types_of_wins = [
        [0, 1, 2], //Horizontal wins
        [3, 4, 5], //Horizontal wins
        [6, 7, 8], //Horizontal wins
        [0, 4, 8], //Diagonal wins
        [2, 4, 6], //Diagonal wins
        [0, 3, 6], //Vertical wins
        [1, 4, 7], //Vertical wins
        [2, 5, 8]  //Vertical wins
    ];

    var status_of_game = 'no winner';
    
    var new_game = document.getElementsByClassName("btn");

    function findWinner(){
        for(let x=0; x < 8; x++){
            
            if(board[types_of_wins[x][0]] == 'X' && board[types_of_wins[x][1]] == 'X' && board[types_of_wins[x][2]] == 'X'){
                return 'X';
            }
            if(board[types_of_wins[x][0]] == 'O' && board[types_of_wins[x][1]] == 'O' && board[types_of_wins[x][2]] == 'O'){
                return 'O';
            }
        }
        return 'none';
    }

    //Get all divs after an element with id "board"
    let squares = document.querySelectorAll("#board div");

    //Add the class "square" to all divs
    for(let x = 0; x <= 8; x++){
        squares[x].setAttribute("class", "square")
    }
    
    var num_clicks = 9;

    //For loop to add event listener to each square
    for(let x = 0; x <= 8; x++){

        //Add hover when mouseover
        squares[x].addEventListener('mouseover', function (){   
            squares[x].classList.add("hover")
        });

        //Remove hover when mouseleave
        squares[x].addEventListener('mouseleave', function (){   
            squares[x].classList.remove("hover")
        });

        //Add an X or O to a square when clicked & update the board array with the appropriate value in the clicked location
        squares[x].addEventListener('click', function(){

            if(num_clicks%2==0 && squares[x].innerHTML=="" && status_of_game=='no winner'){

                squares[x].setAttribute("class","square X");
                squares[x].innerHTML="X";
                board[x]='X';
                num_clicks--;

                if(findWinner() == 'X'){
                    status_of_game = "Congratulations! X is the Winner!";
                    console.log(status_of_game);
                    document.getElementById("status").innerHTML=status_of_game;
                    document.getElementById("status").classList.add("you-won");
                }
            }
            if(num_clicks%2==1 && squares[x].innerHTML=="" && status_of_game=='no winner'){

                squares[x].setAttribute("class","square O");
                squares[x].innerHTML="O";
                board[x]='O';
                num_clicks--;

                if(findWinner() == 'O'){
                    status_of_game = "Congratulations! O is the Winner!";
                    console.log(status_of_game);
                    document.getElementById("status").innerHTML=status_of_game;
                    document.getElementById("status").classList.add("you-won");
                }
            }
        });
    }

    //If new game is clicked, reset board
    new_game[0].addEventListener('click', function(){
        location.reload();
    });
}