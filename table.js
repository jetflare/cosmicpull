var dataSheet = document.createElement('table')

var dataSheetHeader1 = document.createElement('tr')
dataSheetHeader1.className = "tableHeader"
dataSheet.appendChild(dataSheetHeader1)

var dataSheetHeaderVPD = document.createElement('td')
dataSheetHeaderVPD.innerHTML = "Vessel Process Data"
dataSheetHeaderVPD.colSpan = 4
dataSheetHeader1.appendChild(dataSheetHeaderVPD)

var section1NamesUnits = ["Total gas flow","kg/h","Total liquid flow","kg/h"]

var nRow = 1

function appendToTableType1(item,index){
	var dataRow
	
	if (index%2==0){
		dataRow = document.createElement('tr')
		dataSheet.appendChild(dataRow)
		
		var col1 = document.createElement('td')
		dataRow.appendChild(col1)
		col1.innerHTML = item
		col1.colSpan = 2
		
		var col2 = document.createElement('td')
		dataRow.appendChild(col2)
		var idString = "blank" + nRow
		nRow++
		col2.setAttribute("id", idString);
		
	} else {
		var col3 = document.createElement('td')
		dataRow.appendChild(col3)
		col3.innerHTML = item
	}
}

var dataSheetSection1 = document.createElement('tr')
dataSheet.appendChild(dataSheetHeader1)

section1NamesUnits.forEach(appendToTableType1)
document.getElementById('dataSheetTable').appendChild(dataSheet)
