var y = Math.floor(Math.random() * 10 + 1);

playername= localStorage.getItem("player_name")

var guess = 1;

function submit()
{
    var x = document.getElementById("guessField").value; 

    if(x == y)
    {
        alert("CONGRATULATIONS!" + playername + "YOU GUESSSED IT RIGHT");
        guess = 1;
    }
    else if(x > y)
    {
            guess++;
            alert("OOPS! Sorry !! try a smaller number");
    }
    else
    {
        guess++;
        alert("OOPS! Sorry !! try a bigger number")
    }
}

function playAgain()
{
    Math.floor(Math.random() * 10 + 1); 
}
    
