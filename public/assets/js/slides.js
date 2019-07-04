
//获得上传图片地址
$("#file").on("change", function () {
    var formData = new FormData();
    formData.append("avatar", this.files[0]);
    $.ajax({
        type: 'post',//get或post
        url: '/admin/img_add',//请求的地址
        data: formData,//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
        //告诉ajax不要处理formdata的参数
        processData: false,
        //告诉ajax不要设置参数类型
        contentType: false,
        success: function (data) {//成功的回调函数
            $("input[name=img]").val(data);
            console.log(data);

        }
    })
})
//添加网站轮播
$(".add_btn").on("click",function(){
    var formData = $("#wheel_planting").serialize();
    $.ajax({
        type:'post',//get或post
        url:'/admin/slides',//请求的地址
        data:formData,//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
        success:function(data){//成功的回调函数
            alert(data);
            location.reload();
        }
    })

})
//显示网站轮播
function slides_show (){
    $.ajax({
        type:'get',//get或post
        url:'/admin/slides',//请求的地址
        success:function(data){//成功的回调函数
            var html = template("slides_art",{data});
            $("tbody").html(html);
        }
    })
}
slides_show();

//删除轮播图
$("tbody").on("click",".slides_delete",function(){
    const id = $(this).attr("data_id");
    $.ajax({
        type:'delete',//get或post
        url:'/admin/slides/'+id,//请求的地址
        success:function(data){//成功的回调函数
            alert(data);
            location.reload();
        }
    })

})