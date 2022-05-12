var main_swiper;
var manager_Slider;
var media_Slider;
var numberOne;
var prime_slider;
var cfPoster_wrap
var member_interval;
var map;
var member_cnt = 0;
var married_cnt = 0;
var male_Slider;
var female_Slider;
var partnershipContents;
var sec4_first = true;

//숫자콤파 표시
function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//숫자카운트 표시 실행 (표시위치 아이디, 카운트 숫자)
function numberCounter(target_frame, target_number) 
{
	$({ val : 0 }).animate(
		{ 
			val : target_number 
		}, 
		{
			duration: 1000, //전체카운트 시간
			step: function() {
				var num = numberWithCommas(Math.floor(this.val));
				$("#" + target_frame).text(num);
		},
		complete: function() {
			var num = numberWithCommas(Math.floor(this.val));
			$("#" + target_frame).text(num);
		}
	});
}

function member_section_switch()
{
	var set_index;
	
	if ($('.all li').eq(0).hasClass("on") > 0)
	{
		set_index = 1;
	}
	else
	{
		set_index = 0;
	}

	$('.all li').removeClass("on");
	$('.all li').eq(set_index).addClass("on");

	$(".tabcontent").hide();
	$(".tabcontent").eq(set_index).show();
}

//세션별 분기 처리
function section_state_action(now_section)
{
	//swiper start & stop
	if (now_section == "sec1") //--메인
	{
		if(main_swiper)
		{
			main_swiper.autoplay.start();
			$(".main_img_slider01").addClass("active");
		}
	}
	else
	{
		if(main_swiper)
		{
			main_swiper.autoplay.stop();
		}
	}

	if(now_section == "sec2") //--브랜드
	{
		if(numberOne)
		{
			numberOne.autoplay.start();	
		}
	}
	else
	{
		numberOne.autoplay.stop();	
	}

	if (now_section == "sec3")
	{
		numberCounter("real_mem_count", member_cnt); 
		numberCounter("real_marry_count", married_cnt);
	}

	/*
	if (now_section == "sec4")
	{
		alert(sec4_first);
		if (sec4_first == true)
		{
			sec4_first = false;
			
			//시간차 오버 class 전환
			$(".duo_service a").eq(0).addClass("on");
			setTimeout(function(){
				$(".duo_service a").eq(0).removeClass("on");	
				$(".duo_service a").eq(1).addClass("on");
			},1000);
			setTimeout(function(){
				$(".duo_service a").eq(1).removeClass("on");		
				$(".duo_service a").eq(2).addClass("on");
			},2000);
			setTimeout(function(){
				$(".duo_service a").eq(2).removeClass("on");		
				$(".duo_service a").eq(3).addClass("on");
			},3000);
			setTimeout(function(){
				$(".duo_service a").eq(3).removeClass("on");		
			},4000);
			
		}
		else
		{
			alert(sec4_first);
		}
	}
	else
	{
		$(".duo_service a").unbind(); // 해당 섹션이 아닐경우 마우스 이벤트 핸들러 해제
	}
	*/

	if (now_section == "sec5") //--커플매니저
	{
		if(manager_Slider){
			manager_Slider.autoplay.start();
		}
	}
	else
	{
		if(manager_Slider){
			manager_Slider.autoplay.stop();
		}
	}

	if (now_section == "sec11") //--수상
	{
		if (prime_slider)
		{
			prime_slider.autoplay.start();
		}
	}
	else
	{
		if (prime_slider)
		{
			prime_slider.autoplay.stop();
		}
	}

	if (now_section == "sec7") //--그래프
	{
		if ($(".sec6_tab").eq(0).hasClass("on") > 0)
		{
			male_Slider.autoplay.start();
			female_Slider.autoplay.stop();
		}
		
		if ($(".sec6_tab").eq(1).hasClass("on") > 0)
		{
			male_Slider.autoplay.stop();
			female_Slider.autoplay.start();
		}
	}
	else
	{
		female_Slider.autoplay.stop();
		male_Slider.autoplay.stop();
	}
	

	if (now_section == "sec3") //--회원수
	{
		numberCounter("real_mem_count", member_cnt); 
		numberCounter("real_marry_count", married_cnt);
	}

	if (now_section == "sec4")
	{
		//시간차 오버 class 전환

		if (sec4_first == true)
		{
			sec4_first = false;

			$(".bt_service").removeClass("on");
			$(".bt_service").removeClass("on2");
			$(".bt_service").eq(0).addClass("on");
			$(".bt_service").eq(1).addClass("on2");
			
			
			setTimeout(function(){
				$(".bt_service").eq(0).addClass("on");
				$(".bt_service").eq(1).addClass("on2");
			},1000);

			setTimeout(function(){
				$(".bt_service").eq(0).removeClass("on");	
				$(".bt_service").eq(0).addClass("on2");
				$(".bt_service").eq(1).removeClass("on2");	
				$(".bt_service").eq(1).addClass("on");
			},2000);
			setTimeout(function(){
				$(".bt_service").eq(0).removeClass("on2");	
				$(".bt_service").eq(1).removeClass("on");		
				$(".bt_service").eq(2).addClass("on");
				$(".bt_service").eq(3).addClass("on2");
			},3000);
			setTimeout(function(){
				$(".bt_service").eq(2).removeClass("on");		
				$(".bt_service").eq(2).addClass("on2");		
				$(".bt_service").eq(3).removeClass("on2");
				$(".bt_service").eq(3).addClass("on");
			},4000);
			setTimeout(function(){
				$(".bt_service").eq(2).removeClass("on2");		
				$(".bt_service").eq(3).removeClass("on");		
			},5000);

			setTimeout(function(){
				$(".bt_service").eq(0).addClass("on");
				$(".bt_service").eq(1).addClass("on2");
			},6000);
		

			// 마우스 오버 아웃 이벤트 핸들러 지정
			setTimeout(function(){
				$(".bt_service_area a").unbind().bind({"click":function(){
						var now_index = $(".bt_service_area a").index($(this))
							
						switch (now_index)
						{
						case 0:
							if ($(".bt_service").eq(0).hasClass("on") > 0)
							{
								location.href="http://m.duo.co.kr/join_guide_01.asp";
							}
							else
							{
								$(".bt_service").eq(0).removeClass("on");	
								$(".bt_service").eq(1).removeClass("on");	
								$(".bt_service").eq(2).removeClass("on");	
								$(".bt_service").eq(3).removeClass("on");	
								$(".bt_service").eq(0).removeClass("on2");
								$(".bt_service").eq(1).removeClass("on2");
								$(".bt_service").eq(2).removeClass("on2");
								$(".bt_service").eq(3).removeClass("on2");

								$(".bt_service").eq(0).addClass("on");	
								$(".bt_service").eq(1).addClass("on2");	
							}
						break;
						case 1:
							if ($(".bt_service").eq(1).hasClass("on") > 0)
							{
								location.href="http://m.duo.co.kr/join_guide_02.asp";
							}
							else
							{
								$(".bt_service").eq(0).removeClass("on");	
								$(".bt_service").eq(1).removeClass("on");	
								$(".bt_service").eq(2).removeClass("on");	
								$(".bt_service").eq(3).removeClass("on");	
								$(".bt_service").eq(0).removeClass("on2");
								$(".bt_service").eq(1).removeClass("on2");
								$(".bt_service").eq(2).removeClass("on2");
								$(".bt_service").eq(3).removeClass("on2");

								$(".bt_service").eq(0).addClass("on2");	
								$(".bt_service").eq(1).addClass("on");	
							}
						break;
						case 2:
							if ($(".bt_service").eq(2).hasClass("on") > 0)
							{
								location.href="http://m.duo.co.kr/noblesse/noblesse_main.asp";
							}
							else
							{
								$(".bt_service").eq(0).removeClass("on");	
								$(".bt_service").eq(1).removeClass("on");	
								$(".bt_service").eq(2).removeClass("on");	
								$(".bt_service").eq(3).removeClass("on");	
								$(".bt_service").eq(0).removeClass("on2");
								$(".bt_service").eq(1).removeClass("on2");
								$(".bt_service").eq(2).removeClass("on2");
								$(".bt_service").eq(3).removeClass("on2");

								$(".bt_service").eq(2).addClass("on");	
								$(".bt_service").eq(3).addClass("on2");	
							}
						break;
						case 3:
							if ($(".bt_service").eq(3).hasClass("on") > 0)
							{
								location.href="http://www.highendduo.com/";
							}
							else
							{
								$(".bt_service").eq(0).removeClass("on");	
								$(".bt_service").eq(1).removeClass("on");	
								$(".bt_service").eq(2).removeClass("on");	
								$(".bt_service").eq(3).removeClass("on");	
								$(".bt_service").eq(0).removeClass("on2");
								$(".bt_service").eq(1).removeClass("on2");
								$(".bt_service").eq(2).removeClass("on2");
								$(".bt_service").eq(3).removeClass("on2");

								$(".bt_service").eq(2).addClass("on2");	
								$(".bt_service").eq(3).addClass("on");	
							}
						break;
						}
					}
				});
			},6100);
		}
	}
	
	if (now_section == "sec8")
	{
		
		$("#sec7_number").html("0");
		setTimeout(function(){
			numberCounter("sec7_number", married_cnt);
		},1500);
	}
	
	if (now_section == "sec9")
	{
		$("#job_count1").html("0");
		$("#edu_count").html("0");
		$("#pay_count").html("0");
		$("#job_count2").html("0");
		
		/* 순차
		numberCounter("job_count1", 4589); 
		setTimeout(function(){numberCounter("edu_count", 10444)},100); 
		setTimeout(function(){numberCounter("pay_count", 2320)},500); 
		setTimeout(function(){numberCounter("job_count2", 1086)},900); 
		*/

		// 순차2
		setTimeout(function(){
			numberCounter("job_count1", 4589); 
			numberCounter("edu_count", 10444)
			numberCounter("pay_count", 2320);
			numberCounter("job_count2", 1086);			
			/*
			setTimeout(function(){numberCounter("edu_count", 10444)},1000); 
			setTimeout(function(){numberCounter("pay_count", 2320)},1900); 
			setTimeout(function(){numberCounter("job_count2", 1086)},2500); 
			*/
		},1000);

		/* 한번에
		setTimeout(function(){
			numberCounter("job_count1", 4589); 	
			numberCounter("edu_count", 10444); 
			numberCounter("pay_count", 2320);
			numberCounter("job_count2", 1086);

		},600);
		*/
	}

	if (now_section == "sec13")
	{
		if (partnershipContents)
		{
			partnershipContents.autoplay.start();
		}
	}
	else
	{
		partnershipContents.autoplay.stop();
	}
		
	if (now_section == "sec12")
	{
	 	$("#media_video").get(0).play();
	}
	else
	{
	$("#media_video").get(0).pause();
	}
	
	/*
	if (now_section == "sec10")
	{
		create_map_marker("01");
	}
	*/
}

