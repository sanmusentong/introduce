$(document).ready(function(){
	
	var side_triggle=$('.side_triggle');
	var sidebar=$('#sidebar');
	var mask=$('.mask');
    var backbutton=$('#back-top');
    var findme=$('#findme');
    
	function showSide(){
	mask.fadeIn();
	sidebar.animate({right:'0px'});
	}
	function hideSide(){
		mask.fadeOut();
		sidebar.animate({right:-sidebar.width()});
	}
	//微信图片为什么不能鼠标触发显示？把函数放到选择器里面又能触发了。。。
	
	$('#wexin').on('mouseenter',function(){
		$('.wechatImg').css('display','inline-block');
	})
	$('#wexin').on('mouseleave',function(){
		$('.wechatImg').css('display','none');
	})
	
	
	
	side_triggle.on('click',showSide);
	mask.on('click',hideSide);
	//点击返回顶部
	backbutton.on('click',function(){
		$('html,body').animate({
			scrollTop:0
		} , 1000)
	})
	//返回顶部按钮的 隐藏与出现   但是刚开始的箭头还是会出现 怎么解决？
	$(window).on('scroll',function(){
		
		if($(window).scrollTop()>$(window).height()){
			backbutton.fadeIn();
		}
		else{ backbutton.fadeOut();}
		
	})
	//终于在一个博客上看到了，，，，只要让窗口一开始就触发 'scroll'，，这样就能接上对'scroll'定义的函数了，，666
	$(window).trigger('scroll');
	//当点击底部标签时候，执行方法，其中offset()获取匹配元素在当前视口的相对偏移,返回的是一个对象，有两个属性top,left 
	//animate,的第二个属性当然我们也可以设置'slow','normal'或'fast' 
	$('#findme').click(function () { 
			$('html,body').animate( 
				{scrollTop:$('footer').offset().top}, 2000 ); 
	})
	
	
})




