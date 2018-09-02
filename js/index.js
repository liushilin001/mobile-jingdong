//入口函数
window.addEventListener('load', function () {
    var jd = new JD();
    jd.searchGradient();
    jd.downTime();
    jd.slide();
});

//创建一个京东的构造函数
var JD = function () {

}

//给JD构造函数的原型对象添加方法
JD.prototype = {
    //顶部搜索框渐变功能
    searchGradient: function () {
        //给滚动条添加滚动事件
        window.addEventListener('scroll', function () {
            //获取滚动条滚动的距离
            var scrollTop = document.body.scrollTop || this.document.documentElement.scrollTop;
            //获取轮播图的高度
            var slideHeight = document.querySelector('#slide').offsetHeight;
            var opacity = 0;
            //判断当前滚动距离是否小于轮播图高度
            if (scrollTop < slideHeight) {
                //透明度等于 滚动距离 / 轮播图高度
                opacity = scrollTop / slideHeight;
            } else {
                //透明度大于轮播图高度,默认透明度为1
                opacity = 1;
            }
            //设置顶部搜索栏样式
            document.querySelector('#header').style.backgroundColor = 'rgba(222,24,27,' + opacity + ')';
        });
    },

    //实现倒计时功能
    downTime: function () {
        //月份是从0开始的 0-11
        //获取未来时间(2018年8月30日23点)的毫秒数
        var futureTime = new Date(2018, 7, 30, 15, 0, 0).getTime();
        //获取当前时间的毫秒数
        var nowTime = new Date().getTime();
        //使用(未来时间-当前时间) /1000求得秒数
        var time = (futureTime - nowTime) / 1000;
        var spans = document.querySelectorAll('.seckill-time span');
        //设置定时器 每秒执行一次
        var timeID = setInterval(function () {
            time--;
            //倒计时到了0超过的清除
            if (time <= 0) {
                time = 0;
                clearInterval(timeID);
            }
            //计算总时间的时分秒
            var hour = Math.floor(time / 3600) % 24;

            var minute = Math.floor(time / 60) % 60;
            var second = time % 60;
            //设置时分秒
            spans[0].innerHTML = Math.floor(hour / 10);
            spans[1].innerHTML = Math.floor(hour % 10);
            spans[3].innerHTML = Math.floor(minute / 10);
            spans[4].innerHTML = Math.floor(minute % 10);
            spans[6].innerHTML = Math.floor(second / 10);
            spans[7].innerHTML = Math.floor(second % 10);
        }, 1000);

    },

    //轮播图功能
    slide: function () {

        var mySwiper = new Swiper('.swiper-container', {
            //自动轮播
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
              },
            //无缝轮播
            loop: true,

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            }
 
        });

    }
}