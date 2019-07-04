//网站统计数据
function statistics(){
    $.ajax({
        type:'get',//get或post
        url:'/admin/statistics',//请求的地址
        success:function(data){//成功的回调函数
            var html = template("art_statistics",data);
            $(".statistics").html(html);
        }
    })
}
statistics();