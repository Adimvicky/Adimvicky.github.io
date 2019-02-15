$(function() {
  $( ".calendar" ).datepicker({
		dateFormat: 'dd/mm/yy',
		firstDay: 1
	});
	
	$(document).on('click', '.date-picker .input', function(e){
		var $me = $(this),
				$parent = $me.parents('.date-picker');
		$parent.toggleClass('open');
	});
	
	
	$(".calendar").on("change",function(){
		var $me = $(this),
				$selected = $me.val(),
				$parent = $me.parents('.date-picker');
		$parent.find('.result').children('span').html($selected);
		if($selected.indexOf('14/02') == 0){
			console.log('yup')
			$('.overlay').removeClass('d-none')
			$('.date-picker').addClass('d-none')
		} else {
			$('.overlay').addClass('d-none')
			$('.date-picker').removeClass('d-none')
		}
	});
});

