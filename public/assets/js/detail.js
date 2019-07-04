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

    const id = location.search .split("=")[1];

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