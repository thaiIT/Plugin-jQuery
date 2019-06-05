function goToByScroll(id) {
	if ($("#" + id).length) {
	    // Scroll
	    $('html,body').animate({
	        scrollTop: $("#" + id).offset().top
	    }, 'slow');
	}
}

$("a.scroll-item").click(function(e) {
    // Prevent a page reload when a link is pressed
    e.preventDefault();
    // Call the scroll function
    goToByScroll($(this).attr('data-id'));
});