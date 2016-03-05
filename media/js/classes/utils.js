define([], function(){
	var utils = {};

	/**
	 * Get a random integer between `min` and `max`.
	 * 
	 * @param {number} min - min number
	 * @param {number} max - max number
	 * @return {int} a random integer
	 */
	utils.getRandomInt = function(min, max) {
	  return Math.floor(Math.random() * (max - min + 1) + min);
	}
	/**
	 * get angle between two coordinates
	 * @param {Object} p1 point 1
	 * @param {Object} p2 point 2
	 * @return {double} angle in radians
	 */
	utils.getAngleBetweenPoints = function(p1, p2){
		return Math.atan2(p2.y - p1.y, p2.x - p1.x);
	}
	
	/**
	 * generate random color object
	 * @return {object} color by RGB
	 */
	utils.randomColor = function(){
		return {r:utils.getRandomInt(240,255),g:utils.getRandomInt(0,100),b:0};
	}

	/**
	 * retunrs a valid string of snap.svg gradient
	 * @param {array} arr array of colors
	 * @return {string} result string
	 */
	utils.getColorGradient = function(arr){
		var result = "";
		for(var i=0;i<arr.length;i++){
			result = result + arr[i];
			if(i != arr.length-1)
				result = result + "-";
		}
		return result;
	}
	
	return utils;
});