var ov_markers = [];

//지도마커생성
function create_map_marker(ntype)
{
	for ( var i = 0; i < ov_markers.length; i++ ) {
		ov_markers[i].setMap(null);
	}   
	ov_markers = [];

	if (ntype != "70")
	{
		
		$("#jisa_map").show();
		$("#jisa_map_image").hide();

		var j_lat;
		var j_lng;
		var ntype_name;

		j_lat = getjisa_latlng("lat",ntype)
		j_lng = getjisa_latlng("lng",ntype)
		ntype_name = getjisa_latlng("name",ntype)

		var content = '<div style="background:url(/img/main/ic_jisa_' + ntype + '.png) no-repeat center top / 100%;width: 11rem;height: 11rem;display: inline-flex;padding-top: 20px;justify-content: center;"></div>';
		
		var markerPosition  = new kakao.maps.LatLng(j_lat, j_lng); 

		var customOverlay = new kakao.maps.CustomOverlay({
			position: markerPosition,
			content: content,
			xAnchor: 0.3,
			yAnchor: 0.91,
			map:map
		});

		// 커스텀 오버레이를 지도에 표시합니다
		customOverlay.setMap(map);
	
		map.panTo(markerPosition);

		ov_markers.push(customOverlay);

		
	}
	else
	{
		$("#jisa_map").hide();
		let map_height = $("#jisa_map").css("height");
		
		$("#jisa_map_image").css("height",map_height);
		$("#jisa_map_image").show();
		
	}

	//alert($("#jisa_map").css("height"));
}

