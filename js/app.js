$(document).ready(function(){
	// use enter to add list items
	$('#item').keydown(function(e){
		if(e.keyCode == 13){
			//e.preventDefault();
			//$("ul").prepend('<li>' +(this.value) + '</li>');
			//$("#btn").click();	
		}
  })
	//add list items
	$("#btn").click(function(){
		event.preventDefault();
		$("ul").prepend('<li>' +($('#item').val()) + '</li>');
		$('#item').val("");
  })

	
})

	// event.preventDefault(); -- by default the form automatically 
	// efreshes when the function run, this stops the default operation
	
	//($('input:text').val());


