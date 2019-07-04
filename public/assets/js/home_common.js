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
