/**
*	@fileName 		: media/js/classes/atom.js
*	@description	: atom class
*	@author			: Kadoshms
*/
define([
        'jquery',
        'classes/utils',
], function($, utils){

  function Element(){
	  this.level = utils.getRandomInt(1,3);
  }
  
  /**
   * get current element level
   * @returns
   */
  Element.prototype.getLevel = function(){
	  return this.level;
  }
  
  Element.prototype.getProps = function(){
	  return this.props[this.level-1];
  }
  Element.prototype.props = [
     {
    	 color	:	"red",
    	 name	:	"H"
     },
     {
    	 color	:	"orange",
    	 name	:	"He"
     },
     {
    	 color	:	"green",
    	 name	:	"Li"
     }
  ];

  return Element;
});
