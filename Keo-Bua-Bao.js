function sure1(){
    your = "Scissor";
    document.getElementById('you').innerHTML = " Scissor ";
    document.getElementById('sure').innerHTML = "Start ! ";
    document.getElementById('cpt-choice').innerHTML = " _______";
    
}

function sure2(){
     your = "Axe";
    document.getElementById('you').innerHTML = " Axe ";
    document.getElementById('sure').innerHTML = "Start ! ";
    document.getElementById('cpt-choice').innerHTML = " _______";
    
}


function sure3(){
     your = "Paper";
    document.getElementById('you').innerHTML = " Paper ";
    document.getElementById('sure').innerHTML = "Start !";
    document.getElementById('cpt-choice').innerHTML = " _______";
    
}

    
function play(){
    var computer = Math.floor(Math.random()*3);
    
    switch (computer){
        case 0: 
        computer =  "Scissor";
        document.getElementById('cpt-choice').innerHTML = "Scissor";
        break;
        case 1: 
        computer = "Axe";
        document.getElementById('cpt-choice').innerHTML = "Axe ";
        break;
        case 2:
        computer = "Paper";
        document.getElementById('cpt-choice').innerHTML = "Paper ";
        break;
    }
    
    var your_choice = your;
    var cpt_choice = computer;

    if(your_choice == "Scissor"){
        switch(cpt_choice){
            case "Scissor":
                document.getElementById('result').innerHTML = "Draw , try again!";
                break;
            case "Axe":
                document.getElementById('result').innerHTML = "You lose, try again!";
                break;
            case "Paper":
                document.getElementById('result').innerHTML = "Congratulation, you win !";
        }
    }
    else if (your_choice === "Axe"){
        switch(cpt_choice){
            case "Axe":
                document.getElementById('result').innerHTML = "Draw , try again!";
                break;
            case "Paper":
                document.getElementById('result').innerHTML = "You lose, try again!";
                break;
            case "Scissor":
                document.getElementById('result').innerHTML = "Congratulation, you win !";
        }
    }
    else if (your_choice === "Paper"){
        switch(cpt_choice){
            case "Paper":
                document.getElementById('result').innerHTML = "Draw , try again!";
                break;
            case "Scissor":
                document.getElementById('result').innerHTML = "You lose, try again!";
                break;
            case "Axe":
                document.getElementById('result').innerHTML = "Congratulation, you win !";
        }
    }

    
}