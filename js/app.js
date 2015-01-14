$(document).ready(function(){
	$("input:text").keydown(function(e){
		if(e.keyCode == 13){
		$("ul").prepend('<li>' +(this.value) + '</li>');	
			
		}
  });
	// $("#btn").click(function(){
	// 	console.log($('input:text').val());
 //  })
	
})

	//$("ul").append('<li>' + $('input#item').val() + '</li>');
		//alert(this.value);
		//console.log(this.value);
		//console.log("clicked");
		//($('input:text').val());


