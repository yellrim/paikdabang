 // login 닫기
 $('#btn-reset').on({
    'click':function(){
        $('.login').css('display','none');
    }
})
// 로그인창 호출
$('#btn-login').on({
    'click':function(){
        $('.login').css('display','block');
        return false;
    }
})

$('.slider').bxSlider();

// 모달닫기
$('.btn-close').on({
    'click':function(){
        $('.popup-par').css('display','none');
        $('.wrap').css('height','auto');
        if($('.chk-box input').is(':checked')){
            $.cookie('modal-popup', 'no', { expires: 1 });
        }
    }
})

if($.cookie('modal-popup') == 'no'){
    $('.wrap').css('height','auto');
}else{
    $('.popup-par').css('display','block');
}

