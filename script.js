function highContrast(){
  var HCMode = document.getElementById("footerButton");

  if(HCMode.value=="on"){
      document.getElementById("mainContainer").style.color = "yellow";

      document.getElementById("contentOne").style.backgroundColor = "black";
      document.getElementById("contentTwo").style.backgroundColor = "black";
      document.getElementById("contentThree").style.backgroundColor = "black";
      document.getElementById("contentFour").style.backgroundColor = "black";

      HCMode.value="off";
    } else if(HCMode.value=="off"){
      document.getElementById("mainContainer").style.color = "black";

      document.getElementById("contentOne").style.backgroundColor = "#FEF3CD";
      document.getElementById("contentTwo").style.backgroundColor = "#477CA2";
      document.getElementById("contentThree").style.backgroundColor = "#F8E47E";
      document.getElementById("contentFour").style.backgroundColor = "#F8E47E";

      HCMode.value="on";
    }
  }
