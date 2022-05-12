
'use strict';
window.addEventListener('DOMContentLoaded', function()
{
	// 탭 메뉴
	const tabList = document.querySelectorAll('.contents__tab--box--list');
	// const tabContent = document.querySelectorAll(".contents__tab--inner");

	tabList.forEach(function(item) {
		item.addEventListener("click", tabHandler);
	});
	
	function tabHandler(item){
		const tabTarget = item.currentTarget;
		// const target = tabTarget.dataset.tab;

		tabList.forEach(function(title) {
			title.classList.remove("on");
		});
		// tabContent.forEach(function(target){
		// 		target.classList.remove("on");
		// });
		// document.querySelector("#" + target).classList.add("on");
		tabTarget.classList.add("on");
	}

	// 탭 리스트 해당 클래스 붙일시 탭메뉴 형성
	// tab__list 탭 메뉴 타이틀
	// 탭메뉴 콘텐츠 내역
	const tabList_2 = document.querySelectorAll('.tab__list');
	const tabContent_2 = document.querySelectorAll(".tab__inner");

	tabList_2.forEach(function(item) {
		item.addEventListener("click", tabHandler_2);
	});
	
	function tabHandler_2(item){
		const tabTarget_2 = item.currentTarget;
		const target_2 = tabTarget_2.dataset.tab;

		tabList_2.forEach(function(title) {
			title.classList.remove("on");
		});
		tabContent_2.forEach(function(target_2){
			target_2.classList.remove("on");
		});
		document.querySelector("#" + target_2).classList.add("on");
		tabTarget_2.classList.add("on");
	}
	
	// qa_list 탭 콘텐츠 목록 목록
	let qaTitle = document.querySelectorAll('.qa__list--title');
	let qaContent = document.querySelectorAll('.qa__list--box');
	qaTitle.forEach(function(e){
		e.addEventListener("click", qaHandler);
	});
	function qaHandler(e){
		const qaTarget = e.currentTarget;
		const qaList = qaTarget.nextElementSibling;
		qaTitle.forEach(function(title) {
			title.classList.remove("on");
		});
		qaContent.forEach(function(content) {
			content.classList.remove("on");
		});
		qaTarget.classList.toggle("on");
		qaList.classList.toggle("on");
	}
});

//개인정보/마케팅동의 팝업실행
function popup_privacy_newpage(vtype)
{
	if (vtype==0)
	{
		window.open("/customer/privacy_popup.asp?vt=basic","pop_privacy");
	}else if (vtype==1)
	{
		window.open("/customer/privacy_popup.asp?vt=addon","pop_privacy");
	}else if (vtype==2)
	{
		window.open("/customer/privacy_popup.asp?vt=join_basic","pop_privacy");
	}
	else if (vtype==3)
	{
		window.open("/customer/privacy_popup.asp?vt=join_addon","pop_privacy");
	}

}

$(document).ready(function() {
	// 매니저 인포
	let managerBtn = $('.btn-row--manager_info');
	let dimArea = $('.dim_area');
	let managerInfo = $('.manager_info--introduce');
	managerBtn.unbind().bind("click",function(){
	  dimArea.fadeIn();
	  managerInfo.fadeIn();
	});
	$('.manager_info--introduce .btn-row--add_btn').click(function(){
	  dimArea.fadeOut();
	  managerInfo.fadeOut();
	});

});
  
  
  
