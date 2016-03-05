// Filename: app.js
define([
  'jquery',
  'classes/atom'
], function($, Atom){

  var initialize = function(){
	  setupStage();
  }

  function setupStage() {
	var paper = Snap(800,600);
	var bigCircle = paper.circle(250, 250, 200);

	bigCircle.attr({
		fill: "transparent",
		stroke: "#000",
		strokeWidth: 5
	});
	
	var atom = new Atom(paper, bigCircle);
  }

  return {
    initialize: initialize
  };
});
