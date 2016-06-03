
require('./lip/spa.min.js');
require('./lip/swiper-3.3.1.min.js');
require('./views/index.js');
require('./views/guide.js');

require('./views/home.js');
require('./views/member.js');
require('./views/search.js');
require('./views/shop.js');
require('./views/classification.js');


// 配置视图的信息
SPA.config({
  indexView: 'guide'
});
