function convert(input) {
  var output = "";
  for(var i = 0; i < input.split("\n").length; i++) {     
    var line = input.split("\n")[i];
    
    if(line.includes("CREATE TABLE")) {
      continue;
    }
    if(line.includes("PRIMARY KEY")) {
      break;
    }
    
    var firstBacktick = line.indexOf('`');
    var secondBacktick = line.indexOf('`', firstBacktick + 1);
    var name = line.slice(firstBacktick + 1, secondBacktick);
    var type = line.slice(secondBacktick + 2, line.length - 1);
    output += "\"" + name + "\" => \"" + type + "\",\n";
  }
  return output;
}

  $("#work").click(function() {
    var input = $("#input").val();
    var output = convert(input);
    $("#output").val(output);
  })