var indexTpl = require("../tpl/index.string");
//定义一个视图

SPA.defineView('index',{
	html:indexTpl,
	
	plugins: ['delegated'],
	// 子视图的嵌套定义
	modules:[{
		name:'content',
		container:'.m-index-container',
		views:['home','search','shop','member','classification'],
		defaultTag: 'home'
	}],
	
	bindActions:{
		'switch.view': function(e){
			//视图切换方法
			this.modules.content.launch(e.data.tag);
//			console.log(e);
			$(e.el).addClass('active').siblings().removeClass('active');
		}
	}
	
});
 



