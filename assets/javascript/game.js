$(document).ready(function(){

//Star wars RPG
// Brice Randolph
  var currentHP =100;
  var currentAtt=10;
  var currentCtr=10;
  var battleMode=false;
  var defenderHP = 100;
  var defenderCtr = 10;
  var defenderName="";
  var defeated=false;
  var numDefeated=0;
  var defenderNickname=""
  var character="";
  var staged = false;

  var enemies = {
    obi:[120,8,5,"Obi-One-Kenobi"],
    luke: [100,10,5,"Luke Skywalker"],
    dsid: [150,8,20,"Darth Sidious"],
    dmaul: [180,8,25,"Darth Maul"]
  };




  $("#button-1").on("click", function() {
    if(battleMode){
        defenderHP-=currentAtt; //update def html
        var selector = "#HP" +defenderNickname;
        var div = $(selector);
        div.text(defenderHP);
        if (defenderHP<=0) {defeated=true;console.log("defeated")}

        //displat text
        if (defeated) {
          $("#battleText").text("You defeated "+defenderName+" , you can choose to fight another enemy.");
          //remove image
          var selector="#"+defenderNickname;
          $(selector).remove();
          defeated=false;


          numDefeated++;
          if(numDefeated===3){
            //reset game
            //display win message
            $("#battleText").text("You won!!!");

          }

        }else {
          currentHP-=defenderCtr; //update my html
          $("#battleText").text("You attacked "+defenderName+ " for "+ currentAtt +" damage.  " + defenderName +" attacked you back for "+defenderCtr+" damage." );
          var selector = "#HP" +character;
          var div = $(selector);
          div.text(currentHP);
          if(currentHP<=0){ $("#battleText").text("You Lose!");}
        }
        currentAtt+=10;


    }

  });

  $("#obi").on("click", function() {
    if(staged){
      $("#obi").appendTo("#Defender");
      $("#obi").css("background-color","yellow");
      SetDefender("obi");
      battleMode=true;
    } else {
    var jediTag = $("#obi");
    jediTag.appendTo("#yourChar");
    jediTag.css('border', "solid 2px green");
    character="obi";
    staged=true;
    Stage(character,jediTag);
    }

  });


  $("#luke").on("click", function() {
    if(staged){
      $("#luke").appendTo("#Defender");
      $("#luke").css("background-color","yellow");
      SetDefender("luke");
      battleMode=true;
    } else {
    var jediTag = $("#luke");
    jediTag.appendTo("#yourChar");
    jediTag.css('border', "solid 2px green");
    character="luke";
    staged=true;
    Stage(character, jediTag);
    }

  });

  $("#dsid").on("click", function() {
    if(staged){
      $("#dsid").appendTo("#Defender");
      $("#dsid").css("background-color","yellow");
      SetDefender("dsid");
      battleMode=true;
    } else {
      var jediTag = $("#dsid");
      jediTag.appendTo("#yourChar");
      jediTag.css('border', "solid 2px green");
      character="dsid";
      staged=true;
      Stage(character, jediTag);
    }

  });

  $("#dmaul").on("click", function() {
    if(staged){
      $("#dmaul").appendTo("#Defender");
      $("#dmaul").css("background-color","yellow");
      SetDefender("dmaul");
      battleMode=true;
    } else {
      var jediTag = $("#dmaul");
      jediTag.appendTo("#yourChar");
      jediTag.css('border', "solid 2px green");

      character="dmaul";
      staged=true;
      Stage(character, jediTag);
    }

  });

  //Once character is chosen,
  //this fcn sets hp,attack,and counter amounts
  //also sets oponents in oponent space
  function Stage(challenger,tag) {

    for (var key in enemies) {
      if (enemies.hasOwnProperty(key) && key===challenger) {
        currentHP = enemies[key][0]; //hp
        currentAtt = enemies[key][1]; //attack
        currentCtr = enemies[key][2];
      }
    }

    //add enemies to proper section in DOM
    for (var key in enemies) {
      if (enemies.hasOwnProperty(key) && key!== challenger) {

        console.log(key + " -> " + enemies[key]);
        //add enemy to enemiesAvailable
        var selector = "#" +key;
        var div = $(selector);
        div.appendTo("#enemiesAvailable");
        div.css('border', "solid 2px red");

      }
    }

  }

  function SetDefender(jedi){
    for (var key in enemies) {

      if (enemies.hasOwnProperty(key) && key === jedi) {
        defenderHP=enemies[key][0];
        defenderCtr=enemies[key][2];
        defenderName=enemies[key][3];
        defenderNickname=jedi;
      }
    }
    console.log("defender:"+defenderName+defenderHP);
    console.log("current attack:"+currentAtt);
  }



console.log("end");
});
