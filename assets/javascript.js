 var timer = 30,
        randomquest = [],
        qstn = 0,
        ans = 0,
        corrans,
        corrcounter = 0,
        inccounter = 0,
        rdmquest,
        intervalId;

     var quest1 = {
      question: "Which soccer player played for both team Barcelona & Real Madrid?", 

      answer1: "Figo",

      answer2: "Zidane",

      answer3: "Beckham",

      answer4: "Ronaldinho",

      correctanswer: "Figo"
    };

    var quest2 = {
      question: "Which soccer player retired after Germany 2006 World Cup?", 

      answer1: "Figo",

      answer2: "Zidane",

      answer3: "Beckham",

      answer4: "Ronaldinho",

      correctanswer: "Zidane"
    };

    var quest3 = {
      question: "Which soccer player became a talent scout after the end of his career?", 

      answer1: "Figo",

      answer2: "Zidane",

      answer3: "Beckham",

      answer4: "Ronaldinho",

      correctanswer: "Ronaldinho"
    };

    var quest4 = {
      question: "Which soccer player became head coach of its previous team?", 

      answer1: "Figo",

      answer2: "Zidane",

      answer3: "Beckham",

      answer4: "Ronaldinho",

      correctanswer: "Zidane"
    };

    function run() {
      console.log("timer in run func", timer);
      if (timer == 30)
      {
      intervalId = setInterval(decrement, 1000);
      }
      else
      {
        timer = 30;
      }
    }

    function decrement() {

      //  Decrease number by one.
      timer--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + timer + "</h2>");


      //  Once number hits zero...
      if (timer === 0) {
        inccounter++;
        console.log("timer in if decr before resolution", timer);
        //  ...run the stop function.
        stop();
        //  Alert the user that time is up.
        alert("Time Up!");
        nextq();
        console.log("timer after res", timer);
        run();
      }
    }

    function stop() {
      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    function nextq() {
          qstn++;
          if(qstn <= (randomquest.length-1))
          {
          loadquest();
          run();
          }
          else
          {
            alert("Correct: " + corrcounter);
            alert("Incorrect: " + inccounter)
          }
    }

    function loadquest(){

    randomquest = ["quest1","quest2","quest3","quest4"];

    console.log(randomquest[qstn]);
    rdmquest = randomquest[qstn];
    console.log(rdmquest);


      switch (rdmquest) {
      
      case "quest1" :
      {
        $("#question").html(quest1.question);
        $("#answer1").html(quest1.answer1);
        $("#answer2").html(quest1.answer2);
        $("#answer3").html(quest1.answer3);
        $("#answer4").html(quest1.answer4);
        corrans = quest1.correctanswer;
        break;
      }
      case "quest2" :
      {
        $("#question").html(quest2.question);
        $("#answer1").html(quest2.answer1);
        $("#answer2").html(quest2.answer2);
        $("#answer3").html(quest2.answer3);
        $("#answer4").html(quest2.answer4);
        corrans = quest2.correctanswer;
        break;
      }
      case "quest3" :
      {
        $("#question").html(quest3.question);
        $("#answer1").html(quest3.answer1);
        $("#answer2").html(quest3.answer2);
        $("#answer3").html(quest3.answer3);
        $("#answer4").html(quest3.answer4);
        corrans = quest3.correctanswer;
        break;
      }
      case "quest4" :
      {
        $("#question").html(quest4.question);
        $("#answer1").html(quest4.answer1);
        $("#answer2").html(quest4.answer2);
        $("#answer3").html(quest4.answer3);
        $("#answer4").html(quest4.answer4);
        corrans = quest4.correctanswer;
        break;
      }
    }
    }

    loadquest();
    run();

    $(".answer").on("click", function(){
      ans = $(this).html();
      console.log(ans);
      console.log(corrans);

      if (ans === corrans)
      {
          corrcounter++;
          console.log("right",corrcounter);
          nextq();

      }
      else
      {
          inccounter++;
          console.log("wrong:",inccounter);
          nextq();
      }
    });