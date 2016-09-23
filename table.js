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

function appendBlankRow(table){
	var dataRow = document.createElement('tr')
	table.appendChild(dataRow)
	
	var col = document.createElement('td')
	dataRow.appendChild(col)
	col.colSpan = maxCol
}

function appendToTableType3(table,array1){
	
	var arrayLength = array1.length
	
	for (i=0;i<arrayLength;i++){
		var dataRow = document.createElement('tr')
		table.appendChild(dataRow)
		
		var col = document.createElement('td')
		dataRow.appendChild(col)
		col.innerHTML = array1[i]
		
		var col = document.createElement('td')
		dataRow.appendChild(col)
		var idString = "blank" + nRow
		nRow++
		col.setAttribute("id", idString);
		col.colSpan = maxCol-1
		col.className = "centerData"
	}
}

var section1Names = ["Total gas flow","Total liquid flow"]
var section1Units = ["kg/h","kg/h"]

appendHeader(dataSheet,"Vessel Process Data")
appendToTableType1(dataSheet,section1Names,section1Units)
appendBlankRow(dataSheet)

var section2Phases = ["Gas properties","Liquid properties"]
var section2Properties = ["Operating temperature","Pressure","Density","Dynamic viscosity"]
var section2Units = ["°C","kPag","kg/m<sup>3</sup>","Ns/m<sup>2</sup>"]

appendToTableType2(dataSheet,section2Phases,section2Properties,section2Units)
appendBlankRow(dataSheet)

var section3Specs = ["Design code","Vessel classification"]
var section3Data = ["Normal Pressure Range","Normal Temperature Range","Max Operating Temperature","Design pressure","Relief valve set pressure","Hydraulic test pressure","Minimum design temperature @ pressure","Design vacuum @ temp","Gas residence time","Liquid hold-up time"]
var section3Units = ["kPag","°C","°C","kPag","kPag","kPag","°C","kPag","sec","min"]

appendHeader(dataSheet,"Construction & Materials")
appendToTableType3(dataSheet,section3Specs)
appendBlankRow(dataSheet)
appendToTableType1(dataSheet,section3Data,section3Units)
appendBlankRow(dataSheet)

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
