var dataSheet = document.createElement('table')

var dataSheetHeader1 = document.createElement('tr')
dataSheetHeader1.className = "tableHeader"
dataSheet.appendChild(dataSheetHeader1)

var maxCol = 4

var dataSheetHeaderVPD = document.createElement('td')
dataSheetHeaderVPD.innerHTML = "Vessel Process Data"
dataSheetHeaderVPD.colSpan = maxCol
dataSheetHeader1.appendChild(dataSheetHeaderVPD)

var section1Names = ["Total gas flow","Total liquid flow"]
var section1Units = ["kg/h","kg/h"]

var section2Phases = ["Gas properties","Liquid properties"]
var section2Properties = ["Operating temperature","Pressure","Density","Dynamic viscosity"]
var section2Units = ["°C","kPag","kg/m<sup>3</sup>","Ns/m<sup>2</sup>"]

var nRow = 1

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

appendToTableType1(dataSheet,section1Names,section1Units)
appendBlankRow(dataSheet)
appendToTableType2(dataSheet,section2Phases,section2Names,section2Units)

document.getElementById('dataSheetTable').appendChild(dataSheet)

document.getElementById('blank1').innerHTML="D13"//"D13"
document.getElementById('blank2').innerHTML="D14"//"D14"
