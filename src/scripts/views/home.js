var homeTpl = require('../tpl/home.string');


//定义一个视图
SPA.defineView('home',{
	html:homeTpl,
	plugins: ['delegated'],
	
	bindEvents:{
		'beforeShow':function(){
			var homeSwiper = new Swiper('#home-swiper', {
				loop:true,
				autoplay:2000,
				autoplayDisableOnInteraction : false,
			})
		}
	},
	
//	bindEvents:{
//		'show':function(){
//			$.ajax({
//				type:"get",
//				url:'/api/getlivelist.php',
//				success:function(res){
//					console.log(res)
//				}
//			});
//		}
//	}
	
	
});