//Calling makegrid() after clicking on submit 
$('input[type="submit"]').on('click',function(event) {
  event.preventDefault();
  makeGrid();
});
//After clicking on reset button, reset all values
$('input[type="reset"]').on('click',function(event) {
	
   event.preventDefault();
  $('#pixelCanvas').children().remove();
  $('#colorPicker').val('#000000');
  $('#inputHeight').val('1');
  $('#inputWidth').val('1');
 
  
});
//Drawing table
function makeGrid(){
  var height=$('#inputHeight').val();
var width=$('#inputWidth').val();

for(var row=0;row<height;row++){
	$('#pixelCanvas').append("<tr></tr>");
	}
  for(var column=0;column<width;column++){
		$('tr').append("<td></td>");
	//$('#pixelCanvas').append("</tr>");
}
}
//Color cell
$('table').delegate('td', 'click', function() {
  var color = $('#colorPicker').val();
  $(this).css('background-color', color);
  
});
//Make cell transparent
$('table').delegate('td', 'dblclick', function() {
  $(this).css('background-color', 'transparent');
});

$('#inputHeight').on('input',function(e){
    //alert('Changed!')
  $('#pixelCanvas').children().remove();
});
$('#inputWidth').on('input',function(e){
    //alert('Changed!')
  $('#pixelCanvas').children().remove();
});



function playAudio(songID) { 
var x = document.getElementById(songID); 
    x.play(); 
} 


