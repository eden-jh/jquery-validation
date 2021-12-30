/*
	Comma-separated list with an "and" at the end
*/
$.extend( $.validator, {
	getReadableList: function( labels, localizationForAnd ) {
		localizationForAnd = ( localizationForAnd === undefined ) ? "and" : localizationForAnd;
		var combinedLabels;
		if ( labels.length === 1 ) {
			combinedLabels = labels[ 0 ];
		} else {
			if ( labels.length > 2 ) {

				labels = [ labels.slice( 0, labels.length - 1 ).join( ", " ), labels[ labels.length - 1 ] ];
			}
			combinedLabels = labels.join( " " + localizationForAnd + " " );
		}
		return combinedLabels;
	}
} );
