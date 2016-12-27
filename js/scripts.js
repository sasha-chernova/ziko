$(function(){
	debugger;
$('.menu a').on('click', function(e){  
    e.preventDefault( );
    var pageRef = $(this).attr('href');
  
    callPage(pageRef);

});
$('.zoom-btn').hover(function() {
        $(this).addClass('transition');
    
    }, function() {
        $(".zoom-btn").removeClass('transition');
    });

function callPage(pageRefInput) {
	$.ajax({
		url: pageRefInput,
		type: 'GET',
		dataType: 'html',
		success: function (response) {
		// console.log('the page loaded', response);
		$('.page-body').html(response);
		},
		error: function (error) {
			console.log('page wasnt loaded', error);
		}

	});
}
	$('.bxslider').bxSlider({
	  minSlides: 3,
	  maxSlides: 6,
	  slideWidth: 170,
	  slideMargin: 10,
	  pager: false,
	  auto: true
	});
	$('.arrow-left').click(function(){
	    $('.bx-prev').click();
	});
	    $('.arrow-right').click(function(){
	    $('.bx-next').click();
	});
})
