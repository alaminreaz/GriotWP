/**
 * Main application module
 */
angular.module( 'griot', [] );

	
jQuery( document ).ready( function() { 


	// Prepare WP environment
	jQuery( 'body' )

		// Tell CSS this page is managed by Griot
		.addClass( 'griot-post' )

		.find( '#poststuff' )

		// Define Angular app and controller
		.attr({
			'ng-app':'griot',
			'ng-controller':'griotCtrl'
		})

		// Create main application container and hidden content field
		.find( '#post-body-content' ).append( "<div id='griot'>" +
					"<textarea name='content' id='griot-data'>{{ data | json }}</textarea>" +
					"<fieldset>" +
						"<field type='text' name='objectid' label='Object ID' />" +
					"</fieldset>" +
					"<div media-drawer></div>" +
				"</div>" 
		)

		// Link title field to model
		.find( '#title' ).attr({
			'ng-model':'data.title'
		});


	/**
	 * Manually initialize Angular after environment is set up
	 */
	angular.bootstrap( document, ['griot'] );

});

/*
 * this swallows backspace keys on any non-input element.
 * stops backspace -> back
 * http://stackoverflow.com/a/8218367
 */
jQuery(function(){
  var rx = /INPUT|SELECT|TEXTAREA/i;

  jQuery(document).bind("keydown keypress", function(e){
    if( e.which == 8 || e.which == 13 ){ // 8 == backspace, 13 = enter
      if(!rx.test(e.target.tagName) || e.target.disabled || e.target.readOnly ){
        e.preventDefault();
      }
    }
  });
});
