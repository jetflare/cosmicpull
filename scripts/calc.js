var atmPressure = 101325 // Pa
var operatingPressureAbs = document.getElementById("operatingPressure").value * 1e2 * 1e3 ; //bar (convert bar to Pa)
var designPressure = (operatingPressureAbs - atmPressure) * 1.1

var innerDiameter = document.getElementById("diameter").value * 1 // m
var maxAllowStress = document.getElementById("maxStress").value * 1e3 * 1e3 // (convert from N/mm^2 to Pa)
var jointEfficiency = document.getElementById("jointEfficiency").value * 1;

var thickNumer = designPressure*innerDiameter
var thickDenom1 = 2*maxAllowStress*jointEfficiency-1.2*designPressure
var thickDenom2 = 4*maxAllowStress*jointEfficiency+.8*designPressure

var thickness1 = thickNumer/thickDenom1
var thickness2 = thickNumer/thickDenom2
var minThickness = Math.max(thickness1,thickness2)
// display minThickness in mm: minThickness*1e3

var fittingFactor = document.getElementById("fittingFactor").value * 1
var meanThickness = document.getElementById("avgThick").value * 1e-3
var meanDiameter = innerDiameter + meanThickness
var height = document.getElementById("height").value * 1
var vesselWeight = 240*fittingFactor*meanDiameter*(height+.8*meanDiameter)*meanThickness*1e3

var totalWeight = vesselWeight

var nCagedLadder = 0 * 1
var cagedLadderLength = 10 * 1
var cagedLadderWeight = cagedLadderLength * 360
var totalCagedLadderWeight = cagedLadderWeight * nCagedLadder
totalWeight += totalCagedLadderWeight

var nPlainLadder = 0 * 1
var plainLadderLength = 10 * 1
var plainLadderWeight = planLadderLength * 150
var totalPlainLadderWeight = plainLadderWeight * nPlainLadder
totalWeight += totalPlainLadderWeight

var nPlates = 100 * 1
var plateArea = innerDiameter*innerDiameter*Math.PI/4
var plateWeight = plateArea * 1.2 * 1e3
var totalPlateWeight = plateWeight * nPlates
totalWeight += totalPlateWeight

var insulationDensity = 130 * 1
var insulationThickness = 75 * 1e-3
var insulationVolume = innerDiameter*height*insulationThickness*Math.PI/4
var insulationWeight = insulationVolume * insulationDensity
var doubledInsulationWeight = 2 * insulationWeight
totalWeight += doubledInsulationWeight

var result = document.createElement("p")

function appendToResult(string,shortString,whatever,unit,modifier){
	var placeholder = whatever
	if (isNaN(whatever) == false){
		placeholder *=  modifier
	}
	result.innerHTML += string + ", " + shortString + ": " + placeholder + " " + unit + "<br>"
}

appendToResult("Minimum thickness","t",minThickness,"mm",1e3)
appendToResult("Dead weight of vessel","W<sub>v</sub>",vesselWeight,"kN",1e-3)
appendToResult("Weight of plates","W<sub>p</sub>",totalPlateWeight,"kN",1e-3)
appendToResult("Weight of insulation","W<sub>i</sub>",doubledInsulationWeight,"kN",1e-3)
appendToResult("Total weight","W",totalWeight,"kN",1e-3)

//function showResult(){
	document.getElementById("resultList").appendChild(result)
//}

