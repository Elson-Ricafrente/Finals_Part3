// Write the code to generate table
// This function generates a compound interest table.
function generateTable(form) {
  var amount; // accumulated value for each new year
  var rate; // interest rate
  var years; // years for principal to grow
  var interest; // interest earned each year
  var table; // compound interest table
  var year = 1; // the year being calculated
  amount = form.elements["deposit"].valueAsNumber;
  rate = form.elements["rate"].valueAsNumber;
  years = form.elements["years"].valueAsNumber;
  table =
    "<table>" +
    "<tr><th>Year</th><th>Starting Value</th>" +
    "<th>Interest Earned</th><th>Ending Value</th></tr>";

  // ---> Write your code here to generate the table and show it in the page

  var table = document.createElement('table');
  var tr = document.createElement('tr');
  var array = ['Year', 'Starting Value', 'Interest Earned', 'Ending Value'];
  
  for (var j = 0; j < array.length; j++) {
    var th = document.createElement('th'); //column
    var text = document.createTextNode(array[j]); //cell
    th.appendChild(text);
    tr.appendChild(th);
  }
  table.appendChild(tr);
  
  for (var i = 0; i < years; i++) {
    var tr = document.createElement('tr');
  
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');


    var text1 = document.createTextNode('Text1');
    var text2 = document.createTextNode('Text2');
    var text3 = document.createTextNode('Text3');
    var text4 = document.createTextNode('Text4');
  
    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);
  
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
  
    table.appendChild(tr);
  }
  document.body.appendChild(table);

} // end generateTable
