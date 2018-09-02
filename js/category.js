window.addEventListener('load', function() {
    var jd = new JD();
    jd.categoryLeftSwiper();
    jd.categoryRightSwiper();
    jd.categoryLeftClick();
});

var JD = function() {

}

JD.prototype = {
    // 分类左侧的滑动效果
    categoryLeftSwiper: function() {
        //调用swiper的初始化方法
        var swiper = new Swiper('.category-left .swiper-container', {
            //垂直方向滑动
            direction: 'vertical',
            //支持多个子元素一起滑动
            slidesPerView: 'auto',
            // 一次性滑动多个子元素
            freeMode: true,
            //支持鼠标滚轮
            mousewheel: true
        });
    },

    //左侧分类的点击效果
    categoryLeftClick: function(){
        //给所有的li添加点击事件
        var slideUl = document.querySelector('.category-left .swiper-slide');
        //给所有的li添加索引
        var lis = slideUl.children;
        
        //给父元素添加点击事件,最终捕获的是子元素
        slideUl.addEventListener('click',function(e){
            // console.log(e.target.parentNode);
            //给所有的li删除active类名
            for(var i = 0; i < lis.length; i++){
                lis[i].classList.remove('active');
                lis[i].index = i;
            }
            //给当前点击的类添加active类名
            e.target.parentNode.classList.add('active');
            //获取当前li的索引与高度
            var liIndex = e.target.parentNode.index;
            var liHeight = e.target.parentNode.offsetHeight;
            //计算当前要位移的距离,记得后面要加单位
            var translateY = -liIndex * liHeight;
            //计算最大位移高度 父元素固定高度-子元素不固定高度
            var maxTranslateY = document.querySelector('.category-left').offsetHeight - slideUl.offsetHeight;
            //判断:如果当前位移小于最大位移,就让当前位移的值等于最大位移
            if(translateY < maxTranslateY){
                translateY = maxTranslateY;
            }
            //把位移距离设置到滑动的swiper-wrapper身上
            document.querySelector('.category-left .swiper-wrapper').style.transform = 'translate3d(0px, '+translateY+'px, 0px)';
            //吸顶的时候添加过渡的效果
            document.querySelector('.category-left .swiper-wrapper').style.transition = 'all 0.3s';
        })
    },
    //分类右侧的滑动效果
    categoryRightSwiper: function() {
        //调用swiper的初始化方法
        var swiper = new Swiper('.category-right .swiper-container', {
            //垂直方向滑动
            direction: 'vertical',
            //支持多个子元素一起滑动
            slidesPerView: 'auto',
            // 一次性滑动多个子元素
            freeMode: true,
            //添加滚动条
	        scrollbar: {
	            el: '.swiper-scrollbar',
	        },
            //支持鼠标滚轮
            mousewheel: true
        });
    }
}
