/*if(didCollide(fatmanAvatar,otherSprite))

the purpose of Collisions.js is to make more methods in detecting collisions
function tryAgain will be using the distance between the centers of the two 
hitboxes to calculate if a collision has occured.
*/

function tryAgain(main, other)
{
	var mainLeft = main.x;
	var mainTop = main.y;
	var mainCenterX = mainLeft + main.width/2;
	var mainCenterY = mainTop + main.height/2;
	
	var otherLeft = other.x;
	var otherTop = other.y;
	var otherCenterX = otherLeft + other.width/2;
	var otherCenterY = otherTop + other.height/2;
	
	var distance = Math.sqrt(Math.pow(otherCenterX  - mainCenterX, 2)
	+ Math.pow(otherCenterY - mainCenterY, 2));
	
	var mainRadius = Math.sqrt( main.width*main.width + main.height*main.height)/2;
	var otherRadius = Math.sqrt(other.width*other.width + other.height*other.height)/2;
	
	return distance < mainRadius + otherRadius;
}