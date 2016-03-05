// Filename: app.js
define([
  'jquery',
  'classes/utils',
  'classes/atom',
  'classes/point'
], function($, utils, Atom, Point){

  var initialize = function(){
	  setupStage();
  }

  /**
   * setup stage
   */
  function setupStage() {
	var paper = Snap(800,600);
	var center = new Point(250,250);
	var r = 200;
	var bigCircle = paper.circle(center.getX(), center.getY(), r);

	bigCircle.attr({
		fill: "transparent",
		stroke: "#000",
		strokeWidth: 5
	});
	
	var atom = new Atom(paper, bigCircle);
	paper.click(function(e){
		var p = new Point(e.x, e.y);
		var angle = utils.getAngleBetweenPoints(center, p);
		var g = atom.getGraphics();
		var transform = "translate("+r * Math.cos(angle)+"," +r * Math.sin(angle)+")";
		g.animate({ 'transform' : transform }, 500);
	});
  }

  return {
    initialize: initialize
  };
});
