var atmPressure = 101325 // Pa
var operatingPressureAbs = document.getElementById("operatingPressure").value * 1e2 * 1e3 ; //bar (convert bar to Pa)
var designPressure = (operatingPressureAbs - atmPressure) * 1.1

var innerDiameter = document.getElementById("diameter").value // m
var maxAllowStress = document.getElementById("maxStress").value * 1e3 * 1e3 // (convert from N/mm^2 to Pa)
var jointEfficiency = document.getElementById("jointEfficiency").value;

var thickNumer = designPressure*innerDiameter
var thickDenom1 = 2*maxAllowStress*jointEfficiency-1.2*designPressure
var thickDenom2 = 4*maxAllowStress*jointEfficiency+.8*designPressure

var thickness1 = thickNumer/thickDenom1
var thickness2 = thickNumer/thickDenom2
var minThickness = Math.max(thickness1,thickness2)
// display minThickness in mm: minThickness*1e3

var fittingFactor = 1.15
var meanThickness = 14 * 1e-3
var meanDiameter = innerDiameter + meanThickness
var height = document.getElementById("height").value
var vesselWeight = 240*fittingFactor*meanDiameter*(height+.8*meanDiameter)*meanThickness

var result = document.createElement("p")

function appendToResult(string,shortString,whatever,unit,modifier){
	var placeholder = whatever
	if (isNaN(whatever) == false){
		placeholder *=  modifier
	}
	result.innerHTML += string + ", " + shortString + ": " + placeholder + " " + unit + "<br>"
}

appendToResult("Minimum thickness","t",minThickness,"mm",1e3)
//appendToResult("Dead weight of vessel","W<sub>v</sub>",vesselWeight,"kN",1e-3)

appendToResult("Mean diameter","D<sub>m</sub>",innerDiameter,"m",1)

//function showResult(){
	document.getElementById("resultList").appendChild(result)
//}

