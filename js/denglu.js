$(function(){

$("#zz").click(function(){
    var aa=$("#zz-1").val();
    var bb=$("#zz-2").val();
    if(aa===""||bb===""){
alert("请正常输入")

    }else{
        var aab=localStorage.getItem("zc-1");
        var bbc=localStorage.getItem("zc-2");
        if(aa===aab){
          if(bb===bbc){
            window.location.href="https://www.baidu.com"

        }else{
              alert("密码错误")
          }

    }else{
            alert("账号")
        }


}


})

});