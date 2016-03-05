/**
*	@fileName 		: media/js/classes/circle.js
*	@description	: circle class
*	@author			: Kadoshms
*/
define([
        'jquery',
        'classes/utils',
        'classes/timeline'
], function($, utils, Timeline){

  function Circle(snap, range){
	  var conf = {};
	  if(typeof(config) != "undefined")
		  conf = config.get("header");

	  var minX = 0, maxX = window.innerWidth;
	  var minY = 0, maxY = 500;

	  if(range != undefined){
		  minX = range.x1;
		  minY = range.y1;
		  maxX = range.x2;
		  maxY = range.y2;
	  }

	  this.x = utils.getRandomInt(minX,maxX);
	  this.y = utils.getRandomInt(minY,maxY);

	  this.radius = conf.circle_radius != undefined ? conf.circle_radius : 6;

	  var color = conf.circle_color != undefined ? conf.circle_color : "#F68F28";

	  var outer = snap.circle(this.x, this.y, this.radius);
	  outer.attr({
		  	stroke		:	color,
		  	fill		:	color,
		  	strokeWidth	:	this.radius * 1.8,
		  	strokeOpacity: 0.3,
	  });
	  this.graphics = snap.g(outer);
  }

  /**
   * get circle graphics
   * @return {createjs} graphics object
   */
  Circle.prototype.getGraphics = function(){
	  return this.graphics;
  }

  /**
   * Circle absorve effect
   * @param {String} ray color
   */
  Circle.prototype.absorb = function(clr){
	  var g = this.graphics;
	  var bbox = g.getBBox();
	  var tl = new Timeline(g);
	  
	  var expand = {animation : { transform: "r0," + bbox.cx + ',' + bbox.cy + "s1.2,1.2," + bbox.cx + "," + bbox.cy}, dur:200};
	  var shrink = {animation : { transform: "r0," + bbox.cx + ',' + bbox.cy + "s1,1," + bbox.cx + "," + bbox.cy}, dur:200};

	  tl.add(expand, shrink);
	  tl.play();
	  
  }
  return Circle;
});
