$(function(){

$("#zhuce").click(function(){

    var a=$(".zc-1").val();
    var b=$(".zc-2").val();
    var c=$(".zc-3").val();
    var  aba= /^[A-Za-z0-9]+$/;
    if(a===""||b===""||c===""){
        alert("要完整输入表单")
    }

    else{
        if(aba.test(a)){
            //alert("通过")
            if(aba.test(b) && b.length>=6 && b.length<=12){
              alert("yes")

                if(b===c){
                   localStorage.setItem("zc-1",a);
                    localStorage.setItem("zc-2",b);

                    //清空表单开始
                    $(".zc-1").val('');
                    $(".zc-2").val('');
                    $(".zc-3").val('');
                    //清空表单结束
                }



            }else{
                alert("您的密码输入不规范")
            }

        }else{
            alert("您的用户名输入不规范")
        }


    }


})



});