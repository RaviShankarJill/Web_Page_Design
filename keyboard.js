window.onload = function() 
{

document.onkeypress = function (event) 
{
event = (event || window.event);
if (event.keyCode == 123 || event.keyCode == 121 || event.keyCode == 17 || event.keyCode == 18 || event.keyCode == 83 || event.keyCode == 93) 
{
alert('Function disabled');
return false;
}
}
document.onkeydown = function (event) {
event = (event || window.event);
if (event.keyCode == 123 || event.keyCode == 121 || event.keyCode == 17 || event.keyCode == 18 || event.keyCode == 83 || event.keyCode == 93) 
{
alert('Function disabled');
return false;
}
}

}