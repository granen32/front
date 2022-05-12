$( document ).ready(function() {
    // 신규 gnb 작업
    let asdieOpen = $(".hamber__menu");
    let asdieMenu = $(".aside_right");
    let dim = $(".sitemap__dim--box");
    asdieOpen.unbind().bind("click",function(){
        $(".breadcrumb").hide();
        asdieMenu.show();
        asdieMenu.children(".gnb_wrap").animate({"right":"0%"},200);
        dim.fadeIn();
        $("body").css("position", "fixed");
        init_depth_event()
    });
    // 네비게이션 오픈
    $('.btn_w').click(function(){
        if ($(".breadcrumb").is(":visible") == false)
        {
            $('.breadcrumb').fadeIn(150,function(){
               $('.breadcrumb__list').slideDown();
               $("body").css({"overflow":"hidden"});
           });
        }
        else if($(".breadcrumb").is(":visible") == true)
        {
            $('.breadcrumb').fadeOut(150,function(){
                $('.breadcrumb__list').slideUp();
                $("body").css({"overflow":"auto"});
            });
        }
        else
       {
           $('.breadcrumb__list').hide();
           $(".breadcrumb").hide();
           $("body").css({"overflow":"auto"});
       }
    });


    // lnb 작업
    // 서브메뉴 3뎁스 토글
    $('.breadcrumb__list dd a').unbind().bind("click",function(){
        if($(this).parent().hasClass('toggle')) {
            $(this).siblings('.depth_3').slideToggle();
            $(this).children().find('.icon').toggleClass("on");
        }
    });



    // select_box
	let selectTarget = $('.select_box select');
	selectTarget.change(function(){
		let select_name = $(this).children('option:selected').text();
		$(this).siblings('label').text(select_name);
        const input_self = $('.email_list .select_box .input_box');
        const select_self = $('.email_list .select_box select');
        if(select_self.val() == 'input_self'){
            select_self.fadeOut();
            input_self.fadeIn();
        }else {
            input_self.fadeOut();
        }
	});

	// input_box 
	let inputTarget = $('.input_box input[type="text"], .input_box input[type="password"]');
	inputTarget.on('focus', function(){
		$(this).siblings('label').fadeOut('fast');
	})
	inputTarget.on('focusout', function(){
		if($(this).val() == ''){
			$(this).siblings('label').fadeIn('fast');
		}
	});
	inputTarget.each(function(){
		if(!($(this).val() == '')){
			$(this).siblings('label').css('display','none');
		}
	});
	inputTarget.on('textchange',function(){
		$(this).siblings('label').fadeOut('fast');
	});

    // file_box
    let fileTarget = $(".file_box input[type=file]");
    fileTarget.on('change', function(){
        if(window.FileReader){
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }
        $(this).siblings('.upload-name').val(filename);
    });
});

function init_depth_event()
{
     $('.scroll_box .left_side > li a').unbind().bind("click",function(){

        var index_call = $(this).parent('li').index();

        if(!$(this).parent('li').hasClass('active')) {
            $(this).parent('li').siblings().removeClass('active');
            $(this).parent('li').addClass('active');
            $('.gnb_wrap .scroll_box .right_side > li').removeClass('active');
            $('.gnb_wrap .scroll_box .right_side > li').eq(index_call).addClass('active');
        }
    });

    $('.depth_2 > li > a').unbind().bind("click",function(){

        if(!$(this).parent('.toggle').hasClass('active')) {
            $('.depth_2 > li.toggle').removeClass('active');
            $('.depth_3').slideUp();
            $(this).next('.depth_3').slideDown();
            $(this).parent('.toggle').addClass('active');
        } else {
            $(this).next('.depth_3').slideUp();
            $(this).parent('.toggle').removeClass('active');
        }
    });
}

function sitemap_close()
{
    $('.aside_right .gnb_wrap').animate({"right":"-100%"},200);
    $('.aside_right').hide();
    $("body").css("position", "relative");
}




function select_jisa(obj)
{
	location.href="/html/duostory/browse.asp?ntype=" + $(obj).val();
}
function select_family(obj)
{
	if ($(obj).val()!="")
	{
		window.open($(obj).val());
	}
}

//스크롤 이벤트
$(window).scroll(function() {
    if ($(this).scrollTop () > 20)
        {
            $(".lnb").show();
        }
        else
        {
            $(".lnb").hide();
            
        }
    });	