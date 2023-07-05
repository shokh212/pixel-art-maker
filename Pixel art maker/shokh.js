// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    const gh = document.getElementById('inputHeight').value;
    const gw = document.getElementById('inputWidth').value;
    const table = document.getElementById('pixelCanvas');
    
    
  html='';
  for(var i=0; i<gh; i++)
  {
    html+="<tr>";
      
        for(var k=0; k<gw; k++)
        {
          html+="<td onclick='this.style.backgroundColor=setColor()'></td>";
          }
      html+="</tr>"
    }
    table.innerHTML = html;
    return false;
    
  }
  function setColor(){
    const gc = document.getElementById('colorPicker').value;
    return gc;
  }