var clearPageButton = document.createElement("button")
clearPage.setAttribute("onclick","clearPage()")

function clearPage(){
	document.getElementById("resultList").innerHTML=""
	document.getElementById("inputList").innerHTML=""
}
