//This funcion loops all lines and set color (with colorRow method)
function colorAll() {

  //get current sheet
  var sheet = SpreadsheetApp.getActiveSheet();

  //begin from the second line
  var startRow = 2;

  // Continue until the last line
  var endRow = sheet.getLastRow();

  //loop
  for (var r = startRow; r <= endRow; r++) {
    colorRow(r);
  }
}


//This method change the color of a line (defined in parameter)
function colorRow(r){

  //get active sheet
  var sheet = SpreadsheetApp.getActiveSheet();

  //set the range for the line (from cell x to y)
  var dataRange = sheet.getRange(r, 1, 1, 10);
  
  //get values for the cells
  var data = dataRange.getValues();
  var row = data[0];
  
  //debug
  Logger.log(row);

  //if the 6th row contains "hello"
  if(row[6] === "hello"){
    dataRange.setBackgroundRGB(192, 255, 192);
    
  // else
  }else{
    dataRange.setBackgroundRGB(255, 255, 255);
  }

  //flush
  SpreadsheetApp.flush(); 
}


//When sheet is edited, the below method is automatically called
function onEdit(event){
  
  //only if the modified row is not in the first line  
  var r = event.source.getActiveRange().getRowIndex();
  if (r >= 2) {
    colorRow(r);
  }
}