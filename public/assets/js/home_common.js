//热门推荐
function hot() {
    var str = `
    {{each data}}
        <li>
            <a href='detail.html?id={{$value._id}}'>
            <img src='{{$value.thumbnail}}'>
            <span>{{$value.title}}</span>
            </a>
        </li>
    {{/each}}
    `
    $.ajax({
        type: 'get',//get或post
        url: '/home/hot_article',//请求的地址
        success: function (data) {//成功的回调函数
            var html = template.render(str, { data });
            $(".hot_recommend").html(html);
        }
    })
}
hot();

//随机推荐
function randerRecommend() {
    const str = `
    {{each data}}
    <li>
        <a href="detail.html?id={{$value[0]._id}}">
        <p class="title"> {{$value[0].title}} </p>
        <p class="reading">阅读({{$value[0].meta.views}})</p>
        <div class="pic">
            <img src="{{$value[0].thumbnail}}" alt="">
        </div>
        </a>
    </li>
    {{/each}}
    `;

    $.ajax({
        type: 'get',//get或post
        url: '/home/randerRecommend',//请求的地址
        success: function (data) {//成功的回调函数
            var html = template.render(str, { data });
            $(".random").html(html);
        }
    })
}
randerRecommend()


//最新评论
function new_comment() {
    var str = `
    {{each data}}
    <li>
    <a href="detail?id={{$value.where}}">
        <div class="avatar">
        <img src="{{$value.author.avatar}}" alt="">
        </div>
        <div class="txt">
        <p>
            <span>{{$value.author.username}}</span>{{$imports.time($value.time)}}说:
        </p>
        <p>{{$value.connect}}</p>
        </div>
    </a>
    </li>
    {{/each}}
    `;

    $.ajax({
        type:'get',//get或post
        url:'/home/new_comment',//请求的地址
        success:function(data){//成功的回调函数
            var html = template.render(str,{data});
            $(".new_comment").html(html);
        }
    })
  }
  new_comment();

//导航分类显示
function nav_show(){
    const str = `
    {{each data}}
        <li><a href="list.html?id={{$value._id}}"><i class="fa {{$value.classname}}"></i>{{$value.title}}</a></li>
    {{/each}}
    `;

    $.ajax({
        type:'get',//get或post
        url:'/home/nav',//请求的地址
        success:function(data){//成功的回调函数
            var html = template.render(str,{data});
            $(".nav").html(html);
        }
    })
}
nav_show();


//点赞功能
$(".newArticle").on("click",".likes",function (){
    const id = $(this).attr("data_id");
    const that = $(this);
    //取出赞里面的数字
    var num = $(this).html().split("(")[1].split(")")[0]-0;

    $.ajax({
        type:'get',//get或post
        url:'/home/likes/'+id,//请求的地址
        success:function(data){//成功的回调函数
            num+=1;
            //让页面的赞的数量增加
            that.html("赞("+num+")");
        }
    })
});


//搜索功能

$(".find").on("click",function (){

    var value = $(this).siblings(".keys").val();
    location.href = "search.html?value="+value;

})


//修改时间日期
function time(times) {
    var date = new Date(times);
    return date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
}