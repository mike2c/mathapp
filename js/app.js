$(document).ready(function(){
	
	colors = {
		"purple": "#666699",
		"red"   : "#cc6666",
		"orange": "#ff9900"
	};

	$(".pill-menu li a").click(function(){
		$("a.active").removeClass("active");
		$(this).attr("class", "active");
	});
	
	$("a.mdl-button").click(function(e){
		e.preventDefault();
		var target = this.href;
		$("body").hide("slide", {direction: "down"}, "slow",function(){
			window.location = target;
		});
	});	

	$("body").show("slide", {direction: "up"},"slow", function(){

	});
});

/**
 *Golbal functions
 */

function show(page){

	var element = $(page);

	$(".page:visible").hide("slide", {direction:"up"}, 350,function(){
		$(element).show("slide", {direction: "up"},  350);
		return false;
	});
}

function slidePage(page){

	var element = $(page);

	$(".page:visible").hide("slide", {direction:"left"}, 350,function(){
		$(element).show("slide", {direction: "right"},  350);
		return false;
	});
}

/*var colors = [
	"#FFB5E8","#FF9CEE","#FFCCF9","#FCC2FF","#F6A6FF",
	"#B28DFF","#C5A3FF","#D5AAFF","#ECD4FF","#FB24FF",
	"#DCD3FF","#A79AFF","#B5B9FF","#97A2FF","#AFCBFF",
	"#AFF8DB","#85E3FF","#AC37FF","#6EB5FF","#BFFCC6",
	"#FFC9DE","#FFABAB"];

	var actualColor = colors[Math.floor(Math.random(colors.length) * colors.length)];
	//$("body").css("background-color",actualColor);function showPage(name){
	var element = $(name);
 	//console.log(element);
 	if(element != null && element != undefined){
 		$(actualPage).hide("slide",{
 			direction: "left"
 		},"fast", function(){
 			$(element).show("slide",{direction: "right"} ,"fast");
 			actualPage = element;
 		});		
 	}

 	var newColor = $(element).data("color");
 	if(newColor != undefined){
 		$("body").css("background-color", colors[newColor]);
 	}else{
		console.log("propiedad no encontrada.");
	}
}*/
	