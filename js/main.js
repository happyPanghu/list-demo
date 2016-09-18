var listHandler={
		init:function(){
			//计算剩余高度
			var clientHeight = document.documentElement.clientHeight;
			var nav= deviceWidth / 7.5*0.88;
			// -1因为  ul有一个1px的border
			$(".list").css("height",clientHeight-nav-1);
			
			$(".sel").on("click",function(){
				$(".options,.opacity").show();
			})
			$(".options, .opacity").on("click",function(){
				$(".opacity, .options").hide();
			})
			$("#test1").on("click",function(){
				listHandler.regular("sfdsdf");
			})
		},
		regular:function(txt,time){
			$("#warnning").text(txt);
			$("#wrapper").fadeIn(200);
			setTimeout(function(){
			    $("#wrapper").fadeOut(300);
			},time==undefined?500:time);
		},
}