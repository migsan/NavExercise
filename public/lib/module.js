/**
 * Main module for the navigation structure
 * Miguel Angel Santamaría
 * santamaria.migue@gmail.com
 */

var NavModule = (function (){

	/**
	 * Function to get the json structure for navigation
	 */

	function getNavStructure(uri) {

		var request = new XMLHttpRequest();
		request.onreadystatechange = function() {

			if ( request.readyState === 4 ) {
				switch (request.status) {

					// Success handler
					case 200:
						var response = JSON.parse(request.responseText);
						signal.broadcast('ajaxSuccess', response);
						break;

					// Error handlers
					case 404:
						console.error(request.status + ': Element not found.');
						break;

					case 500:
						console.error(request.status + ': Internal server error.');
						break;

					default:
						console.error(request.status + ': Error.');
						break;
				}
			}
		}

		// Make the request
		request.open('GET', uri);
		request.send();
	}


	/**
	 * Function to create the structure of the navigation
	 */

	function createNavStructure(data) {
		var navStructure = document.createElement('ul');

		for ( var key in data.items ) {
			if ( data.items.hasOwnProperty(key) ) {

				var menuElement = document.createElement('li');
				menuElement.className = 'nav-element';
				var anchorElement = document.createElement('a');
				anchorElement.className = 'first-level';
				anchorElement.innerHTML = data.items[key].label;

				if ( data.items[key].items.length > 0 ) {
					anchorElement.href = '/#/';
					menuElement.appendChild(anchorElement);
					menuElement.className += ' sub-menu';
					var subMenuElment = document.createElement('ul');
					subMenuElment.className = 'sub-nav-element';
					_subMenuBehaviour(menuElement);

					for ( var keyTwo in data.items[key].items ) {
						var subAnchorElement = document.createElement('a');
						subAnchorElement.innerHTML = data.items[key].items[keyTwo].label;
						subAnchorElement.href = data.items[key].items[keyTwo].url;
						var subListElement = document.createElement('li');
						subListElement.appendChild(subAnchorElement);
						subMenuElment.appendChild(subListElement);
					}
					menuElement.appendChild(subMenuElment);
				}

				else {
					anchorElement.href = data.items[key].url;
					menuElement.appendChild(anchorElement);
				}

				navStructure.appendChild(menuElement);
			}
		}
		document.getElementById('menu').appendChild(navStructure);
	}


	/**
	 * Function attach the click behaviour to the mobile hamburguer icon
	 */

	function mobileToggleBehaviour() {
		document.getElementById('menu-toggle').addEventListener('click', function() {
			document.getElementById('nav-wrapper').classList.toggle('open-mobile');
			document.getElementById('masking-mobile').classList.toggle('display');
			document.getElementById('menu-toggle').classList.toggle('close');
		});
	}


	/**
	 * Funtion to listen to esc keystroke
	 */

	function hideMenu() {
		window.onkeydown = function(e) {
			if ( e.keyCode == 27 ) {
				_removeClass('display', 'sub-nav-element', 'class');
				_removeClass('open', 'nav-element', 'class');
				_removeClass('display', 'masking', 'id');

				_removeClass('open-mobile', 'nav-wrapper', 'id');
				_removeClass('display', 'masking-mobile', 'id');
				_removeClass('close', 'menu-toggle', 'id');
			}
		}
	}


	/**
	 * Function to attach the submenu behaviour for the mobile items
	 */

	function _subMenuBehaviour(element) {

		// Click event on menu icon
		element.addEventListener('click', function() {
			var maskingElement = document.getElementById('masking');

			// Check for mobile viewport to remove classes
			if ( window.innerWidth >= 768 ) {
				_removeClass('display', 'sub-nav-element', 'class');
				_removeClass('open', 'nav-element', 'class');
				masking.classList.add('display');
			}

			this.classList.toggle('open');
			this.querySelector('.sub-nav-element').classList.toggle('display');

			masking.addEventListener('click', function() {
				_removeClass('display', 'sub-nav-element', 'class');
				_removeClass('open', 'nav-element', 'class');
				_removeClass('display', 'masking', 'id');
			});
		});

		// Click event on masking
		document.getElementById('masking-mobile').addEventListener('click', function() {
			_removeClass('open-mobile', 'nav-wrapper', 'id');
			_removeClass('display', 'masking-mobile', 'id');
			_removeClass('close', 'menu-toggle', 'id');
		});
	}


	/**
	 * Function to remove a class from an element or a list of elements
	 */

	function _removeClass(className, selector, type) {
		if ( type === 'id' ) {
			var x = document.getElementById(selector);
			x.classList.remove(className);
		}

		else {
			var x = document.querySelectorAll('.' + selector);
			[].forEach.call(x, function(n) {
				n.classList.remove(className);
			});
		}
	}


	/**
	 * Returning the public functions to be used
	 */

	return {
		getNavStructure: getNavStructure,
		createNavStructure: createNavStructure,
		mobileToggleBehaviour: mobileToggleBehaviour,
		hideMenu: hideMenu
	}

})();
