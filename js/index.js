



$(document).ready(function() {



	loadIntro();
	textSize();
	objFade();

	animateArrow();

	githubHover();
	linkedInHover();
	locationHover();

	peopleHover();

	cvHover();

	projectHover();

	linkText();

	moreInfo();
	
	$("#down").click(function() {
   		scrollToAnchor('details');
	});


});

function moreInfo() {
	$("#annoCell").click(function() {
		$(".more-info").css({display: "block"});
		$(".more-info").css({left: 0, transition: "1.0s"});

	})

	$("#remove").click(function() {
		$(".more-info").css({left: "100%", transition: "1.0s"});
		$(".more-info").one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
			function(e) {
			})
	})

	$("#remove").hover (
		function() {
			$("#remove").css({color: "#00C5E9", transition: "0.5s"});
		}, function() {
			$("#remove").css({color: "", transition: "0.5s"})
		});
}

function linkText() {
	var height = "calc(1vh + " + parseInt($("#bio-table").width())*0.0011 + "vh)";
	

	var bioHeight = $("#bio-column").height();
	console.log(bioHeight);

	document.getElementById("bio-table").style.fontSize = height;
	//document.getElementById("links").style.height = bioHeight+"px";
}

function projectHover() {
	$("#annoCell").hover (
		function() {
			$(this).css('cursor','pointer');
			$("#anno-img").css({ opacity: 1.0, transition: "1.0s"});
			$("#anno-img").css({ transform: "scale(1.1)", transition: "1.0s"});
			$("#anno-text").css({ left: "15%" , transition: "1.0s"});
			$("#anno-text").css({ opacity: 0.0, transition: "1.0s"});
		}, function() {
			$("#anno-img").css({ opacity: 0.7, transition: "1.0s"});
			$("#anno-img").css({ transform: "scale(1.0)", transition: "1.0s"});
			$("#anno-text").css({ left: "0%" , transition: "1.0s"});
			$("#anno-text").css({ opacity: 1.0, transition: "1.0s"});
		});
	$("#splitit").hover (
		function() {
			$(this).css('cursor','pointer');
			$("#splitit-img").css({ opacity: 1.0, transition: "1.0s"});
			$("#splitit-img").css({ transform: "scale(1.1)", transition: "1.0s"});
			$("#splitit-text").css({ left: "15%" , transition: "1.0s"});
			$("#splitit-text").css({ opacity: 0.0, transition: "1.0s"});
		}, function() {
			$("#splitit-img").css({ opacity: 0.7, transition: "1.0s"});
			$("#splitit-img").css({ transform: "scale(1.0)", transition: "1.0s"});
			$("#splitit-text").css({ left: "0%" , transition: "1.0s"});
			$("#splitit-text").css({ opacity: 1.0, transition: "1.0s"});
		});
	$("#organiseme").hover (
		function() {
			$(this).css('cursor','pointer');
			$("#organiseme-img").css({ opacity: 1.0, transition: "1.0s"});
			$("#organiseme-img").css({ transform: "scale(1.1)", transition: "1.0s"});
			$("#organiseme-text").css({ left: "15%" , transition: "1.0s"});
			$("#organiseme-text").css({ opacity: 0.0, transition: "1.0s"});
		}, function() {
			$("#organiseme-img").css({ opacity: 0.7, transition: "1.0s"});
			$("#organiseme-img").css({ transform: "scale(1.0)", transition: "1.0s"});
			$("#organiseme-text").css({ left: "0%" , transition: "1.0s"});
			$("#organiseme-text").css({ opacity: 1.0, transition: "1.0s"});
		});
}

function peopleHover() {
	$("#alex").hover (
		function() {
			$("#alex").css({ filter: "brightness(125%)", transition: "0.5s"});
			$("#alex-image").css({ transform: "scale(1.05)", transition: "1.0s"});
		}, function() {
			$("#alex").css({ filter: "brightness(100%)", transition: "0.5s"});
			$("#alex-image").css({ transform: "scale(1.0)", transition: "1.0s"});
		});
	$("#aaron").hover (
		function() {
			$("#aaron").css({ filter: "brightness(125%)", transition: "0.5s"});
			$("#aaron-image").css({ transform: "scale(1.05)", transition: "1.0s"});
		}, function() {
			$("#aaron").css({ filter: "brightness(100%)", transition: "0.5s"});
			$("#aaron-image").css({ transform: "scale(1.0)", transition: "1.0s"});
		});
	$("#hamish").hover (
		function() {
			$("#hamish").css({ filter: "brightness(125%)", transition: "0.5s"});
			$("#hamish-image").css({ transform: "scale(1.05)", transition: "1.0s"});
		}, function() {
			$("#hamish").css({ filter: "brightness(100%)", transition: "0.5s"});
			$("#hamish-image").css({ transform: "scale(1.0)", transition: "1.0s"});
		});
	$("#ed-image").hover (
		function() {
			$("#ed-image").css({ filter: "brightness(125%)", transition: "0.5s"});
			$("#ed-image").css({ transform: "scale(1.05)", transition: "1.0s"});
		}, function() {
			$("#ed-image").css({ filter: "brightness(100%)", transition: "0.5s"});
			$("#ed-image").css({ transform: "scale(1.0)", transition: "1.0s"});
		});
}

