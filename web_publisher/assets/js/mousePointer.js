let cursorGrove;
let bg;
let h1;
let text3d;
let pipe;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.009;

window.onload = function(){
  h1 = document.getElementsByTagName("h1")[0];
  cursorGrove = document.getElementsByClassName("human")[0];
  text3d = document.getElementsByClassName("text3d")[0];
  bg = document.getElementsByClassName("bg")[0];
  pipe = document.getElementsByClassName("pipe")[0];

  window.addEventListener("mousemove", mouseFunc, false);

  function mouseFunc(e){
    x = (e.clientX - window.innerWidth / 2);
    y = (e.clientY - window.innerHeight / 2);
  }
  loop();
}

function loop(){
  mx += (x - mx) * speed;
  my += (y - my) * speed;

  h1.innerHTML = "x: " + x + " mx: " + mx;
  cursorGrove.style.transform = "translate("+ -(mx/6) +"px," + -(my/6) +"px)";
  bg.style.transform = "translate("+ -(mx/8) +"px," + -(my/8) +"px)";

  //3d 텍스트 모션
  //rotate3d 속성
  text3d.style.transform = "translate3d("+ -(mx/2) +"px," + -(my/2) +"px,0) rotate3d(0,1,0,"+ -mx / 50 +"deg)";

  //파이프
  pipe.style.transform = "translate("+ (mx/4) +"px," + (my/3) +"px)";

  window.requestAnimationFrame(loop);
}
