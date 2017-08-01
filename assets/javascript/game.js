$(document).ready(function(){
  //hp,attack,defend,name
  var enemies = {
    obi:[120,25,15,"Obi-One-Kenobi"],
    luke: [100,25,10,"Luke Skywalker"],
    dsid: [150,30,15,"Darth Sidious"],
    dmaul: [180,20,20,"Darth Maul"]
  };


  var character="";
  // This time, our click event applies to every single crystal on the page. Not just one.
  var staged = false;


  $("#obi").on("click", function() {
    var jediTag = $("#obi");
    jediTag.appendTo("#yourChar");
    jediTag.css('border', "solid 2px green");
    character="obi";
    staged=true;
    fight(character,jediTag);


  });


  $("#luke").on("click", function() {
    var jediTag = $("#luke");
    jediTag.appendTo("#yourChar");
    jediTag.css('border', "solid 2px green");
    character="luke";
    staged=true;
    fight(character, jediTag);


  });

  $("#dsid").on("click", function() {
    var jediTag = $("#dsid");
    jediTag.appendTo("#yourChar");
    jediTag.css('border', "solid 2px green");
    character="dsid";
    staged=true;
    fight(character, jediTag);


  });

  $("#dmaul").on("click", function() {
    var jediTag = $("#dmaul");
    jediTag.appendTo("#yourChar");
    jediTag.css('border', "solid 2px green");

      character="dmaul";
      staged=true;
      fight(character, jediTag);

  });

  //character chosen
  //begin game
  function fight(challenger,tag) {
    currentHP =100;
    currentAtt=10;
    currentCtr=10;

    //add enemies to proper section in DOM
    console.log("You are: " + challenger);

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


console.log("end");
});
