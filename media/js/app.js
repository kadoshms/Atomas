// Filename: app.js
define([
  'jquery',
  'classes/utils',
  'classes/atom',
  'classes/point',
  'classes/gameplay'
], function($, utils, Atom, Point, Gameplay){

  var initialize = function(){
	  self = this;
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
	var gamePlay = new Gameplay(paper, bigCircle);

	bigCircle.attr({
		fill: "transparent",
		stroke: "#000",
		strokeWidth: 5
	});

	paper.click(function(e){
		var p = new Point(e.x, e.y);
		var angle = utils.getAngleBetweenPoints(center, p);
		var g = gamePlay.getCurrentAtom().getGraphics();
		
		var transform = "translate("+r * Math.cos(angle)+"," +r * Math.sin(angle)+")";
		g.animate({ 'transform' : transform }, 500, gamePlay.newAtom);
	});
  }

  return {
    initialize: initialize
  };
});
