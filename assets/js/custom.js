/**
 * Main JS file
 */

( function( $ ) {
	// Social Nav
	$('.social-links li').each(function(){
		$(this).find('a').each(function(){
			$(this).wrapInner('<span class="screen-reader-text"></span>');
		});
	});
} )( jQuery );
