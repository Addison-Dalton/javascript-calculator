$(document).ready(function(){
  //window.focus();
  var equationString = "";
  //remove focus from buttons after mouse release
  $(".btn").mouseup(function(){
    $(this).blur();
  })
  //when a button is clicked, call function to append it's value to the calc display string
  $(".btn-primary").on("click",function(){
    if($("#current-result").text().length < 16){
      appendToDisplay($(this).html());
    }else if($(this).html() === "C" || $(this).html() === "DEL" ||$(this).html() === "="){
      appendToDisplay($(this).html());
    }else{
      $("#calculator").addClass("red-shadow");
      $("#calculator").effect("shake", 50, function(){
      $("#calculator").removeClass("red-shadow");
      });
    }
  });
  
  //keyboard press input
  $(document).keydown(function(keyPressed){
    var keyPressNum = keyPressed.which;
    console.log(keyPressNum);
    if($("#current-result").text().length < 16){
      if(keyPressNum === 67){
        $("#c-btn").addClass("grey-background");
        appendToDisplay("C");
        setTimeout(function(){
          $("#c-btn").removeClass("grey-background");
        }, 150);
      }else if(keyPressNum === 53){
        if(keyPressed.shiftKey){
          appendToDisplay("%");
          $("#percent-btn").addClass("grey-background");
          setTimeout(function(){
            $("#percent-btn").removeClass("grey-background");
        }, 150);
        }else{
          appendToDisplay("5");
          $("#5-btn").addClass("grey-background");
          setTimeout(function(){
            $("#5-btn").removeClass("grey-background");
        }, 150);
        }
      }else if(keyPressNum === 46){
        appendToDisplay("DEL");
        $("#del-btn").addClass("grey-background");
        setTimeout(function(){
          $("#del-btn").removeClass("grey-background");
        }, 150);
      }else if(keyPressNum === 55 || keyPressNum === 103){
        appendToDisplay("7");
        $("#7-btn").addClass("grey-background");
        setTimeout(function(){
          $("#7-btn").removeClass("grey-background");
        }, 150);
      }else if(keyPressNum === 56 || keyPressNum === 104){
        if(keyPressNum === 56){
          if(keyPressed.shiftKey){
            appendToDisplay("*");
            $("#multi-btn").addClass("grey-background");
            setTimeout(function(){
              $("#multi-btn").removeClass("grey-background");
            }, 150);
          }else{
            appendToDisplay("8")
            $("#8-btn").addClass("grey-background");
            setTimeout(function(){
              $("#8-btn").removeClass("grey-background");
            }, 150);
          }
        }else{
          appendToDisplay("8");
          $("#8-btn").addClass("grey-background");
          setTimeout(function(){
            $("#8-btn").removeClass("grey-background");
          }, 150);
        }
      }else if(keyPressNum === 57 || keyPressNum === 105){
        appendToDisplay("9");
        $("#9-btn").addClass("grey-background");
        setTimeout(function(){
          $("#9-btn").removeClass("grey-background");
        }, 150);
      }else if(keyPressNum === 111 || keyPressNum === 191){
        appendToDisplay("&#247");
        $("#divide-btn").addClass("grey-background");
        setTimeout(function(){
          $("#divide-btn").removeClass("grey-background");
        }, 150);
      }else if(keyPressNum === 52 || keyPressNum === 100){
        appendToDisplay("4")
        $("#4-btn").addClass("grey-background");
        setTimeout(function(){
          $("#4-btn").removeClass("grey-background");
        }, 150);
      }else if(keyPressNum === 53 || keyPressNum === 101){
        appendToDisplay("5")
        $("#5-btn").addClass("grey-background");
        setTimeout(function(){
          $("#5-btn").removeClass("grey-background");
        }, 150);
      }else if(keyPressNum === 54 || keyPressNum === 102){
        appendToDisplay("6")
        $("#6-btn").addClass("grey-background");
        setTimeout(function(){
          $("#6-btn").removeClass("grey-background");
        }, 150);
      }else if(keyPressNum === 56 || keyPressNum === 106){
        if(keyPressNum === 56){
          if(keyPressed.shiftKey){
            appendToDisplay("*");
            $("#multi-btn").addClass("grey-background");
            setTimeout(function(){
              $("#multi-btn").removeClass("grey-background");
            }, 150);
          }else{
            appendToDisplay("8")
            $("#8-btn").addClass("grey-background");
            setTimeout(function(){
              $("#8-btn").removeClass("grey-background");
            }, 150);
          }
        }else{
          appendToDisplay("*");
          $("#multi-btn").addClass("grey-background");
          setTimeout(function(){
            $("#multi-btn").removeClass("grey-background");
          }, 150);
        }
      }else if(keyPressNum === 49 || keyPressNum === 97){
        appendToDisplay("1");
        $("#1-btn").addClass("grey-background");
        setTimeout(function(){
          $("#1-btn").removeClass("grey-background");
        }, 150);
      }else if(keyPressNum === 50 || keyPressNum === 98){
        appendToDisplay("2");
        $("#2-btn").addClass("grey-background");
        setTimeout(function(){
          $("#2-btn").removeClass("grey-background");
        }, 150);
      }else if(keyPressNum === 51 || keyPressNum === 99){
        appendToDisplay("3");
        $("#3-btn").addClass("grey-background");
        setTimeout(function(){
          $("#3-btn").removeClass("grey-background");
        }, 150);
      }else if(keyPressNum === 109 || keyPressNum === 189){
        appendToDisplay("-");
        $("#minus-btn").addClass("grey-background");
        setTimeout(function(){
          $("#minus-btn").removeClass("grey-background");
        }, 150);
      }else if(keyPressNum === 48 || keyPressNum === 96){
        appendToDisplay("0");
        $("#0-btn").addClass("grey-background");
        setTimeout(function(){
          $("#0-btn").removeClass("grey-background");
        }, 150);
      }else if(keyPressNum === 110 || keyPressNum === 190){
        appendToDisplay(".");
        $("#dec-btn").addClass("grey-background");
        setTimeout(function(){
          $("#dec-btn").removeClass("grey-background");
        }, 150);
      }else if(keyPressNum === 13){
        appendToDisplay("=");
        $("#equal-btn").addClass("grey-background");
        setTimeout(function(){
          $("#equal-btn").removeClass("grey-background");
        }, 150);
      }else if(keyPressNum === 107 || keyPressNum === 187){
        appendToDisplay("+");
        $("#plus-btn").addClass("grey-background");
        setTimeout(function(){
          $("#plus-btn").removeClass("grey-background");
        }, 150);
      }
    }else if(keyPressNum === 46 || keyPressNum === 67){
      if(keyPressNum === 46){
        appendToDisplay("DEL");
        $("#del-btn").addClass("grey-background");
        setTimeout(function(){
          $("#del-btn").removeClass("grey-background");
        }, 150);
      }else{
        appendToDisplay("C");
        $("#c-btn").addClass("grey-background");
        setTimeout(function(){
          $("#c-btn").removeClass("grey-background");
        }, 150);
      }
      //switch for which keypress
    }else{
      $("#calculator").addClass("red-shadow");
      $("#calculator").effect("shake", 50, function(){
      $("#calculator").removeClass("red-shadow");
      });
    }
  })
  //append number or operator to display function
  function appendToDisplay(val){
    var lastNumRe = /\d+$|\.\d+$/;
    var lastNumMinusRe = /-$/;
    var endingOperationRe = /(\d)?(\*|\/|\+|-)+$/;
    var endingDisplayOpRe = /(\u00D7|\u00f7|\+|-)$/;
    //var plusMinusRe = /(\d|%?)(\+|-)(?=(\d+$|\.\d+$))/;
    var plusMinusRe = /(\d)?(\/|\*|-|\+)?(\d+$|\.\d+$)/;
    var plusMinusDisplayRe =/(\d)?(\u00D7|\u00f7|\+|-)?(\d+$|\.\d+$)/;
    var decimalRe = /(\.(\d+)?)$/;
    //if c is pressed, clear equation and result
    if(val === "C"){
      equationString="";
      $("#total-equation").text("");
      $("#current-result").text("");
      //add a minus infront of last number pressed or remove it if already there
    }else if(val === "+/-"){
      if(plusMinusRe.test(equationString)){
        var reMatch = equationString.match(plusMinusRe);
 
        if(reMatch[2] === undefined){
          equationString = equationString.replace(plusMinusRe,"-$1$3");
          var tempStr = $("#current-result").text();
          tempStr = tempStr.replace(plusMinusDisplayRe,"-$1$3");
          $("#current-result").text(tempStr);
        }else if(reMatch[1] != undefined){
          if(reMatch[2] === "+"){
            equationString = equationString.replace(plusMinusRe,"$1-$3");
            
            var tempStr = $("#current-result").text();
            tempStr = tempStr.replace(plusMinusDisplayRe,"$1-$3");
            $("#current-result").text(tempStr);
          }else if(reMatch[2] === "-"){
            equationString = equationString.replace(plusMinusRe,"$1+$3");
            
            var tempStr = $("#current-result").text();
            tempStr = tempStr.replace(plusMinusDisplayRe,"$1+$3");
            $("#current-result").text(tempStr);
          }else{
            equationString = equationString.replace(plusMinusRe,"$1$2-$3")
            
            var tempStr = $("#current-result").text();
            tempStr = tempStr.replace(plusMinusDisplayRe,"$1$2-$3");
            $("#current-result").text(tempStr);
          }
        }else{
          equationString = equationString.replace(plusMinusRe,"$3");
          
          var tempStr = $("#current-result").text();
          tempStr = tempStr.replace(plusMinusDisplayRe,"$3");
          $("#current-result").text(tempStr);
        }
      };
      //convert the number infront of the percentage to a decimal (remove two zero places)
    }else if(val === "%"){
      if($("#current-result").text().endsWith("%") === false){
        var percentage = equationString.match(lastNumRe);
        var tempNewSubString = percentage/100;
        equationString =equationString.replace(lastNumRe,tempNewSubString);
        $("#current-result").text($("#current-result").text() + val);
      }
      //remove previous character
    }else if(val === "DEL"){
      console.log(equationString);
      equationString = equationString.toString(10).slice(0,-1);
      console.log(equationString);
      //console.log(equationString);
      var tempString = $("#current-result").text();
      $("#current-result").text(tempString.slice(0,-1));
      //move the  equation(current-result), to the total equation h3 tag, change current-result to the result of the equation
    }else if(val === "="){
      var result = math.eval(equationString);
      console.log(result);
      equationString = result;
      $("#total-equation").text($("#current-result").text());
      $("#current-result").text(result);
      
      //division
    }else if(val === "\u00f7"){
      if(endingOperationRe.test(equationString)){
        var endingOperation = equationString.match(endingOperationRe);
        console.log(endingOperation);
        endingOperation = endingOperation[2];
        console.log(endingOperation);

        if(endingOperation === "/" || endingOperation === "-"){
          //do nothing, don't want mutliple "/"symbols
          //also do not want to be able to add more
          //division symbols after a minus
        }else{
          equationString= equationString.replace(endingOperationRe,"$1/");
          var tempStr = $("#current-result").text();
          tempStr = tempStr.replace(endingDisplayOpRe,val);
          $("#current-result").text(tempStr);
        }
      }else{
        equationString += "/";
        $("#current-result").text($("#current-result").text() + val);
      }
     
      //multiplication
    }else if(val === "\u00D7"){
      if(endingOperationRe.test(equationString)){
        var endingOperation = equationString.match(endingOperationRe);
        endingOperation = endingOperation[2];
        if(endingOperation === "*" || endingOperation === "-"){
          //do nothing, don't want mutliple "*"symbols
          //also do not want to be able to add more
          //"*" symbols after a minus
        }else{
          equationString= equationString.replace(endingOperationRe,"$1*");
          var tempStr = $("#current-result").text();
          tempStr = tempStr.replace(endingDisplayOpRe,val);
          $("#current-result").text(tempStr);
        }
      }else{
        equationString += "*"
        $("#current-result").text($("#current-result").text() + val);
      }
      
      //addition
    }else if(val === "+"){
      if(endingOperationRe.test(equationString)){
        var endingOperation = equationString.match(endingOperationRe);
        endingOperation = endingOperation[2];
        if(endingOperation === "+" || endingOperation === "-"){
          //do nothing, don't want mutliple "*"symbols
          //also do not want to be able to add more
          //"+" symbols after a minus
        }else{
          equationString= equationString.replace(endingOperationRe,"$1+");
          var tempStr = $("#current-result").text();
          tempStr = tempStr.replace(endingDisplayOpRe,val);
          $("#current-result").text(tempStr);
        }
      }else{
        equationString+=val;
        $("#current-result").text($("#current-result").text() + val);
      }
    //display all other buttons not listed above  
    }else if(val === "."){
      if(decimalRe.test(equationString)){
        //do nothing, don't add multiple decimals without
        //operations between them
      }else{
        equationString += val;
        $("#current-result").text($("#current-result").text() + val);
      }
    }else{
      equationString += val;
      $("#current-result").text($("#current-result").text() + val);
    }
  };
});//document ready end