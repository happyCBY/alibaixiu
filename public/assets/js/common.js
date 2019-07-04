//获得退出登录按钮
var sign_out = document.querySelector('.sign_out');

sign_out.onclick = function(){
  //判断用户是否退出
  if(confirm("你真的要退出吗")){
    $.ajax({
    type:'get',//get或post
    url:'/admin/sign_out',//请求的地址
    success:function(result){//成功的回调函数
      if(result) {
        //用户退出返回登录界面
        location.href = "login.html";
      }
    },
    error: function(){
      alert("发送未知错误，退出登录失败");
    }
  })
  };
}

//获得用户头像
function setUserImg(){
  $.ajax({
    type:'get',//get或post
    url:'/admin/userImg',//请求的地址
    success:function(data){//成功的回调函数
      $(".avatar").prop("src",data.avatar);
      $(".name").html(data.username);
    }
  })
}
setUserImg();