// 유튜브 영상
var embed_layer;
var work_layer;
var player;
var done = false;
function ceo_video_play()
{
	$(".ceo_video--box").show();
	$('.play').hide();
	$(".workman_video--box").hide();
	//$('#video_popup').html(embed_lyaer);
	$('.media_dimarea').show();
	loadYoutubeVideo("video_popup","2AScJAZnAJ4");
}

function ceo_video_close()
{
	$(".ceo_video--box").hide();
	$('.play').show();
	$('.media_dimarea').hide();
	yt_video_close();
}

function workman_video_play()
{
	$(".ceo_video--box").hide();
	$(".workman_video--box").show();
	$('.play').hide();
	$('.media_dimarea').show();
	loadYoutubeVideo("work_popup","IZm6qcilQLY");
}

function workman_video_close()
{
	$(".workman_video--box").hide();
	$('.play').show();
	$('.media_dimarea').hide();
	yt_video_close();
}

function loadYoutubeVideo(view_id,v_id)
{
	player = new YT.Player(view_id, {
		//height: '563',
		//width: '1000',
		videoId: v_id,
		playerVars:{"rel":0},
		 events: {
			'onReady': onPlayerReady,
			//'onStateChange': onPlayerStateChange
		  }
	});
}

function yt_video_close()
{
	if (player || player.getPlayerState() != -1)
	{	
		player.destroy();
		player = null;
	}
}

