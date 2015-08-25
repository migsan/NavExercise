/**
 * Main function for the navigation
 * Fires the functions defined in the module and uses the breoadcast module
 * Miguel Angel Santamaría
 * miguel.santamaria@gmail.com
 */

(function() {


	/**
	 * Listen to the ajax success
	 */

	signal.listen('ajaxSuccess', function(data) {

		NavModule.createNavStructure(data);
		NavModule.mobileToggleBehaviour();
		NavModule.hideMenu();
	});


	/**
	 * Fire the getter of the json structure
	 */

	NavModule.getNavStructure('/data/nav.json');

})();