function cvHover(){
	$("#cv").hover (
    function() {
    	$("#cv").css({ color: "white", transition: "0.75s" });
    	$("#cv").css({backgroundColor: "#00C5E9", transition: "0.75s"});
    }, function() {
    	$("#cv").css({ color: "#00C5E9", transition: "0.75s" });
    	$("#cv").css({backgroundColor: "white", transition: "0.75s"});
    });
}

function githubHover(){
	$("#github").hover (
    function() {
    	$("#gitUser").css({ color: "white", transition: "0.75s" });
    	$("#gitLogo").css({ filter: "invert(100%)", transition: "0.75s" });
    	$("#github").css({backgroundColor: "#00C5E9", transition: "0.75s"});
    }, function() {
    	$("#gitUser").css({ color: "black", transition: "0.75s" });
    	$("#gitLogo").css({ filter: "invert(0%)", transition: "0.75s" });
    	$("#github").css({backgroundColor: "white", transition: "0.75s"});
    } 
	);
}

function linkedInHover(){
	$("#linkedin").hover (
    function() {
    	$("#linkedUser").css({ color: "white", transition: "0.75s" });
    	$("#linkedLogo").css({ filter: "invert(100%)", transition: "0.75s" });
    	$("#linkedin").css({backgroundColor: "#00C5E9", transition: "0.75s"});
    }, function() {
    	$("#linkedUser").css({ color: "black", transition: "0.75s" });
    	$("#linkedLogo").css({ filter: "invert(0%)", transition: "0.75s" });
    	$("#linkedin").css({backgroundColor: "white", transition: "0.75s"});
    } 
	);
}

function locationHover(){
	$("#location").hover (
    function() {
    	$("#locationText").css({ color: "white", transition: "0.75s" });
    	$("#locationSymbol").css({ filter: "invert(100%)", transition: "0.75s" });
    	$("#location").css({backgroundColor: "#00C5E9", transition: "0.75s"});
    }, function() {
    	$("#locationText").css({ color: "black", transition: "0.75s" });
    	$("#locationSymbol").css({ filter: "invert(0%)", transition: "0.75s" });
    	$("#location").css({backgroundColor: "white", transition: "0.75s"});
    } 
	);
}

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top}, 1500);
}


function animateArrow() {
	$("#arrow-down").addClass("anim-arrow");

	$("#whole-arrow").hover (
    function() {
    	$(".arrow-line").css({ opacity: "0.85", transition: "1.0s" });
    	$(".arrow-line").css({ fill: "grey", transition: "1.0s" });
    	console.log("ON");
    }, function() {
    	$(".arrow-line").css({ opacity: "1", transition: "1.0s" });
    	$(".arrow-line").css({ fill: "white", transition: "1.0s" });
    	console.log("OFF");
    } 
	);

}

function textSize() {
	    var fontSizeHeight = $("#white-banner").height()/17;
	    var fontSizeWidth = $("#white-banner").width()/50;
	    var fontNumber = Math.min(fontSizeWidth, fontSizeHeight);
	    var fontSize = parseInt(fontNumber)+"px";
	    console.log(fontSize);
	    
	    $("#info span").css('font-size', fontSize);
	    if($( window ).width() >= 900 && $( window ).width() <= 1300) {
	    	//var topPx = "calc(47.5% - " + parseInt($( window ).width()*0.0175)+"px)";
			console.log($( window ).width() + " wide");
	    	var topPx = "calc(48% - 15px)";
	    	var padding = "calc(500px - " + parseInt($( window ).width()*0.3)+"px";
	    }else if($( window ).width() >= 1300) {
	    	var topPx = "calc(48.5% - 24px)";
	    	var padding = "200px";
	    } else if($( window ).width() >= 2800) {
	    	console.log("WIDE");
	    	var topPx = "calc(48.5% - 24px)";
	    	var padding = "0";
		} else {
			var topPx = "calc(48% - 15px)";
			var padding = "230px";
			
		}
	    //console.log(topPx);
	    document.getElementById("info").style.top = topPx;
	    document.getElementById("role").style.paddingLeft = padding;
	    document.getElementById("name").style.paddingRight = padding;

	    //console.log(scaleFac);

	    //document.getElementById("arrow-down").style.transform = "scale("+scaleFac+")";

	}

function objFade() {
	setTimeout(function(){
    	$("#info.hidden").fadeIn("slow").removeClass("hidden");

    }, 3500)

    setTimeout(function(){
    	$("#arrow-down.hidden").fadeIn("slow").removeClass("hidden");
    	
    }, 5000)

    setTimeout(function(){
    	$(".path").fadeIn("slow").removeClass("hidden");
    	
    }, 4000)

    setTimeout(function(){
    	$(".underline-path").fadeIn("fast").removeClass("hidden");
    	
    }, 7000)

	$(window).disablescroll({
		handleScrollbar: false
	});

	$('html, body').stop().animate({ scrollTop: 0 }, 8000,function() {
		$(window).disablescroll("undo");
	});
    
}

function loadIntro() {
	var animation = bodymovin.loadAnimation({
		container: document.getElementById('white-banner'),
		renderer: 'svg',
		loop: false,
		autoplay: true,
		path: 'data.json'
	})
}

$(window).resize(function() {
	textSize();
	linkText();
});