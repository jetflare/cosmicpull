function createInput(frontString,idString,value,backString){
	var line = document.createElement("p")
	document.getElementById("inputList").appendChild(line)
	line.innerHTML = frontString + ": <input type=<q>text</q> class=<q>inputText</q> id=<q>"
	line += idString + "</q> value=<q>"
	line += value + "</q>> " + backString + "<br>"
}

createInput("Height, between tangent lines","height",50,"m")
