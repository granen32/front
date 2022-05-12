// window onload
// 스크롤 확인
let scrollTop =0;
window.onload = function(){
    // 프로그래스 Bar
    let bar=document.getElementsByClassName("progress__bar")[0];
    let cloudWrap = document.getElementsByClassName('cloudWrap')[0];
    window.addEventListener("scroll", function(e){
        // 스크롤 탑 구하기
        scrollTop = document.documentElement.scrollTop;
        // console.log(scrollTop);
        let per = Math.round(scrollTop / (document.body.scrollHeight  - window.outerHeight) * 100) ;
        
        console.log("스크롤 가로" + per);

        // 마지막 까지 스크롤이 안되는 이유는 실제 화면 보이는 사이즈가 있기 때문에
        bar.style.height = per + "%";

        cloudWrap.style.transform = "translate(0, " + scrollTop / 1.2 +"px)";

    }, false);
    // 여기서 false를 하는 이유는 dom  트리의 이벤트 타겟으로 전송하기 전에 등록된 리스너의 타입의 이벤트의 전송여부는 Boolean 값인데 기본값은 false 이지만 가끔 타 브라우저에서 엔진이 달라 인식이 잘 못 되는 경우가 있기 때문에 false를 명시적으로 할당해주는 거다


    
}