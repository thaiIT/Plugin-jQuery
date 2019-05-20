function setHeight(item) {
	if(item.length > 0){
		var maxHeightElement = 0;
		item.each(function(){
			if(jQuery(this).height() > maxHeightElement){
				maxHeightElement = jQuery(this).height();
			}
		});
		if(maxHeightElement > 0){
			item.height(maxHeightElement);
		}
		jQuery(window).resize(function(){
			item.css('height','');
			var maxHeightElement = 0;
			item.each(function(){
				if(jQuery(this).height() > maxHeightElement){
					maxHeightElement = jQuery(this).height();
				}
			});
			if(maxHeightElement > 0){
				item.height(maxHeightElement);
			}
		});
	}
}

// Set height for blog home page
var blogitem = jQuery('.blog-post');
setHeight(blogitem);
