/**
*	@fileName 		: media/js/classes/atom.js
*	@description	: atom class
*	@author			: Kadoshms
*/
define([
        'jquery',
        'classes/utils',
        'classes/timeline'
], function($, utils, Timeline){

  function Atom(snap, parentCircle){
	  var color = "#F68F28";

	  if(typeof parentCircle != "undfeind"){
		  var cx = parseFloat(parentCircle.attr("cx")),
		  	  cy = parseFloat(parentCircle.attr("cy")),
		  	  r = parseFloat(parentCircle.attr("r"));
		  this.x = cx;
		  this.y = cy;
	  }
	  var outer = snap.circle(this.x, this.y, 25);
	  outer.attr({
		  	stroke		:	color,
		  	fill		:	color
	  });
	  this.graphics = snap.g(outer);
  }

  /**
   * get circle graphics
   * @return {createjs} graphics object
   */
  Atom.prototype.getGraphics = function(){
	  return this.graphics;
  }

  /**
   * Circle absorve effect
   * @param {String} ray color
   */
  Atom.prototype.absorb = function(clr){
	  var g = this.graphics;
	  var bbox = g.getBBox();
	  var tl = new Timeline(g);
	  
	  var expand = {animation : { transform: "r0," + bbox.cx + ',' + bbox.cy + "s1.2,1.2," + bbox.cx + "," + bbox.cy}, dur:200};
	  var shrink = {animation : { transform: "r0," + bbox.cx + ',' + bbox.cy + "s1,1," + bbox.cx + "," + bbox.cy}, dur:200};

	  tl.add(expand, shrink);
	  tl.play();
	  
  }
  return Atom;
});
