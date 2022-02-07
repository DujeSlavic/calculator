function backspace(){
    document.calc.result.value = document.calc.result.value.substring(0, document.calc.result.value.length - 1);
    document.calc.dolje.value = document.calc.dolje.value.substring(0, document.calc.dolje.value.length - 1);
  }

  // Determines button clicked via id
  function myFunction(id) {
    

    if(document.calc.result.value=="" && (id=="-" || id=="+" || id=="*" || id=="/")){document.calc.result.value=""; document.calc.dolje.value=""}
    
    else{
      document.calc.result.value+=id;
      document.calc.result.value = document.calc.result.value.replace("--","-");
      document.calc.result.value = document.calc.result.value.replace("++","+");
      document.calc.result.value = document.calc.result.value.replace("**","*");
      document.calc.result.value = document.calc.result.value.replace("//","/");
      document.calc.result.value = document.calc.result.value.replace("..",".");
      document.calc.result.value = document.calc.result.value.replace("-+","-");
      document.calc.result.value = document.calc.result.value.replace("-/","-");
      document.calc.result.value = document.calc.result.value.replace("-*","-");
      document.calc.result.value = document.calc.result.value.replace("+-","+");
      document.calc.result.value = document.calc.result.value.replace("+*","+");
      document.calc.result.value = document.calc.result.value.replace("+/","+");
      document.calc.result.value = document.calc.result.value.replace("/-","/");
      document.calc.result.value = document.calc.result.value.replace("/+","/");
      document.calc.result.value = document.calc.result.value.replace("/*","/");
      document.calc.result.value = document.calc.result.value.replace("*-","*");
      document.calc.result.value = document.calc.result.value.replace("*+","*");
      document.calc.result.value = document.calc.result.value.replace("*/","*");

      try {
        var input = eval(document.calc.result.value);
        document.calc.dolje.value=input;
      } catch(err){
          document.calc.dolje.value=document.calc.dolje.value;
        }
      
    }
  }

  // Clears calculator input screen
  function clearScreen() {
    document.calc.result.value="";
    document.calc.dolje.value="";
  }

  // Calculates input values
  function calculate() {
    try {
      if(eval(document.calc.result.value)){
      var input = eval(document.calc.result.value);
      document.calc.result.value=input;}
      else{
        document.calc.result.value="";
        document.calc.dolje.value=""}
    } catch(err){
        document.calc.result.value="";
      }
  }