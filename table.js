var dataSheet = document.createElement('table')

var dataSheetHeader1 = document.createElement('tr')
dataSheetHeader1.className = "tableHeader"
dataSheet.appendChild(dataSheetHeader1)

var dataSheetHeaderVPD = document.createElement('td')
dataSheetHeaderVPD.innerHTML = "Vessel Process Data"
dataSheetHeaderVPD.colSpan = 4
dataSheetHeader1.appendChild(dataSheetHeaderVPD)

var section1Names = ["Total gas flow","Total liquid flow"]
var section1Units = ["kg/h","kg/h"]

var nRow = 1

function appendToTableType1(table,array1,array2){
	
	var arrayLength = array1.length
	
	for (i=0;i<arrayLength;i++){
		var dataRow = document.createElement('tr')
		table.appendChild(dataRow)
		
		var col = document.createElement('td')
		dataRow.appendChild(col)
		col.innerHTML = array1[index]
		col.colSpan = 2
		
		var col = document.createElement('td')
		dataRow.appendChild(col)
		var idString = "blank" + nRow
		nRow++
		col.setAttribute("id", idString);
		
		var col = document.createElement('td')
		dataRow.appendChild(col)
		col.innerHTML = array2[index]
	}
}

appendToTableType1(dataSheet,section1Names,section1Units)

document.getElementById('dataSheetTable').appendChild(dataSheet)
