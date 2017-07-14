(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //input点击跳转至学校搜索页
    $('.search').on('click',function () {
        window.location.href = '';
    });
    //立即选号按钮跳转
    $('.sBtn1').on('click',function () {
        window.location.href = '';
    });
    $('.sBtn2').on('click',function () {
        window.location.href = '';
    });
});
