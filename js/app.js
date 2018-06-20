var playerNumber = 0
var playerList =  []
var PlayerTurnIndex = 0

console.log("PlayerTurnIndex", PlayerTurnIndex)

$(".addPlayer").click(function(){

  if ($("#form").val() === "") {
    alert("Put your name")
    return false;
  } else {
    playerNumber = playerNumber + 1
    var player = $("input").val();
    playerList.push(player);
    var alerttext = " "+ player+ " is added."
    alert(alerttext)
    $(".playerListBandle ul").append('<li class = "playerShow"><img class = "smallCard" src ="images/1072262.png"></li>');
    $(".playerListBandle li:last ").append("Player"+`${playerNumber}`+" "+`${player}`);
    console.log(playerList)
  }

});

$('#something').click(function() {
  location.reload();
});

$(".remove").click(function(){

  playerNumber = playerNumber - 1

  //opposit to append, delete closest one
  //could be one RESET button(easier)

})

$(".gameStart").click(function(){

  // grab the name of the customers

  //envoke Name..
  $(document).ready(function(){
    $("#invokeName").text(playerList[PlayerTurnIndex]);
  });

  $(".hiddenByGameStart").hide();
  $(".playerListBandle").hide();
  $(".hidden1").show();
})

$(function(){
  var min = 1 ;
  var max = trumpCardFrontList.length ;


  let item_num = $('img.trumpBack').length;
  var deg = 360.0/item_num;
  var red = (deg*Math.PI/180.0);
  var circle_r = $(".trumpBack").width() * 1.75;
  $('img.trumpBack').each(function(i, elem) {
    var x = Math.cos(red * i) * circle_r + circle_r;
    var y = Math.sin(red * i) * circle_r + circle_r;
    $(elem).css('left', x);
    $(elem).css('top', y);
    $(elem).attr("data-id", i);
    var randomNum = Math.floor( Math.random() * (max + 1 - min) ) + min ;

    $(elem).css('transform', `rotate(${i*5 - 0.4*randomNum}deg)`)
  });
});

var trumpCardFrontList = ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/6.png', 'images/7.png', 'images/8.png', 'images/9.png', 'images/10.png', 'images/11.png', 'images/12.png','images/13.png', 'images/14.png', 'images/15.png', 'images/16.png', 'images/17.png', 'images/18.png', 'images/19.png', 'images/20.png', 'images/21.png','images/22.png','images/23.png', 'images/24.png', 'images/25.png','images/26.png', 'images/27.png', 'images/28.png', 'images/29.png', 'images/30.png', 'images/31.png', 'images/32.png', 'images/33.png', 'images/34.png', 'images/35.png', 'images/36.png', 'images/37.png', 'images/38.png','images/39.png', 'images/40.png', 'images/41.png', 'images/42.png', 'images/43.png', 'images/44.png', 'images/45.png', 'images/46.png', 'images/47.png', 'images/48.png', 'images/49.png', 'images/50.png', 'images/51.png', 'images/52.png']
var chosenCardList = []
var PlayerTurnIndex = 0;

