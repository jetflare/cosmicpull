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

var result1 = document.createElement("p")
result1.innerHTML=atmPressure
var meh = document.getElementById(inputList)
meh.appendChild(result1)

