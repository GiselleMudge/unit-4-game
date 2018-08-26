$(document).ready(function(){ 

    var test = true;
    var char1Count = true;
    var countDefeated = 0;
    
    //Counter
    var queenCount = 0;
    var predatorCount = 0;
    var marvinCount = 0;
    var bugCount = 0;

    var battlephase = true;
    


//Choo choo choose your character

    //This happens when we click on Queen Alien as Hero
    $('.char1').on('click',function()
    {
            battlephase = false;
            if(char1Count === true)
        {
            $(this).addClass('main');
            queenCount++; 
            char1Count = false; //Changes to false so Main character wont move to enemies area
            $('.char2').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'}); // adds the characters that was not clicked to enemies section
            $('.char2 p').css({'margin-left': '30px'}); //centers Health text
            $('.char3').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'}); // adds the characters that was not clicked to enemies section
            $('.char3 p').css({'margin-left': '30px'});//centers Health text
            $('.char4').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'}); // adds the characters that was not clicked to enemies section
            $('.char4 p').css({'margin-left': '30px'});//centers Health text
            //Adjusted the css so they would appear the same as before it was clicked
            $('.starImage').css({'width': '100px',
                                'height': '100px',
                                'margin-left': 'auto',
                                'margin-right': 'auto',
                                'display': 'block'});		
        }
        else if(char1Count === false && queenCount === 0)
        {

            $('.char1').appendTo('.defenderBox').addClass("def").css({'background-color' : 'black','color':'white'});
            $('.char1 p').css({'margin-left': '30px'});
            if (battlephase === false)
            {
                console.log(true);
                fight();
            }
        }
    });
    //This happens when we click on Predator as Hero
    $('.char2').on('click',function()
    {
        battlephase = false;
        if(char1Count === true)
    {
        $(this).addClass('main');
        predatorCount++;
        char1Count = false; //Changes to false so Main character wont move to enemies area
        $('.char1').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'}); // adds the characters that was not clicked to enemies section
        $('.char1 p').css({'margin-left': '30px'});   //Centers characters Health text
        $('.char3').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'});// adds the characters that was not clicked to enemies section
        $('.char3 p').css({'margin-left': '30px'}); //Centers characters Health text
        $('.char4').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'});// adds the characters that was not clicked to enemies section
        $('.char4 p').css({'margin-left': '30px'});   //Centers characters Health text
        //Adjusted the css so they would appear the same as before it was clicked
        $('.starImage').css({'width': '100px',
                            'height': '100px',
                            'margin-left': 'auto',
                            'margin-right': 'auto',
                            'display': 'block'});
        }
        else if(char1Count === false && predatorCount === 0)
        {

            $('.char2').appendTo('.defenderBox').addClass("def").css({'background-color' : 'black','color':'white'});
            $('.char2 p').css({'margin-left': '30px'});
            if (battlephase === false)
            {
                console.log(true);
                fight();
            }
        }        
    });
    //This happens when we click on Marvin as Hero
    $('.char3').on('click',function()
    {
        battlephase = false;
        if(char1Count === true)
    {
        $(this).addClass('main');
       marvinCount++;
        char1Count = false;
        $('.char1').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'}); // adds the characters that was not clicked to enemies section
        $('.char1 p').css({'margin-left': '30px'});     //Centers characters Health text
        $('.char2').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'}); // adds the characters that was not clicked to enemies section
        $('.char2 p').css({'margin-left': '30px'});   //Centers characters Health text
        $('.char4').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'}); // adds the characters that was not clicked to enemies section
        $('.char4 p').css({'margin-left': '30px'});   //Centers characters Health text
        //Adjusted the css so they would appear the same as before it was clicked
        $('.starImage').css({'width': '100px',
                            'height': '100px',
                            'margin-left': 'auto',
                            'margin-right': 'auto',
                            'display': 'block'});
    }
    else if(char1Count === false && marvinCount === 0)
    {

        $('.char3').appendTo('.defenderBox').addClass("def").css({'background-color' : 'black','color':'white'});
        $('.char3 p').css({'margin-left': '30px'});
        if (battlephase === false)
        {
            console.log(true);
            fight();
        }
    }
    });

    //This happens when we click on THE BUGS as Hero
    $('.char4').on('click',function(){
        battlephase = false;
        if(char1Count === true)
    {
        $(this).addClass('main');
       bugCount++;
        char1Count = false;
        $('.char1').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'}); // adds the characters that was not clicked to enemies section
        $('.char1 p').css({'margin-left': '30px'});       //Centers characters Health text
        $('.char2').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'});// adds the characters that was not clicked to enemies section
        $('.char2 p').css({'margin-left': '30px'}); //Centers characters Health text
        $('.char3').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'});// adds the characters that was not clicked to enemies section
        $('.char3 p').css({'margin-left': '30px'}); //Centers characters Health text
        //css to appear the same as before it was clicked
        $('.starImage').css({'width': '100px',
                            'height': '100px',
                            'margin-left': 'auto',
                            'margin-right': 'auto',
                            'display': 'block'});
    }
    else if(char1Count === false && bugCount === 0)
    {

        $('.char4').appendTo('.defenderBox').addClass("def").css({'background-color' : 'black','color':'white'});
        $('.char4 p').css({'margin-left': '30px'});
        if (battlephase === false)
        {
            console.log(true);
            fight();
        }
    }
    });


// TIME TO KILL OR BE KILLED

function fight()
{
        $('.attackBtn').on('click',function() 
        {
        var charName = $('.def').attr('characterName'); 
        var healthMain = $('.main').attr('health');             //applies all characters' available health points
        var attackMain = $('.main').attr('attack');             //applies damage points value from your character
        var healthDefender = $('.def').attr('health');          //applies opponent's available health points 
        var counterAttack =  $('.def').attr('counterAttack');   // Reduces hero's health after attacking opponent by the counterAttack amount */
        var healthMainAfter = healthMain - counterAttack;       // Reduces opponent's health by the Attack amount
        var healthDefAfter = healthDefender - attackMain;       //updates hero's health
        var healthMain1 = $('.main').attr('health',healthMainAfter); //updates characters' health 
        var healthDef1 = $('.def').attr('health',healthDefAfter);//updates opponent's health 
        $('.main p').html($('.main').attr("health"));           //updates all characters health display 
        $('.def p').html($('.def').attr("health"));             //updates opponent's health display
        //Shows attack message            
        $('.defender').html('<p>' + 'You clocked ' + charName + 
                            ' for ' + attackMain +  ' health points. '+
                             charName + ' retaliated for ' + 
                             counterAttack + ' </p>').css({'font-size': '20px','text-align':'center'});
    
        var attackMain1 = $('.main').attr('attack',attackMain); //Updates characters' attack value 
        
        //deactivates attack button after GAME OVER
            if(healthMainAfter <= 0)
            {
                $('.defender').html('<p>' + 'You are dead as hell. TRY AGAIN or call your mom and cry about it!' + ' </p>').css({'font-size': '60px'});
                $('.attackBtn').off('click');
            }
            
            //Remove opponent if health is 0 or negative
            else if(healthDefAfter <= 0)
            {
                $('.def').remove();
                $('.defender').html('<p>' + 'FATALITY. You annihiliated ' + charName +
                 '!  Pick your next trophy, killer.' + '</p>').css({'color': 'yellow','font-size': '40px'});
                 countDefeated++;                 //on Game Over- Remove event listener
            }
                 
            if(countDefeated === 3)
            {
                     $('.defender').html('<p>'+ 'YOU HAVE BEEN BLOODED YOUNG YAUTJA. CONGRATS KILLER' + '</p>').css({'font-size': '40px'})
                     console.log('count after**** ' + countDefeated);
                     $('.attackBtn').off('click'); //removes click event once characters' health = 0
                     $('.resetBtn').on('click'); //Activates reset
            }
            
            
    });
}

});




