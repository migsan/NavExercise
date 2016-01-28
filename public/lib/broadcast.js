/**
 * Broadcasting module to listen and broadcast events
 * Miguel Angel Santamaría
 * santamaria.migue@gmail.com
 */

var signal = {
	'signal': {},

	/**
	 * Function to braoadcast and event and send data with it
	 */

	broadcast: function(eventSent, data) {
		if ( this.signal[eventSent] ) {
			this.signal[eventSent].forEach(function(method) {
				method(data);
			});
		}
	},


	/**
	 * Function to listen to an event an get its data
	 */

	listen: function(eventSent, method) {
		this.signal[eventSent] = this.signal[eventSent] || [];
		this.signal[eventSent].push(method);
	}
}
