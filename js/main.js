$(document).ready(function() {

	$('.search-menu').click(function(){
		$('#search-dropdown').removeClass('xhidden');
		$('#search-dropdown').addClass('xshown');
	});
	
	$('#searchBtn2').click(function(){
		var $this = $("#search-dropdown");
		if( $this.is('.xshown') ) {
			$this.removeClass('xshown');
			$this.addClass('xhidden');
		}
		else {
			$this.removeClass('xhidden');
			$this.addClass('xshown');
		}
		return false;
	});

});