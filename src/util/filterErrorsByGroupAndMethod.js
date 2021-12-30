
/*
	Given an array of errors, return array containing only errors for a specific group and method
*/
$.extend( $.validator, {

	filterErrorsByGroupAndMethod: function( errors, groupName, method ) {
		var v = this;
		errors = errors.filter( function( error ) {
			var element = $( error.element ),
				elementName = element.attr( "name" );
			if ( v.groups[ elementName ] === groupName && error.method === method ) {

				return true;
			}
		} );
		return errors;
	}
} );
