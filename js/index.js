$(function(){
    $('.content1 img').fadeIn(1500);

    // 点击关注我们按钮

    $('.content1 .careBtn').click(function(){
        $('.content1').fadeOut(800);
        $('.content2').fadeIn(800);
    })

    //点击content2的我知道了按钮

    $('.content2 .kownBtn').click(function(){
        $('.content2').fadeOut(800);
        $('.content1').fadeIn(800);
    })

    //点击分享你的gif

    $('.content1 .shareBtn').click(function(){
        $('.content1').fadeOut(800);
        $('.content3').fadeIn(800);
    })

    //点击content3的我知道了按钮

    $('.content3 .kownBtn').click(function(){
        $('.content3').fadeOut(800);
        $('.content1').fadeIn(800);
    })
})

