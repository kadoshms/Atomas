/**
*	@fileName 		: media/js/classes/point.js
*	@description	: simple point coordinate
*	@author			: Kadoshms
*/
define(['classes/utils'], function(utils){
	/**
	 * New point instance
	 * @param {double} x 
	 * @param {double} y
	 */
	function Point(x, y){
		this.x = x;
		this.y = y;
	}
	
	/**
	 * get x 
	 * @returns {double}
	 */
	Point.prototype.getX = function(){
		return this.x;
	}

	/**
	 * get y 
	 * @returns {double}
	 */
	Point.prototype.getY = function(){
		return this.y;
	}

	Point.prototype.getAngleBetweenOtherPoint = function(p){
		return utils.getAngleBetweenPoints(this, p);
	}
	
	Point.prototype.getDistanceBetweenOtherPoint = function(p){
		return Math.sqrt(Math.pow(this.x - p.getX(), 2), Math.pow(this.y - p.getY()));
	}
	return Point;
});