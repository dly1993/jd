//页面加载的入口函数
window.addEventListener("load", function () {
    //需求,在滚动条滚动的距离在轮播图的范围内实现顶部的背景色透明度渐变
    // 设置顶部的透明度js代码
    // 获取轮播图的高度
    var slideHeight = document.getElementById("slide").offsetHeight;
    //获取顶部元素
    var header = document.getElementById("header");
    // 给window添加一个滚动事件
    window.addEventListener("scroll", setOpacity);
    setOpacity();

    function setOpacity() {
        //获取滚出去的距离  因为有兼容性短路运算法
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        //计算透明度值
        var opacity = scrollTop / slideHeight;
        //    console.log(opacity);
        if (opacity <= 1) {
            header.style.backgroundColor = 'rgba(222, 24, 27, ' + opacity + ')';
        } else {
            header.style.backgroundColor = 'rgba(222, 24, 27, 1)';
        }

    }

    //轮播图的js
    // 4. 调用JS的初始化函数初始化swiper
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项 会自动在轮播图所有图片容器的最前面和最后面多放一张  第一张就是最后一张 最后一张就是第一张
        //初始化自动轮播图 参数也是一个对象 
        autoplay: {
            delay: 3000, //间隔时间 
            stopOnLastSlide: false, //在最后一张是否要停止  如果开启loop模式无效
            disableOnInteraction: false, // 是否要当(交互的时候)滑动的时候禁用自动轮播图
        },
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },

        // 如果需要滚动条
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    })

    //倒计时的代码

    //获取未来的规定时间  加getTime()以毫秒为单位
    var futureTime = new Date(2018, 10, 14, 17, 00, 00).getTime();
    // console.log(futureTime);//42186000000
    //获取当前时间
    var nowTime = new Date().getTime();
    // console.log(nowTime);  //1542179666126
    //获取未来时间跟当前时间的差多少秒  毫秒/1000 得到秒
    var time = Math.floor((futureTime - nowTime) / 1000);
    //获取页面显示时分秒的所有span元素   所有元素用标签选择器document.querySelectorAll()
    var spans = document.querySelectorAll(".seckill-time span");
    //定义定时器  让时间减减
    setInterval(function () {
        //每过一秒,时间减减
        time--;

        if(time <= 0){
            time = 7200;
        }
        //求当前总时间的小时数 - 总时间/3600   一个小时3600秒
        var hour = Math.floor(time / 3600)
        //求分钟  使用总时间/60  一分钟60秒得到需要的总分钟 但如果超过一个小时就会把60分钟*超过的几个小时  所有要%60(除以60取余数)
        var minute = Math.floor(time / 60 % 60);
        //求秒数, 总时间 % 60  因为秒数是很大的数字,%60
        var second = time % 60;
        //把计算好的数字赋值给span标签的文字内容

        spans[0].innerHTML = Math.floor(hour / 10);
        spans[1].innerHTML = Math.floor(hour % 10);
        spans[3].innerHTML = Math.floor(minute / 10);
        spans[4].innerHTML = Math.floor(minute % 10);
        spans[6].innerHTML = Math.floor(second / 10);
        spans[7].innerHTML = Math.floor(second % 10);


    }, 1000)



})