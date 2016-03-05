/**
*	@fileName 		: media/js/classes/atom.js
*	@description	: atom class
*	@author			: Kadoshms
*/
define([
        'jquery',
        'classes/utils',
        'classes/timeline',
        'classes/element'
], function($, utils, Timeline, Element){

  function Atom(snap, parentCircle){
	  var color = "#F68F28";
	  var cx = parseFloat(parentCircle.attr("cx")),
  	  cy = parseFloat(parentCircle.attr("cy")),
  	  r = parseFloat(parentCircle.attr("r"));

	  if(typeof parentCircle != "undfeind"){
		  this.x = cx;
		  this.y = cy;
	  }

	  var outer = snap.circle(this.x, this.y, 25);
	  
	  var elem = new Element();
	  var props = elem.getProps();

	  outer.attr({
		  	stroke		:	props.color,
		  	fill		:	props.color
	  });

	  var name = snap.text(cx,cy, props.name);
	  var level = snap.text(cx, cy + 15, elem.getLevel())
	  this.graphics = snap.g(outer, name, level);
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
