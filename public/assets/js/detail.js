//获得文章的id
const id = location.search .split("=")[1];
//显示文章详情
function show_article_details(){
    const str = `
    <div class="breadcrumb">
        <dl>
        <dt>当前位置：</dt>
        <dd><a href="list.html?id={{data.category._id}}">{{data.category.title}}</a></dd>
        <dd>{{data.title}}</dd>
        </dl>
    </div>
    <h2 class="title">
        <a href="javascript:;">{{data.connect}}</a>
    </h2>
    <div class="meta">
        <span>{{data.author.username}} 发布于 {{$imports.time(data.createAt)}}</span>
        <span>分类: <a href="list.html?id={{data.category}}">{{data.category.title}}</a></span>
        <span>阅读: ({{data.meta.views}})</span>
        <span>评论: ({{data.meta.comments}})</span>
    </div>
    `;

    $.ajax({
        type:'get',//get或post
        url:'/home/article/'+id,//请求的地址
        success:function(data){//成功的回调函数


            var html = template.render(str,{data});
            $(".article").html(html);
        }
    })
}
show_article_details();

var review = "";

//是否显示评论功能
function  if_show_comment(){
    $.ajax({
        type:'get',//get或post
        url:'/home/settings',//请求的地址
        success:function(data){//成功的回调函数
            review = data.review=="1"?0:1;
            if(data.ifComment==1) {
                var html = template("commerts",{data});
                $(".comment").html(html);
            }
        }
    })
}
if_show_comment();

$(".comment").on("click","input[type=button]",function (){
    var textarea_text = $(".textarea").val();

    $.ajax({
        type:'post',//get或post
        url:'/home/comment_add',//请求的地址
        data:{
            content: textarea_text,
            where:id,
            status: review
        },//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者
        success:function(data){//成功的回调函数
            console.log(data);
        },
        error: function (data){
            alert(data.responseText);
            location.href = "/admin/login.html";
        }
    })

})