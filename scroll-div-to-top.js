jQuery(window).load(function(){
	/*for a item*/
	function elementToTopOneItem(item) {
		var checkImg = false;
		if(jQuery(item).length) {
			checkImg = true;
		}
		if(checkImg) {
			jQuery(window).scroll(function(){
				var windowpos = jQuery(window).scrollTop();
				if (windowpos > jQuery(item).offset().top) {
					jQuery(item).addClass('loader');
				}
			});	
		}
	}
	elementToTopOneItem('.img-founder');

	/*For multi item*/
	function elementToTopMultiItem(item) {
		var checkImg = false;
		var arrImage = [];
		if(jQuery(item).length) {
			checkImg = true;
			arrImage.push(item);
		}
		if(checkImg) {
			var windowpos = jQuery(window).scrollTop();
			for (var i = 0; i < arrImage.length; i++){
				if ((windowpos + jQuery(window).height()) > jQuery(arrImage[i]).offset().top) {
					jQuery(arrImage[i]).addClass('loader');
				}
			}
			jQuery(window).scroll(function(){
				var windowpos = jQuery(window).scrollTop();
				for (var i = 0; i < arrImage.length; i++){
					if ((windowpos + jQuery(window).height()) > jQuery(arrImage[i]).offset().top) {
						jQuery(arrImage[i]).addClass('loader');
					}
				}
			});	
		}
	}
	elementToTopMultiItem('.img-founder1');
	elementToTopMultiItem('.img-founder2');
	elementToTopMultiItem('.img-founder3');
	
});