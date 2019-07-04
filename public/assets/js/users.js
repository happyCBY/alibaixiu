
//获得添加用户按钮
var btn_add = document.querySelector('#btn_add');
//获得上传图片按钮
var avatar = document.querySelector('#avatar');

//获得图片地址提交隐藏域
// var hidden_img = document.querySelector('#hidden_img');

//图片上传
$(".update").on("change", ".avatar", function () {
    var formData = new FormData();
    formData.append("avatar", this.files[0]);

    $.ajax({
        type: "post",
        url: "/admin/img_add",
        data: formData,
        //不设置参数类型，因为formdata会自动设置好
        contentType: false,
        //阻止$.ajax函数解析参数，因为是二进制的参数，所以不能解析
        processData: false,
        success: function (data) {
            //获得图片显示标签
            var img = document.querySelector('.img');
            console.log(img);

            //获得服务器返回的图片地址,显示图片
            img.src = data;

            var html = template("script_img", { img_url: data });
            $("#hid_img").html(html);
        }
    })
})

//提交表单
btn_add.onclick = function () {
    check("user");
};

//显示编辑页面
$("#tbody").on("click", "a.btn-default", function () {
    //获得要编辑用户得id
    var id = $(this).attr("data_id");
    $.ajax({
        type: "get",
        url: `/admin/update/${id}`,
        success: function (data) {
            var html = template("script_update", { data });
            $(".update").html(html);
        }
    })

});

//提交修改用户的表单
$(".update").on("click", ".btn_update", function () {
    check("update");
})

//删除用户
$("#tbody").on("click", ".delete_user", function () {
    const boolean = confirm("是否删除用户");
    if (boolean) {
        $.ajax({
            type: "delete",
            url: "/admin/user",
            data: {
                id: $(this).attr("data_id")
            },
            success: function (data) {
                alert(data);
                location.reload();
            }
        })
    }
})
refresh();
//刷新列表
function refresh() {
    $.ajax({
        type: "get",
        url: "/admin/user",
        success: function (data) {
            var html = template("list_user", { data });
            $("#tbody").html(html);
        }
    })
}
//添加/修改用户
function check(url) {
    //获得email标签
    var email = document.querySelector('input[name=email]');
    //获得用户名标签
    var username = document.querySelector('input[name=username]');
    //获得密码框
    var pwd = document.querySelector('input[name=pwd]');
    //获得添加用户表单标签
    var form = document.querySelector('form[name=add_user]');

    if (email.value.trim().length == 0) {
        alert("请填写邮箱");
        return;
    }
    else if (username.value.trim().length == 0) {
        alert("请输入用户名");
        return;
    } else if (pwd.value.trim().length == 0) {
        alert("请输入密码");
        return;
    } else {
        const add_user_data = $(form).serialize();
        $.ajax({
            type: "post",
            url: `/admin/${url}`,
            data: add_user_data,
            success: function (data) {
                alert(data);
                location.reload();
            },
            error: function (error) {
                alert(error.responseText);
            }
        })
    }
}
