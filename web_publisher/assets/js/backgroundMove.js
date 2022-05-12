let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.01;
let _imgArr;
let _bird;


window.onload = function(){
    // 이미지 경로 가져오기
    _imgArr = document.getElementsByTagName("img");
    _bird = document.getElementsByClassName("vod");
    // 이러면 이미지들이 배열로 넘어옴
    // alert(_imgArr.length);
    window.addEventListener("mouseover", mouseFunc, false);

    function mouseFunc(e){
        // 클라이언트 x,y는 인터페이스의 clientX,y 읽기 전용 속성은 이벤트가 발생한 애플리케이션 viewport}} 내에 수평 좌표를 제공한다(페이지 내의 좌표와는 반대).

        x = (e.clientX - window.innerWidth/2);
        yx = (e.clientY - window.innerHeight/2);

        // window.inner w/h 는 디바이스의 스크롤바를 포함하여 width와 height값을 구한다
    }
    loop()
}

function loop(){
    // m@ 에 좌표값을 뺴고 나서 *한 속도값을 줌
    mx += (x - mx) * speed;
    my += (y - my) * speed;
    _imgArr[0].style.transform = "translate("+ -(mx/9) +"px," + -(my/9) +"px)";
    _imgArr[1].style.transform = "translate("+ -(mx/5) +"px," + -(my/5) +"px)";
    _imgArr[2].style.transform = "translate("+ -(mx/3) +"px," + -(my/3) +"px)";
    _imgArr[3].style.transform = "translate("+ -(mx/2) +"px," + -(my/2) +"px)";

    _bird[0].style.transform = "translate("+ -(mx/4) +"px," + -(my/4) +"px)";

    // 이미지에 대한 위치 조절
    window.requestAnimationFrame(loop);
}
