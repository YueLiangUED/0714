(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //input点击跳转至学校搜索页
    $('.search1').on('click',function () {
        $('.select-school').slideDown(0,function () {
            $('#top').slideUp();
        });
    });
    //左上角关闭当前页面并打开另一个页面
    $("#close").click(function () {
        $('#top').slideDown(200,function () {
            $('.select-school').slideUp();
        });
    });
    $('.classify>div>ul>li>a').click(function (e) {
        $('#top').slideDown(200,function () {
            $('.select-school').slideUp();
        });
        $('html,body').animate({scrollTop:0}, 0);
        $('.search1>input').val($(e.target).text());
    });
    //右侧索引首字母搜索功能
    function search() {
        var data = [],
            lis = '';
        $(".classify h2").each(function () {
            data.push($(this).html());
        });
        //console.log(data.length);
        for(var i = 0; i<data.length; i++){
            lis = '<li>'+data[i]+'</li>';
            $(".index ul").append(lis);
        }

        //为动态创建的li和左侧首字母添加ID
        function createId() {
            var i = 1;
            $(".classify h2").each(function () {
                $(this).attr("id", "go" + i++);
            });
            var i = 1;
            $(".index ul li").each(function () {
                $(this).attr("data-to","go" + i++);
            })
        }
        createId();

        //为每个动态添加的索引字母(li)绑定点击事件
        $(".index ul").on("click","li",function (e) {
            var target = e.target;
            var id = $(target).data("to");
            //利用animate实现点击跳转到页面指定位置
            $('html,body').animate({
                scrollTop:$('#'+id).offset().top
            }, 100);
        })
    }
    setTimeout(function(){search();},0);
    //立即选号按钮跳转
    $('.sBtn1').on('click',function () {
        window.location.href = '';
    });
    $('.sBtn2').on('click',function () {
        window.location.href = '';
    });
});
