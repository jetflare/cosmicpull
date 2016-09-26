var atmPressure = 101325 // Pa
var operatingPressureAbs = 10 * 1e2 * 1e3 ; //bar (convert bar to Pa)
var designPressure = (operatingPressure - atmPressure) * 1.1

var innerDiameter = 2 // m
var maxAllowStress = 135 * 1e3 * 1e3 // (convert from N/mm^2 to Pa)
var jointEfficiency = 1;

var thickNumer = designPressure*innerDiameter
var thickDenom1 = 2*maxAllowStress*jointEfficiency-1.2*designPressure
var thickDenom2 = 4*maxAllowStress*jointEfficiency+.8*designPressure

var thickness1 = thickNumer/thickDenom1
var thickness2 = thickNumer/thickDenom2
var minThickness = Math.max(thickness1,thickness2)
// display minThickness in mm: minThickness*1e-3

