var init = function(){
  sessionStorage.society = 4;
  sessionStorage.environment = 4;
  sessionStorage.economy = 4;
}

var changeSociety = function(value){
  value = Number(value);
  sessionStorage.society = Number(sessionStorage.getItem("society")) + value;
}

var changeEnvironment = function(value){
  value = Number(value);
  sessionStorage.environment = Number(sessionStorage.getItem("environment")) + value;
}

var changeEconomy = function(value){
  value = Number(value);
  sessionStorage.economy = Number(sessionStorage.getItem("economy")) + value;
}

var endGame = function(value){
  var text = "";
  text += (alertSociety() + "\n");
  text += (alertEnvironment() + "\n");
  text += (alertEconomy() + "\n");
  alert(text);
}

var alertSociety = function(){
  var society = sessionStorage.getItem("society");
  if(society <= 2){
    return "unfortunately your decisions have resulted in a general hatred from the community"
  } else if (society == 4){
    return "society is content; your decisions have not affected them"
  } else {
    return "the community seems to have actually gotten happier with your decisions"
  }
}

var alertEnvironment = function(){
  var environment = sessionStorage.getItem("environment");
  if(environment <= 2){
    return "ever heard of the term environmental collapse; nice going"
  } else if (environment == 4){
    return "the environment appears unchanged"
  } else {
    return "forests are regrowing, waters are clearing, and birds are returning"
  }
}

var alertEconomy = function(){
  var economy = sessionStorage.getItem("economy");
  if(economy <= 2){
    return "the town is basically a ghost town"
  } else if (economy == 4){
    return "economy is stable"
  } else {
    return "investments are pouring into the city"
  }
}
