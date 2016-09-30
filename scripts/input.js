function createInput(frontString,idString,value,backString){
	var line = document.createElement("p")
	document.getElementById("inputList").appendChild(line)
	line.innerHTML = frontString + ": "
	
	var inputText = document.createElement("input")
	inputText.setAttribute("type","text")
	inputText.setAttribute("class","inputText")
	inputText.setAttribute("id",idString)
	inputText.setAttribute("value",value)
	line.appendChild(inputText)
	
	line.innerHTML += " " + backString + "<br>"
}

createInput("Height, between tangent lines","height",50,"m")
