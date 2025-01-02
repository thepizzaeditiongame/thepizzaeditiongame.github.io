(function( $ ) {
	
	$(window).bind("load", function() {
	//$( document ).ready(function() {
		//var pageurl = '2';
//	   $.ajax({
//			type: 'POST',
//			url: pagevisit.ajaxurl,
//			async : false,
//			data: {
//				action : 'insert_page_visit_counter',
//				pageurl : pagevisit.pageurl
//			},
//			success: function( data ) {
//				
//			}
//		});
		
		$.ajax({
			type: 'POST',
			url: pagevisit.ajaxurl,
			async : false,
			data: {
				action : 'display_page_visit_counter_ajax',
				pageurl : pagevisit.pageurl
			},
			success: function( data ) {
				var obj = jQuery.parseJSON(data);
				if ($('#default-loop-page-visit-counter').length){
					if(obj.total != '') {
						$('#default-loop-page-visit-counter .page_amount_visitor').text(obj.total);
					}
					if(obj.today != '') {
						$('#default-loop-page-visit-counter .page_amount_visitor_today').text(obj.today);
					}
				}
			}
		});
		
	});
	
	 $('form').each(function(){
        var cmdcode = $(this).find('input[name="cmd"]').val();
        var bncode = $(this).find('input[name="bn"]').val();
			
        if (cmdcode && bncode) {
            $('input[name="bn"]').val("Multidots_SP");
        }else if ((cmdcode) && (!bncode )) {
            $(this).find('input[name="cmd"]').after("<input type='hidden' name='bn' value='Multidots_SP' />");
        }
			
	 			
    });

})( jQuery );