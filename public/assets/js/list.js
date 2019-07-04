//分类文章显示
function show_list(){
    const str = `
    {{if data.length!=0}}
    <h3>{{data[0].category.title}}</h3>
    {{each data}}
    <div class="entry">
    <div class="head">
      <a href="detail.html?id={{$value._id}}">{{$value.title}}</a>
    </div>
    <div class="main">
      <p class="info">{{$value.author.username}} 发表于 {{$imports.time($value.createAt)}}</p>
      <p class="brief">
      {{$value.connect}}
      </p>
      <p class="extra">
        <span class="reading">阅读({{$value.meta.views}})</span>
        <span class="comment">评论({{$value.meta.comments}})</span>
        <a href="detail.html?id={{$value._id}}" class="like">
          <i class="fa fa-thumbs-up"></i>
          <span>赞({{$value.meta.likes}})</span>
        </a>
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
    {{/if}}
    `;
    const id = location.search .split("=")[1];

    $.ajax({
        type:'get',//get或post
        url:'/home/show_list/'+id,//请求的地址
        success:function(data){//成功的回调函数
            var html = template.render(str,{data});
            $(".panel").html(html);
        }
    })
}
show_list();