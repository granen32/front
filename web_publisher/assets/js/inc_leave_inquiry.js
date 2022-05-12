// 바로 문의가기 남기기 
let inquiry_step = 0;
function inquiryNextstep(){
	switch(inquiry_step)
	{
	case 0:
		setTimeout(function(){
			$(".leave-inquiry__step").eq(inquiry_step).hide();
			inquiry_step = inquiry_step + 1;
			$(".leave-inquiry__step").eq(inquiry_step).show();
			$(".prev").css("visibility", "visible");
		},500);
	break;

	case 1:
		setTimeout(function(){
			$(".leave-inquiry__step").eq(inquiry_step).hide();
			inquiry_step = inquiry_step + 1;
			$(".leave-inquiry__step").eq(inquiry_step).show();
		},500);
	break;

	case 2:
		setTimeout(function(){
			$(".leave-inquiry__step").eq(inquiry_step).hide();
			inquiry_step = inquiry_step + 1;
			$(".leave-inquiry__step").eq(inquiry_step).show();
		},500);
	break;
	}
}

function inquiryPrevstep(){
	switch(inquiry_step)
	{
	case 0:
		alert(inquiry_step);
	break;

	case 1:
		setTimeout(function(){
			$(".leave-inquiry__step").eq(inquiry_step).hide();
			inquiry_step = inquiry_step - 1;
			$(".leave-inquiry__step").eq(inquiry_step).show();
			$(".prev").css("visibility", "hidden");
		},500);
	break;

	case 2:
		setTimeout(function(){
			$(".leave-inquiry__step").eq(inquiry_step).hide();
			inquiry_step = inquiry_step - 1;
			$(".leave-inquiry__step").eq(inquiry_step).show();
		},500);
	break;

	case 3:
		setTimeout(function(){
			$(".leave-inquiry__step").eq(inquiry_step).hide();
			inquiry_step = inquiry_step - 1;
			$(".leave-inquiry__step").eq(inquiry_step).show();
		},500);
	break;
	}
}