var getInputButton = document.createElement("button")
getInputButton.setAttribute("onclick","getInput()")
getInputButton.innerHTML="Input List"
document.getElementById("buttonList").appendChild(getInputButton)

var getTableButton = document.createElement("button")
getTableButton.setAttribute("onclick","getTable()")
getTableButton.innerHTML="Show Table"
document.getElementById("buttonList").appendChild(getTableButton)

var clearPageButton = document.createElement("button")
clearPageButton.setAttribute("onclick","clearPage()")
clearPageButton.innerHTML="Clear Page"
document.getElementById("buttonList").appendChild(clearPageButton)

function clearPage(){
	document.getElementById("resultList").innerHTML=""
	document.getElementById("inputList").innerHTML=""
	document.getElementById("dataSheetTable").innerHTML=""
}
