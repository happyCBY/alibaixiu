 //显示轮播图
 function show_img() {
    $.ajax({
      type: 'get',//get或post
      url: '/home/index_img',//请求的地址
      success: function (data) {//成功的回调函数
        console.log(data);

        var html = template("img_show", { data });
        $(".ul_show").html(html);

        var swiper = Swipe(document.querySelector('.swipe'), {
          auto: 3000,
          transitionEnd: function (index) {
            // index++;
            $('.cursor span').eq(index).addClass('active').siblings('.active').removeClass('active');
          }
        });

        // 上/下一张
        $('.swipe').on('click', ".arrow", function () {
          var _this = $(this);
          if (_this.is('.prev')) {
            swiper.prev();
          } else if (_this.is('.next')) {
            swiper.next();
          }
        })
      }
    })
  }
  show_img();

//显示最新数据
function show_newArticle(){
var str = `
{{each data}}
<div class="entry">
  <div class="head">
    <span class="sort">{{$value.category.title}}</span>
    <a href="detail.html?id={{$value._id}}">{{$value.title}}</a>
  </div>
  <div class="main">
    <p class="info">{{$value.author.username}} 发表于 {{$imports.time($value.createAt)}}</p>
    <p class="brief">
      {{$value.content}}
    </p>
    <p class="extra">
      <span class="reading">阅读({{$value.meta.views}})</span>
      <span class="comment">评论({{$value.meta.comments}})</span>

        <i class="fa fa-thumbs-up"></i>
        <span class = "likes" data_id="{{$value._id}}">赞({{$value.meta.likes}})</span>

      <a href="detail.html?id={{$value._id}}" class="tags">
        分类：<span>{{$value.category.title}}</span>
      </a>
    </p>
    <a href="detail.html?id={{$value._id}}" class="thumb">
      <img src="{{$value.thumbnail}}" alt="">
    </a>
  </div>
</div>
{{/each}}
`;
$.ajax({
  type:'get',//get或post
  url:'/home/newArticle',//请求的地址
  success:function(data){//成功的回调函数
    template.defaults.imports.time = time;
    var html = template.render(str,{data});
    $(".newArticle").html(html);
  }
})
}
show_newArticle();
