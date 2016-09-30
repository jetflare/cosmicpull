var clearPageButton = document.createElement("button")
clearPageButton.setAttribute("onclick","clearPage()")
document.getElementById("buttonList").appendChild(clearPageButton)

var getTableButton = document.createElement("button")
getTableButton.setAttribute("onclick","getTable()")
document.getElementById("buttonList").appendChild(getTableButton)

function clearPage(){
	document.getElementById("resultList").innerHTML=""
	document.getElementById("inputList").innerHTML=""
	document.getElementById("dataSheetTable").innerHTML=""
}
