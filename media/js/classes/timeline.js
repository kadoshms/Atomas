/**
*	@fileName 		: media/js/classes/timeline.js
*	@description	: animation sequencing
*	@author			: Kadoshms
*/
define([

], function(){

  /**
   * create a new timeline instance
   */
  function Timeline(obj){
	  this.seq = [];
	  this.obj = obj;
	  this.cur = 0;
  }

  /**
   * add a new element to timeline
   * 
   * @param {animation} arguments
   */
  Timeline.prototype.add = function(){
	  for(var i=0;i<arguments.length;i++){
		  this.seq.push(arguments[i]);
	  }
  }
 
  Timeline.prototype.play = function(){
	  this.playFrame(0);
  }
 
  Timeline.prototype.playFrame = function(frame){
	  var f = this.seq[frame];
	  if(f != undefined)
		  this.obj.animate(f.animation, f.dur, this.playFrame.bind(this, frame+1));
	  else
		  return;
  }

  return Timeline;
});
