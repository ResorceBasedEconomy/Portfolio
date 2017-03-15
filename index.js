'use strict'

console.log('Protfolio');
function myFunc(event) {
	if(event > 400) {
		jQuery(document).ready(function(){
			jQuery('.skillbar').each(function(){
				jQuery(this).find('.skillbar-bar').animate({
					width:jQuery(this).attr('data-percent')
				},1500);
			});
		});
	}
	

}

