var dataSheet = document.createElement('table')

var maxCol = 4

var nRow = 1

function appendHeader(table,string){
	var headerRow = document.createElement('tr')
	headerRow.className = "tableHeader"
	table.appendChild(headerRow)
	
	var headerRowText = document.createElement('td')
	headerRowText.innerHTML = string
	headerRowText.colSpan = maxCol
	headerRow.appendChild(headerRowText)
}

function appendToTableType1(table,array1,array2){
	
	var arrayLength = array1.length
	
	for (i=0;i<arrayLength;i++){
		var dataRow = document.createElement('tr')
		table.appendChild(dataRow)
		
		var col = document.createElement('td')
		dataRow.appendChild(col)
		col.innerHTML = array1[i]
		col.colSpan = 2
		
		var col = document.createElement('td')
		dataRow.appendChild(col)
		var idString = "blank" + nRow
		nRow++
		col.setAttribute("id", idString);
		
		var col = document.createElement('td')
		dataRow.appendChild(col)
		col.innerHTML = array2[i]
	}
}

function appendToTableType2(table,array0,array1,array2){
	
	var array0Length = array0.length
	var array2Length = array2.length
	
	for (i=0;i<array0Length;i++){
		var dataRow
		dataRow = document.createElement('tr')
		table.appendChild(dataRow)
		
		var col = document.createElement('td')
		dataRow.appendChild(col)
		col.innerHTML = array0[i]
		col.rowSpan = array2Length
		col.className = "tableHeader"
		
		for (j=0;j<array2Length;j++){
			if (j>0){
				dataRow = document.createElement('tr')
				table.appendChild(dataRow)
			}
			var col = document.createElement('td')
			dataRow.appendChild(col)
			col.innerHTML = array1[j]
			
			var col = document.createElement('td')
			dataRow.appendChild(col)
			var idString = "blank" + nRow
			nRow++
			col.setAttribute("id", idString);
			
			var col = document.createElement('td')
			dataRow.appendChild(col)
			col.innerHTML = array2[j]
		}
	}
}

function appendToTableType3(table,array1){
	
	var arrayLength = array1.length
	
	for (i=0;i<arrayLength;i++){
		var dataRow = document.createElement('tr')
		table.appendChild(dataRow)
		
		var col = document.createElement('td')
		dataRow.appendChild(col)
		col.innerHTML = array1[i]
		col.colSpan = 2
		
		var col = document.createElement('td')
		dataRow.appendChild(col)
		var idString = "blank" + nRow
		nRow++
		col.setAttribute("id", idString);
		col.colSpan = 2
		col.className = "centerData"
	}
}

function appendBlankRow(table){
	var dataRow = document.createElement('tr')
	table.appendChild(dataRow)
	
	var col = document.createElement('td')
	dataRow.appendChild(col)
	col.colSpan = maxCol
}

var section1Header = "Vessel Process Data"
var section1Names = ["Total gas flow","Total liquid flow"]
var section1Units = ["kg/h","kg/h"]

appendHeader(dataSheet,section1Header)
appendToTableType1(dataSheet,section1Names,section1Units)
appendBlankRow(dataSheet)

var section2Phases = ["Gas properties","Liquid properties"]
var section2Properties = ["Operating temperature","Pressure","Density","Dynamic viscosity"]
var section2Units = ["°C","kPag","kg/m<sup>3</sup>","Ns/m<sup>2</sup>"]

appendToTableType2(dataSheet,section2Phases,section2Properties,section2Units)
appendBlankRow(dataSheet)

var section3Header = "Construction & Materials"
var section3Specs = ["Design code","Vessel classification"]
var section3Data = ["Normal Pressure Range","Normal Temperature Range","Max Operating Temperature","Design pressure","Relief valve set pressure","Hydraulic test pressure","Minimum design temperature @ pressure","Design vacuum @ temp","Gas residence time","Liquid hold-up time"]
var section3Units = ["kPag","°C","°C","kPag","kPag","kPag","°C","kPag","sec","min"]

appendHeader(dataSheet,section3Header)
appendToTableType3(dataSheet,section3Specs)
appendBlankRow(dataSheet)
appendToTableType1(dataSheet,section3Data,section3Units)
appendBlankRow(dataSheet)

var section4Header = "Internals"
var section4Specs = ["Demister pad thickness"]
var section4Units = ["mm"]

appendHeader(dataSheet,section4Header)
appendToTableType1(dataSheet,section4Specs,section4Units)
appendBlankRow(dataSheet)

var section5Header = "Materials for construction"
var section5Specs = ["Corrosion allowance (shell)","Corrosion allowance (heads)","Insulation Hot and Cold"]
var section5Units = ["mm","mm","mm"]

appendHeader(dataSheet,section5Header)
appendToTableType1(dataSheet,section5Specs,section5Units)

var section6Specs = ["material for construction of shell","material for construction of demister pad"]
appendToTableType3(dataSheet,section6Specs)

document.getElementById('dataSheetTable').appendChild(dataSheet)

document.getElementById('blank1').innerHTML="D13"//"D13"
document.getElementById('blank2').innerHTML="D14"//"D14"
document.getElementById('blank3').innerHTML="D16"//"D16"
document.getElementById('blank4').innerHTML="D17"//"D17"
document.getElementById('blank5').innerHTML="D18"//"D18"
document.getElementById('blank6').innerHTML="D19"//"D19"
document.getElementById('blank7').innerHTML="D20"//"D20"
document.getElementById('blank8').innerHTML="D21"//"D21"
document.getElementById('blank9').innerHTML="D22"//"D22"
document.getElementById('blank10').innerHTML="D23"//"D23"
document.getElementById('blank11').innerHTML="D26"//"D26"
document.getElementById('blank12').innerHTML="D27"//"D27"
document.getElementById('blank13').innerHTML="D29"//"D29"
document.getElementById('blank14').innerHTML="D30"//"D30"
document.getElementById('blank15').innerHTML="D31"//"D31"
document.getElementById('blank16').innerHTML="D32"//"D32"
document.getElementById('blank17').innerHTML="D33"//"D33"
document.getElementById('blank18').innerHTML="D34"//"D34"
document.getElementById('blank19').innerHTML="D35"//"D35"
document.getElementById('blank20').innerHTML="D36"//"D36"
document.getElementById('blank21').innerHTML="D37"//"D37"
document.getElementById('blank22').innerHTML="D38"//"D38"
document.getElementById('blank23').innerHTML="D41"//"D41"
document.getElementById('blank24').innerHTML="D42"//"D42"
document.getElementById('blank25').innerHTML="D45"//"D45"
document.getElementById('blank26').innerHTML="D46"//"D46"
document.getElementById('blank27').innerHTML="D47"//"D47"
document.getElementById('blank28').innerHTML="D48"//"D48"
document.getElementById('blank29').innerHTML="D49"//"D49"
