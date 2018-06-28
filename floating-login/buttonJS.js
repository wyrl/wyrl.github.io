function startButton()
{
	$(".custom-button").each(function(index, element) {
        $el = $(this);
		if($el.is("input[type=submit]"))
		{
			if(String($el.attr("value")) != "undefined")
			{
				$el.wrap("<div class='btn-custom'>"+ $el.attr("value") +"</div>");
			}
			else
			{
				$el.wrap("<div class='btn-custom'>Submit</div>");	
			}
			if(String($el.attr("edit-byclass")) != "undefined")
			{
				$(".btn-custom").addClass($el.attr("edit-byclass"));	
			}
			
			
			$el.css("display","none")
			$(".btn-custom").mousedown(function(e) {
				if(e.button == 0)
				$(this).addClass("mousedown-button").removeClass("mouseup-button");
				$(this).css("background-color","rgb(255,255,255)");
			}).mouseup(function(e) {
				if(e.button == 0){
					$(this).addClass("mousedup-button").removeClass("mousedown-button");
					$(this).css("background-color","rgba(204,204,204)");
				 	$(this).find("input[type=submit]").click();
				}
			})
			$(window).mouseup(function(e) {
				if(e.button == 0){
					$(".btn-custom").css("background-color","rgba(204,204,204)");
					$(".btn-custom").addClass("mousedup-button").removeClass("mousedown-button");
				}
			});
		}
    });		
}