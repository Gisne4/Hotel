$(".con1_1").mouseover(function () {
  $(".con1_1").css({
    transform: "scale(1.15, 1.15)",
    transition: "0.7s",
    opacity: "0.8",
  });
});
$(".con1_1").mouseleave(function () {
  $(".con1_1").css({ transform: "scale(1, 1)", opacity: "1" });
});
$(".con1_2").mouseover(function () {
  $(".con1_2").css({
    transform: "scale(1.15, 1.15)",
    transition: "0.7s",
    opacity: "0.8",
  });
});
$(".con1_2").mouseleave(function () {
  $(".con1_2").css({ transform: "scale(1, 1)", opacity: "1" });
});
$(".con1_3").mouseover(function () {
  $(".con1_3").css({
    transform: "scale(1.15, 1.15)",
    transition: "0.7s",
    opacity: "0.8",
  });
});
$(".con1_3").mouseleave(function () {
  $(".con1_3").css({ transform: "scale(1, 1)", opacity: "1" });
});

//몇번째인지셀려고 만든 수
var count = 1;

//클래스 이름 예시 class="content1" 일때 ".content" 로 바꾸기만 하면 됨
var con_5Img = ".con5_";

//이미지 클래스 이름
var con_5IMGS;

$(".con5_Right_button").on("click", function () {
  //이미지 총개수 -1
  if (count < 6) {
    count += 1;
  }
  con_5IMGS = con_5Img + count;
  //하고 싶은 jq

  $(con_5IMGS).fadeIn();

  var sent = count - 1;

  con_5IMGS = con_5Img + sent;

  //이미지 총개수
  if (count < 7) {
    $(con_5IMGS).hide();
  }
});

$(".con5_Left_button").on("click", function () {
  if (count > 1) {
    count -= 1;
  }

  con_5IMGS = con_5Img + count;

  $(con_5IMGS).fadeIn();

  var sent = count + 1;

  con_5IMGS = con_5Img + sent;

  if (count > 0) {
    $(con_5IMGS).hide();
  }
});

$("#fa-angle-right").on("click", function () {
  //이미지 총개수
  if (count < 4) {
    count += 1;
  }
  con_5IMGS = con_5Img + count;

  //하고 싶은 jq
  $(con_5IMGS).fadeIn();

  var sent = count - 1;

  con_5IMGS = con_5Img + sent;

  //이미지 총개수+1
  if (count < 5) {
    $(con_5IMGS).hide();
  }
});

$("#fa-angle-left").on("click", function () {
  if (count > 1) {
    count -= 1;
  }

  con_5IMGS = con_5Img + count;

  $(con_5IMGS).fadeIn();

  var sent = count + 1;

  con_5IMGS = con_5Img + sent;

  if (count > 0) {
    $(con_5IMGS).hide();
  }
});

//버튼 이팩트

var btn = "";

$(".dining_con1 .con1Li1").mouseenter(function () {
  $(".con1Li1 .btnslider").css({
    transform: "translate(835px, -90px)",
    transition: "3s",
  });
  $(".dining_con1 h6").css({
    transform: "translate(0px, -40px)",
    transition: "3s",
  });
});
$(".dining_con1 .con1Li1").mouseleave(function () {
  $(".con1Li1 .btnslider").css({
    transform: "translate(-835px, 90px)",
  });
  $(".dining_con1 h6").css({
    transform: "translate(0px, 20px)",
  });
});
$(".dining_con1 .con1btn2").mouseenter(function () {
  $(".dining_con1 .con1btn2").css({
    "background-color": "black",
    color: "white",
    border: "#5a4848 1px solid",
  });
});
$(".dining_con1 .con1btn2").mouseleave(function () {
  $(".dining_con1 .con1btn2").css({
    "background-color": "white",
    color: "black",
  });
});
$(".dining_con1 .con1btn3").mouseenter(function () {
  $(".dining_con1 .con1btn3").css({
    "background-color": "black",
    color: "white",
    border: "#5a4848 1px solid",
  });
});
$(".dining_con1 .con1btn3").mouseleave(function () {
  $(".dining_con1 .con1btn3").css({
    "background-color": "white",
    color: "black",
  });
});
$(".dining_visual img ").mouseenter(function () {
  $(".dining_visual img").css({
    transform: "scale(1.1, 1.1)",
    "border-radius": "0px",
    transition: "1s",
    opacity: "0.9",
  });
});
$(".dining_visual img").mouseleave(function () {
  $(".dining_visual img").css({
    transform: "scale(1,1)",
    "border-radius": "0px 30px ",
    transition: "1s",
    opacity: "1",
  });
});
