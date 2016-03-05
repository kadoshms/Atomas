/**
*	@fileName 		: media/js/classes/gameplay.js
*	@description	: game play manager
*	@author			: Kadoshms
*/
define(['classes/utils','classes/atom'], function(utils, Atom){
	/**
	 * New gameplay instance
	 * @param {Object} snap stage object 
	 * @param {Object} circle element
	 */
	function Gameplay(paper, bigCircle){
		gameplay = this;
		this.paper = paper;
		this.data = { bigCircle : bigCircle };
		this.atom = new Atom(this.paper, this.data.bigCircle);
	}

	/**
	 * return current atom
	 * @returns {Atom} current atom
	 */
	Gameplay.prototype.getCurrentAtom = function(){
		return this.atom;
	}

	/**
	 * generate a new atom
	 */
	Gameplay.prototype.newAtom = function(){
		gameplay.atom = new Atom(gameplay.paper, gameplay.data.bigCircle);
	}
	
	return Gameplay;
});