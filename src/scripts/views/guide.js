var tplGuide = require('../tpl/guide.string');
//require('./lip/swiper-3.3.1.min.js');

//定义一个视图
SPA.defineView('guide',{
	html:tplGuide,
	// 添加插件
	plugins: ['delegated'],
	
	// 绑定事件
	bindActions: {
	  	'goto.index': function () {
	      SPA.open('index');
	    }
	}
});