function stopVideo()
{
	player.stopVideo();
}

function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING && !done) {
		setTimeout(stopVideo, 6000);
		done = true;
	}
}

function onPlayerReady(event) 
{
	event.target.playVideo();
}

$(document).ready(function(){
	
	// main_visual slider
    var swiperAutoplayDelay = 5000;
    var tick;
	
	main_swiper = new Swiper('.visual__wrap', {
        navigation: {
            nextEl: '.visual__wrap .swiper-button-next',
            prevEl: '.visual__wrap .swiper-button-prev'
        },
        loop: true,
        speed : 1200,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        fitToSection:false,
        pagination: {
            el: '.visual__wrap .swiper-pagination',
            type: 'fraction'
        },
		on:{
			activeIndexChange:function(){
				setTimeout(function(){
					if(main_swiper.activeIndex == 4)
					{
						$(".main_img_slider0" + main_swiper.previousIndex).removeClass("active");
						$(".main_img_slider01").addClass("active");	
					}
					else
					{
						$(".main_img_slider0" + main_swiper.previousIndex).removeClass("active");
						$(".main_img_slider0" + main_swiper.activeIndex).addClass("active");
					}
				},1500);
			}
		}
    });

	main_swiper.on("activeIndexChange",function(){
		setTimeout(function(){
			if(main_swiper.activeIndex == 4)
			{
				$(".main_img_slider0" + main_swiper.previousIndex).removeClass("active");
				$(".main_img_slider01").addClass("active");	
			}
			else
			{
				$(".main_img_slider0" + main_swiper.previousIndex).removeClass("active");
				$(".main_img_slider0" + main_swiper.activeIndex).addClass("active");
			}
		},2400);
	});
		
    // manager_slider
    manager_Slider = new Swiper('.manager_slider--wrap', {
        spaceBetween: 0,
        direction: 'horizontal', 
        loop:true,
        centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        speed: 1000,
        pagination: {
            el: '.manager_slider--paging',
            clickable: true,
            type:'bullets'
        },
    });
   
    media_Slider = new Swiper('.media--wrap', {
        navigation: {
            nextEl: '.media--wrap .swiper-button-next',
            prevEl: '.media--wrap .swiper-button-prev'
        },
        loop: true,
        speed : 1200,
        touchRatio :0,
        fitToSection:false,
		clickable:true,
        pagination: {
            el: '.media--wrap .swiper-pagination',
            type: 'fraction'
        },
    });
    
    numberOne = new Swiper('.number_one--wrap .swiper-container', {
        slidesPerView:'1',
        loop:true,
        freeMode: false,
        autoplay: {
            delay: 2000,
        },
        centeredSlides: true,
        pagination: {
            el: '.number_one--paging',
            clickable: true,
            type:'bullets'
        },
    });


    // member-contetns__slider
    male_Slider =  new Swiper('.male', {
        pagination: {
            el: ".male_contetns--paging",
            clickable: true,
          },
		autoplay: {
            delay: 2500,
        },
		loop: true
    });

    // member-contetns__slider
    female_Slider =  new Swiper('.female', {
		pagination: {
            el: ".female_contetns--paging",
            clickable: true,
          },
		autoplay: {
            delay: 2500,
        },
		loop: true
    });

	// prime_slider swiper
    prime_slider =  new Swiper('.prime_slider--wrap', {
        slidesPerView: 2.1,
        spaceBetween: 10,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
          clickable: true,
        },
    });

    // cf-poster swiper
    cfPoster_wrap =  new Swiper('.cf--poster_wrap', {
        slidesPerView : '2.1',
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: true,
        spaceBetween : 0, 
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
        slideToClickedSlide : true,
    });

	 // partnershipContents
	 partnershipContents =  new Swiper('.partnership--contetns_wrap', {
        slidesPerView : '1',
        loop: true,
        loopFillGroupWithBlank: true,
        spaceBetween : 0, 
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
        slideToClickedSlide : true,
		pagination: {
			el: '.partnership_paging',
			clickable: true,
		  },
    });

	main_swiper.autoplay.stop();
	manager_Slider.autoplay.stop();
	prime_slider.autoplay.stop();
	media_Slider.autoplay.stop();
	cfPoster_wrap.autoplay.stop();
	numberOne.autoplay.stop();
	partnershipContents.autoplay.stop();

    // 탭메뉴
    $('.all li').unbind().bind("click",function(){
		
		clearInterval(member_interval);
		let now_index = $('.all li').index($(this));

		$('.all li').removeClass("on");
		$('.all li').eq(now_index).addClass("on");

		$(".tabcontent").hide();
		$(".tabcontent").eq(now_index).show();

		
		switch(now_index)
		{
		case 0:
			male_Slider.autoplay.start();
			female_Slider.autoplay.stop();
		break;

		case 1:
			male_Slider.autoplay.stop();
			female_Slider.autoplay.start();
		break;
		}
	});


    // 지사
    let jisa_ul = $('.jisa_ul li a');
    jisa_ul.unbind().bind("click",function(){
        let jisa_depth = $('.jisa_ul li');
        let index_call = $(this).parent('li').index();
        $(jisa_depth).on('click', function(){
            $(jisa_depth).children().removeClass('on');
            $(this).children().addClass('on');
        });

		create_map_marker($(this).attr("id"));
    });

	// fullpage js
	//don't delete
	let mode_type = 'D0330F82-19BF42AA-AF89F7FB-F5E9F50E';
	let main_Fullpage = $('#full-page').fullpage({
		licenseKey: mode_type,
		anchors: ['sec1','sec2', 'sec3', 'sec4', 'sec5', 'sec6','sec7','sec8','sec9','sec10','sec11','sec12','sec13','sec14','sec15'],
		navigation:true,
		navigationTooltips: ['TOP','1위', '회원수', '서비스', '매니저', '매칭','회원','성혼','하이엔드','지사','미디어','수상','TV-CF','제휴'],
        navigationName: ['TOP', '회원수', '서비스', '매니저', '매칭','회원','성혼','하이엔드','지사','미디어','수상','TV-CF','제휴'],
		showActiveTooltip: true,
		menu: '#menu',
		scrollBar: true,
		autoScrolling: true,
		slidesNavigation: true,
        fitToSection:false,
		scrollingSpeed: 400,
        // responsiveWidth: 1200,
        // responsiveHeight: 800,
		controlArrows: false,
		normalScrollElements:'.aside_right',
        afterLoad:function(anchorLink, destnation, index){
            if(".section_14.active"){
                $("#section_13").addClass("in-view");
            }else{
                $("#section_13").removeClass("in-view");
            }

			let now_section = destnation.anchor;
			section_state_action(now_section);
        }
	});

	//sec7 female hide
	$(".tabcontent").eq(1).hide();
	
	//map init
	var mapContainer = document.getElementById("jisa_map"), // 지도를 표시할 div 
	mapOption = { 
		center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
		level: 4, // 지도의 확대 레벨
		draggable:false,
	};

	map = new kakao.maps.Map(mapContainer, mapOption);
	map.setZoomable(false);

	create_map_marker("01");
});


