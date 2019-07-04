//显示网站设置
function settings_show(){
    $.ajax({
        type:'get',//get或post
        url:'/admin/settings',//请求的地址
        success:function(data){//成功的回调函数
            console.log(data);

            const {title,logo,ifComment,review,_id} = data;
            if(title) {
                $("input[name=logo]").val(logo);
                $("input[name=title]").val(title);
                $("input[name=ifComment]").val(ifComment);
                $("input[name=ifComment]").prop("checked",ifComment==1?true:false);
                $("input[name=review]").val(review);
                $("input[name=review]").prop("checked",review==1?true:false);
                $(".img_url").prop("src",logo);
            }
        }
    })
}
settings_show();
//添加网站设置
function settings_add() {
    //获得是否开启评论按钮
    const ifComment = $("input[name=ifComment]");
    //获得是否人工同意评论按钮
    const review = $("input[name=review]");

    ifComment.val(ifComment.prop("checked")==true?1:0);
    review.val(review.prop("checked")==true?1:0);

    var formData = $(".settings_form").serialize();

    if(ifComment.prop("checked")==false) {
        formData += "&ifComment=0";
    }
    if(review.prop("checked")==false) {

        formData += "&review=0";
    }

    $.ajax({
        type:'post',//get或post
        url:'/admin/settings',//请求的地址
        data:formData,//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
        success:function(data){//成功的回调函数
            alert(data);
        }
    })
}
//保存设置
$(".save_settings").on("click",function () {
    settings_add();
})

//上传文件图标
$("input[type=file]").on("change",function (){
    const formData = new FormData();
    formData.append("avatar",this.files[0]);
    $.ajax({
        type: "post",
        url: "/admin/img_add",
        data: formData,
        //不设置参数类型，因为formdata会自动设置好
        contentType: false,
        //阻止$.ajax函数解析参数，因为是二进制的参数，所以不能解析
        processData: false,
        success: function (data) {
            $("input[name=logo]").val(data);
            $(".img_url").prop("src",data);
        }
    })
})