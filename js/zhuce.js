$(function(){

$("#zhuce").click(function(){

    var a=$(".zc-1").val();
    var b=$(".zc-2").val();
    var c=$(".zc-3").val();
    var  aba= /^[A-Za-z0-9]+$/;
    if(a===""||b===""||c===""){
        alert("Ҫ���������")
    }

    else{
        if(aba.test(a)){
            //alert("ͨ��")
            if(aba.test(b) && b.length>=6 && b.length<=12){
              alert("yes")

                if(b===c){
                   localStorage.setItem("zc-1",a);
                    localStorage.setItem("zc-2",b);

                    //��ձ���ʼ
                    $(".zc-1").val('');
                    $(".zc-2").val('');
                    $(".zc-3").val('');
                    //��ձ�����
                }



            }else{
                alert("�����������벻�淶")
            }

        }else{
            alert("�����û������벻�淶")
        }


    }


})



});