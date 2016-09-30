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
var plainLadderWeight = plainLadderLength * 150
var totalPlainLadderWeight = plainLadderWeight * nPlainLadder
totalWeight += totalPlainLadderWeight

var nPlates = document.getElementById("plateNumber").value * 1
var plateArea = innerDiameter*innerDiameter*Math.PI/4
var plateWeight = plateArea * 1.2 * 1e3
var totalPlateWeight = plateWeight * nPlates
totalWeight += totalPlateWeight

var gravityConstant = 9.81
var insulationDensity = document.getElementById("insulationDensity").value * 1
var insulationThickness = document.getElementById("insulationThickness").value * 1e-3
var insulationVolume = innerDiameter*height*insulationThickness*Math.PI
var insulationWeight = insulationVolume * insulationDensity * gravityConstant
var doubledInsulationWeight = 2 * insulationWeight
totalWeight += doubledInsulationWeight

var dynamicWindPressure = document.getElementById("windPress").value * 1
var newMeanDiameter = innerDiameter + 2 * (meanThickness + insulationThickness)
var windLoading = dynamicWindPressure * newMeanDiameter
var bendingMoment = windLoading/2*height*height

var maxThickness = document.getElementById("maxThick").value * 1e-3
var circPressStress = designPressure*innerDiameter/(2*maxThickness)
var longPressStress = circPressStress/2

var deadWeightStress = totalWeight/(Math.PI*maxThickness*(innerDiameter + maxThickness))

var outerDiameter = innerDiameter + 2 * maxThickness
var secondMomentOfArea = Math.PI/64*(Math.pow(outerDiameter,4) - Math.pow(innerDiameter,4))
var bendingStress = bendingMoment/secondMomentOfArea*(innerDiameter/2+maxThickness)

var upwindLongStress = longPressStress - deadWeightStress + bendingStress
var downwindLongStress = longPressStress - deadWeightStress - bendingStress

var critBuckleStress = 2e4*maxThickness/outerDiameter*1e6

var result = document.createElement("p")

function appendToResult(string,shortString,whatever,unit,modifier){
	var placeholder = whatever
	if (isNaN(whatever) == false){
		placeholder *=  modifier
	}
	result.innerHTML += string + ", " + shortString + ": " + placeholder + " " + unit + "<br>"
}

appendToResult("Minimum thickness","t",minThickness,"mm",1e3)

appendToResult("<br>Dead weight of vessel","W<sub>v</sub>",vesselWeight,"kN",1e-3)
appendToResult("Weight of plates","W<sub>p</sub>",totalPlateWeight,"kN",1e-3)
appendToResult("Weight of insulation","W<sub>i</sub>",doubledInsulationWeight,"kN",1e-3)
appendToResult("Total weight","W",totalWeight,"kN",1e-3)

appendToResult("<br>Bending moment at bottom tangent line","M<sub>x</sub>",bendingMoment,"Nm",1)

appendToResult("<br>Longitudinal pressure stress","σ<sub>L</sub>",longPressStress,"N/mm<sup>2</sup>",1e-6)
appendToResult("Circumferential pressure stress","σ<sub>h</sub>",circPressStress,"N/mm<sup>2</sup>",1e-6)

appendToResult("<br>Dead weight stress","σ<sub>w</sub>",deadWeightStress,"N/mm<sup>2</sup> (compressive)",1e-6)

appendToResult("<br>Outer diamter","D<sub>o</sub>",outerDiameter,"mm",1e3)
appendToResult("Second moment of area of vessel","I<sub>v</sub>",secondMomentOfArea,"mm<sup>4</sup>",1e12)
appendToResult("Bending stress","σ<sub>b</sub>",bendingStress,"N/mm<sup>2</sup> (plus minus)",1e-6)

appendToResult("<br>Upwind longitudinal stress","σ<sub>z</sub> (upwind)",upwindLongStress,"N/mm<sup>2</sup>",1e-6)
appendToResult("Downwind longitudinal stress","σ<sub>z</sub> (downwind)",downwindLongStress,"N/mm<sup>2</sup>",1e-6)

appendToResult("<br>Critical buckling stress","σ<sub>c</sub>",critBuckleStress,"N/mm<sup>2</sup>",1e-6)

//function showResult(){
	document.getElementById("resultList").appendChild(result)
//}

