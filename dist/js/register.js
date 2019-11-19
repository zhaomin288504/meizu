define(["jquery","jquery-cookie"],function($){
    //轮播图
    function ajax(){
        var oBtn=$(".advbox .adv .bgt .box .neirong button ");
        var aInputs = $(".advbox .adv .bgt .box .neirong input");

        oBtn.click(function(){
            alert(1);
            $.ajax({
                type:"post",
                url:"C:\PHPnow-1.5.6.1428396605\htdocs\meizuPHP\register.php",
                data:({
                    username:aInputs.eq(0).val(),
                    password:aInputs.eq(1).val(),
                    repassword:aInputs.eq(2).val()
                }),
                success:function(result){
                    alert(result);
                },
                error:function(msg){
                    alert("error"+msg);
                }
            })
        })
        
    }
    return {
        ajax:ajax
    }
})
