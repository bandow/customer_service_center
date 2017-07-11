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

var flag=false;
var btn=document.getElementById("btn");
var btnLi=btn.getElementsByTagName("li");
var selected=document.querySelector(".selected");
var line=document.querySelectorAll(".line");
var submitSuccess=document.querySelector(".submit-success");

for(var i=0;btnLi.length>i;i++){
	btnLi[i].index=i;
	btnLi[i].onclick=function(){
		if(!flag){
			for(var j=0;btnLi.length>j;j++){
				btnLi[j].className="";
			}
			this.className="active";
			if(this.index==0){
				selected.style.display="none";
				submitSuccessShow();
			}else if(this.index==1){
				selected.style.display="block";
				submitSuccessHide();
			}
		}
		flag=true;
	}
}

for(var i=0;line.length>i;i++){
	line[i].onclick=function(){
		for(var j=0;line.length>j;j++){
			line[j].className="line";
		}
		this.className="line active";
		submitSuccessShow();
		selected.style.display="none";
	}
}

function submitSuccessShow(){
	submitSuccess.className="submit-success on";
	setTimeout(function(){
		submitSuccess.style.display="none";
	},1000);
}
function submitSuccessHide(){
	setTimeout(function(){
		submitSuccess.style.display="block";
	},1000);
	submitSuccess.className="submit-success";
}