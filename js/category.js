window.addEventListener("load", function () {
  //初始化左侧上下滑动的代码
  var swiper = new Swiper('.category-left .swiper-container', {
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
  });
  //初始化右侧上下滑动的代码
  var swiper = new Swiper('.category-right .swiper-container', {
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    mousewheel: true,
  });


  //左边的滑动效果
  /* 
   实现分类左侧点击功能： 点击当前的菜单要位移到 当前菜单吸顶的位置
   1. 默认插件使用translate3d设置的位移
   2. 要位移多少距离 =  当前点击的li的下标 * li的高度
   3. 设置当前swiper-wrapper 元素的位移属性上
   实现思路
      1. 给所有li添加点击事件 拿到当前点击li的索引
      2. 拿到当前li的高度
      3. 计算位移距离 =  li的索引+li的高度
      4. 获取当前swiper-wrapper元素设置位移
      5. 判断当前位移的距离是否超过了最小位移的距离(往上位移负值) 如果超过了就 设置为最小位移的距离
      6. 如果需要过渡在给swiper-wrapper添加一个过渡效果
      7. 获取所有li删除active类名
      8. 给当前li添加一个active类名
   */
  //获取到所有的li
  var lis = document.querySelectorAll(".category-left li");
  //分类的左边
  var categoryLeft = document.querySelector(".category-left");
  //获取swiper-wrapper 装滑动元素的大盒子 ,将计算好的偏移值赋值给translateY;
  var swiperWrap = document.querySelector(".category-left .swiper-wrapper");
  for (var i = 0; i < lis.length; i++) {
    lis[i].index = i;

    lis[i].addEventListener("click", function () {
      var index = this.index;
      var translateY = -index * this.offsetHeight;
      var minTranslateY = categoryLeft.offsetHeight - this.parentNode.offsetHeight;
      //  console.log(minTranslateY);
      if (translateY <= minTranslateY) {
         translateY =  minTranslateY ;
      }
      // console.log(translateY);
      
      console.log(swiperWrap);
      
      swiperWrap.style.transform = 'translate3d(0px,'+ translateY +'px,0px)';
      swiperWrap.style.transition = "all 0.3s";

      for (var i = 0; i < lis.length; i++) {
        lis[i].classList.remove("active");
      }
      this.classList.add("active");
    })

  };





})