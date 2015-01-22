$(document).ready(function(){
	// use enter to add list items
	// $('#item').keydown(function(e){
	// 	if(e.keyCode == 13){
	// 		e.preventDefault();
	// 		$("ul").prepend('<li>' +(this.value) + '</li>');
	//  		$("#btn").click();	
	// 	}
 // })


	$("#btn").click(function(){
		event.preventDefault();
		if($('#item').val().trim().length === 0) {//this works also : (!$.trim($('#item').val()))
			alert("Enter text to add groceries.");
		}
		else{
			$("ul").prepend('<li class="li"> <input type="checkbox" class="checkBox"><span class="food">' 
				+($('#item').val()) + '</span><div class="delete">&nbsp;&nbsp;&nbsp;x</div></li>');
			$('#item').val("");
	  	}
	})

	//this is an event listener. We specify which element, li, within the grocery list class we want to listen to for a click event.
	//Toggle strike through
	$('.grocery-list').on('click', '.checkBox' , function(){
		$(this).siblings('.food').toggleClass('purchased');
	})

	//Delete li
	$('.grocery-list').on('click', '.delete', function(){
		$(this).parent().remove();
	})
  
  	//Mouseenter toogle "X" on hover
	$('.grocery-list').on('mouseenter', 'li', function(){
		$(this).children('.delete').toggleClass('show');
	});

	$('.grocery-list').on('mouseleave', 'li', function(){
		$(this).children('.delete').toggleClass('show');
	});
})

	
	// It looks like pressing enter within a `form` element causes a click event 
	// automatically. Probably on whatever button the browser judges to be the main 
	// submit button.

	// event.preventDefault(); -- by default the form automatically 

	// efreshes when the function run, this stops the default operation
	
	//($('input:text').val());


