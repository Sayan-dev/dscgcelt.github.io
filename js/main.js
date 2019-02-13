// JavaScript Document
$(document).ready(function(){
	"use strict";
  $("#slider-carousal").carouFredSel({
	  
      responsive:true,
	  width:'100%',
	  circular:true,
	  scroll:{
			  items:1,
			  duration:1000,
			  pauseOnHover:true
  		},
	  auto:true,
	  items:
	  {
		  visible:{
			  min:1,
			  max:1,
		  },
		  height:'variable'
	  },
	  pagination:{
		  container:".sliderpage",
		  pageAnchorBuilder:false,
	  }  
	  
  });
	$(window).scroll(function(){
			var head=$(window).scrollTop();
			if (head>=70){
				$("header").addClass("secondary");
			}
			else 
				if($("header").hasClass("secondary")){
					$("header").removeClass("secondary");
			}
		});
	
	
	$(".menu").click(function(){
		
		$("header").toggleClass("collapsingnav");
		$(".colapse").toggleClass("active");
		
	});

	
	
});

	
