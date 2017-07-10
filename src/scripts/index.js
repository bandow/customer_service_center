import '../../src/sass/index.scss';
import '../../src/plugins/swiper.min.css';
import '../../src/plugins/swiper.min.js';

var mySwiper = new Swiper('.itinerary-swiper-container',{
	watchSlidesProgress : true,
	watchSlidesVisibility : true,
	spaceBetween : 10,
	slidesPerView :1.2,
});
var mySwiperRecommendHouse = new Swiper('.question-swiper-container',{
	watchSlidesProgress : true,
	watchSlidesVisibility : true,
	spaceBetween : 10,
	slidesPerView :3.5,
});