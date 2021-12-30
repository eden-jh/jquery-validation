/**
 *
 * Given an errorList array, return the same array sorted in the order each field appears in the DOM
 * Compatible with validator errorList, each item in the array needs an element property for the relevant field
*/
$.extend( $.validator, {
	sortErrorListByDOMOrder: function( errorList ) {

		errorList.sort( function( a, b ) {
			switch ( jQuery( a.element )[ 0 ].compareDocumentPosition( jQuery( b.element )[ 0 ] ) ) {
				case Node.DOCUMENT_POSITION_PRECEDING:
					return 1;
				case Node.DOCUMENT_POSITION_FOLLOWING:
					return -1;
			}
		} );

		return errorList;
	}
} );
