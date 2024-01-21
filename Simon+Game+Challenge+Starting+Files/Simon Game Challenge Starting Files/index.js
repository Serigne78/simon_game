var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern = [];

var level = 0





$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    console.log(gamePattern);

    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkgame(userClickedPattern.length -1)

    // Comparaison des motifs après chaque clic
  
    
});

function checkgame(level) {
      if (gamePattern[level] === userClickedPattern[level])  {
            if (userClickedPattern.length === gamePattern.length){
              setTimeout(function () {
                nextSequence();
              }, 1000);
            }
      }else{
            $("body").css("background-color", "red");
            setTimeout(function() {
                // Remettre la couleur du fond après 1 seconde
                $("body").css("background-color", ""); // Remettre à la couleur par défaut ou à la couleur souhaitée
            }, 1000); // 1000 millisecondes = 1 seconde
           
            
            $("#level-title").text("Game Over, PressEnter");

            $(document).on("keydown", function(event) {
            if (event.which === 13) {
            // 13 correspond à la touche "Entrée". Vous pouvez changer cela selon vos besoins.
           // 1000 millisecondes = 1 seconde
            startOver()
            nextSequence();
            };
      }
      )}
};          
      
      
function nextSequence() {
      userClickedPattern = [];
      $("#level-title").text("Level "+level);
      var n = Math.random();
      var randomNumber = Math.floor(n*4);
      var randomChosenColour = buttonColours[randomNumber];
      gamePattern.push(randomChosenColour);
      console.log(gamePattern);
      $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
       //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
      playSound(randomChosenColour);
      animatePress(randomChosenColour);
      level = level+1
      
     

      

};


function playSound(name) {
      var audio = new Audio("sounds/" + name + ".mp3");
      audio.play();
}

function animatePress(color) {
      $("."+color).addClass("pressed");
      setTimeout(function(){
            $("."+color).removeClass("pressed");
      },100);
}

$(document).on("keydown", function(event) {
      // Vérifiez si la touche pressée est la touche "a" (code 65)
      if (event.which === 65) {
          nextSequence()

      }
});


function startOver() {
      level = 0;
      gamePattern = [];
      started = false;
    }
    