$(".trumpBack").click(function () {
  $(this).slideUp();
  $(".hidden1").hide();
  $(".hidden2").show();

  var randomMathNum = Math.floor(Math.random() * trumpCardFrontList.length)
  var randImg = trumpCardFrontList[randomMathNum];
  $('.pickedCard').attr('src', randImg);
  console.log("randomMathNum", randomMathNum);
  console.log("randImg", randImg);

  if ((randImg == "images/1.png" )||(randImg == "images/14.png" )|| (randImg ==　"images/27.png") || (randImg ==　"images/40.png" )){

    $("#" +1+ "").show();
    chosenCardList.push(trumpCardFrontList[randomMathNum]);
    trumpCardFrontList.splice(randomMathNum,1);
  } else if ((randImg == "images/2.png" )||(randImg == "images/15.png" )|| (randImg ==　"images/28.png") || (randImg ==　"images/41.png" )){

    $("#" +2+ "").show();
    chosenCardList.push(trumpCardFrontList[randomMathNum]);
    trumpCardFrontList.splice(randomMathNum,1);
  } else if ((randImg == "images/3.png" )||(randImg == "images/16.png" )|| (randImg ==　"images/29.png") || (randImg ==　"images/42.png" )){

    $("#" +3+ "").show();
    chosenCardList.push(trumpCardFrontList[randomMathNum]);
    trumpCardFrontList.splice(randomMathNum,1);
  } else if ((randImg == "images/4.png" )||(randImg == "images/17.png" )|| (randImg ==　"images/30.png") || (randImg ==　"images/43.png" )){

    $("#" +4+ "").show();
    chosenCardList.push(trumpCardFrontList[randomMathNum]);
    trumpCardFrontList.splice(randomMathNum,1);
  } else if ((randImg == "images/5.png" )||(randImg == "images/18.png" )|| (randImg ==　"images/31.png") || (randImg ==　"images/44.png" )){

    $("#" +5+ "").show();
    chosenCardList.push(trumpCardFrontList[randomMathNum]);
    trumpCardFrontList.splice(randomMathNum,1);
  } else if ((randImg == "images/6.png" )||(randImg == "images/19.png" )|| (randImg ==　"images/32.png") || (randImg ==　"images/45.png" )){

    $("#" +6+ "").show();
    chosenCardList.push(trumpCardFrontList[randomMathNum]);
    trumpCardFrontList.splice(randomMathNum,1);
  } else if ((randImg == "images/7.png" )||(randImg == "images/20.png" )|| (randImg ==　"images/33.png") || (randImg ==　"images/46.png" )){

    $("#" +7+ "").show();
    chosenCardList.push(trumpCardFrontList[randomMathNum]);
    trumpCardFrontList.splice(randomMathNum,1);
  } else if ((randImg == "images/8.png" )||(randImg == "images/21.png" )|| (randImg ==　"images/34.png") || (randImg ==　"images/47.png" )){

    $("#" +8+ "").show();
    chosenCardList.push(trumpCardFrontList[randomMathNum]);
    trumpCardFrontList.splice(randomMathNum,1);
  } else if ((randImg == "images/9.png" )||(randImg == "images/22.png" )|| (randImg ==　"images/35.png") || (randImg ==　"images/48.png" )){

    $("#" +9+ "").show();
    chosenCardList.push(trumpCardFrontList[randomMathNum]);
    trumpCardFrontList.splice(randomMathNum,1);
  } else if ((randImg == "images/10.png" )||(randImg == "images/23.png" )|| (randImg ==　"images/36.png") || (randImg ==　"images/49.png" )){

    $("#" +10+ "").show();
    chosenCardList.push(trumpCardFrontList[randomMathNum]);
    trumpCardFrontList.splice(randomMathNum,1);
  } else if ((randImg == "images/11.png" )||(randImg == "images/24.png" )|| (randImg ==　"images/37.png") || (randImg ==　"images/50.png" )){

    $("#" +11+ "").show();
    chosenCardList.push(trumpCardFrontList[randomMathNum]);
    trumpCardFrontList.splice(randomMathNum,1);
  } else if ((randImg == "images/12.png" )||(randImg == "images/25.png" )|| (randImg ==　"images/38.png") || (randImg ==　"images/51.png" )){

    $("#" +12+ "").show();
    chosenCardList.push(trumpCardFrontList[randomMathNum]);
    trumpCardFrontList.splice(randomMathNum,1);
  } else if ((randImg == "images/13.png" )||(randImg == "images/26.png" )|| (randImg ==　"images/39.png") || (randImg ==　"images/52.png" )){

    $("#" +13+ "").show();
    chosenCardList.push(trumpCardFrontList[randomMathNum]);
    trumpCardFrontList.splice(randomMathNum,1);
  }

  console.log("trumpCardFrontList", trumpCardFrontList)
  console.log("chosenCardList", chosenCardList)
});

$(".nextPlayer").click(function(){

  $(".hidden2").hide();
  $(".hidden1").show();
  $("#1").hide();
  $("#2").hide();
  $("#3").hide();
  $("#4").hide();
  $("#5").hide();
  $("#6").hide();
  $("#7").hide();
  $("#8").hide();
  $("#9").hide();
  $("#10").hide();
  $("#11").hide();
  $("#12").hide();
  $("#13").hide();

  if (PlayerTurnIndex == playerList.length - 1) {
    PlayerTurnIndex = 0
  } else {
    PlayerTurnIndex = PlayerTurnIndex + 1;
  }
  $("#invokeName").text(playerList[PlayerTurnIndex]);

  console.log("PlayerTurnIndex", PlayerTurnIndex)
})

$( ".trumpBack" ).draggable ({
  stop: function(event, ui) {
    debugger;
  }
});
