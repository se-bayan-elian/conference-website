// $(document).ready(function () {
  $(".scroll-link").children().on("click",function(e){
       e.preventDefault();
  });

lightGallery(document.getElementById('ul-li'), {
  plugins: [lgZoom, lgThumbnail,lgAutoplay,lgFullscreen,lgRotate,],
  speed: 500,
});
  // set navbar for mobile 
  if($("body").width() <=1199){
        $("#sec-list").removeClass("nav-list").addClass("nav-list-aside");
  }else{
        $("#sec-list").removeClass("nav-list-aside").addClass("nav-list");
  }
  $(".show-navbar").on("click",function(){
    console.log("clicked")
      $(".nav-list-aside").slideDown(1000);
      $(".fa-bars").hide(500);
      $(".fa-xmark").show(500);
    }) ; 
     $(".hide-navbar").on("click",function(){
      $(".nav-list-aside").slideUp(500);
      $(".fa-bars").show(500);
      $(".fa-xmark ").hide(500);
    }) ; 
      // set link's scroll  in navbar
    $("#talkers-link").on("click",function(){
        console.log($("#talkers-sec").offset().top +100);
        console.log($(window).scrollTop());
        $("html").animate({
          scrollTop : $("#talkers-sec").offset().top -100,
        },1000);
      });
    $("#images-link").on("click",function(){
        console.log($("#con-images-sec").offset().top +100);
        console.log($(window).scrollTop());
        $("html").animate({
          scrollTop : $("#con-images-sec").offset().top -100,
        },1000);
      });
    $("#stats-link").on("click",function(){
        console.log($("#stats-sec").offset().top +100);
        console.log($(window).scrollTop());
        $("html").animate({
          scrollTop : $("#stats-sec").offset().top -170,
        },1000);
      });
    $("#con-schedule-link").on("click",function(){
        console.log($("#con-schedule-sec").offset().top -100);
        console.log($(window).scrollTop());
        $("html").animate({
          scrollTop : $("#con-schedule-sec").offset().top -100,
        },1000);
      });
    $("#contact-us-link").on("click",function(){
        console.log($("#contact-sec").offset().top +100);
        console.log($(window).scrollTop());
        $("html").animate({
          scrollTop : $("#contact-sec").offset().top -100,
        },1000);
      });
    
  // set talkers section loading animation 
  $(window).on("scroll",function(){
    if($("html").scrollTop() >= $(".talkers").offset().top -320) {
      $(".talkers .container").css("visibility","visible");
      $(".talkers .sec-header").addClass("animate__animated animate__animate__bounceIn");
      $("#talker1").delay(800).addClass("animate__animated animate__fadeInTopRight");
      $("#talker2").delay(800).addClass("animate__animated animate__fadeInUp");
      $("#talker3").delay(800).addClass("animate__animated animate__fadeInTopLeft");
      $(".talkers .button a").delay(1000).addClass("animate__animated animate__animate__bounceIn");
    }
  });
  // set conference-schedule section loading animation 
  $(window).on("scroll",function(){
    if($("html").scrollTop() >= $(".conference-schedule").offset().top -300) {
      $(".conference-schedule .container").css("visibility","visible");
      $(".conference-schedule .sec-header").addClass("animate__animated animate__animate__bounceIn");
      if($("html").attr("dir") == "rtl"){
        $("#day5").addClass("animate__animated animate__fadeInRight animate__delay-0s");
        $("#day4").addClass("animate__animated animate__fadeInRight animate__delay-0.3s");
        $("#day3").addClass("animate__animated animate__fadeInRight animate__delay-0.6s");
        $("#day2").addClass("animate__animated animate__fadeInRight animate__delay-0.9s");
        $("#day1").addClass("animate__animated animate__fadeInRight animate__delay-1.2s");
      }else{
        console.log("ltr");
        $("#day1").addClass("animate__animated animate__fadeInLeft animate__delay-0s");
        $("#day2").addClass("animate__animated animate__fadeInLeft animate__delay-0.3s");
        $("#day3").addClass("animate__animated animate__fadeInLeft animate__delay-0.6s");
        $("#day4").addClass("animate__animated animate__fadeInLeft animate__delay-0.9s");
        $("#day5").addClass("animate__animated animate__fadeInLeft animate__delay-1.2s"); 

      }
      $(".conferences").addClass("animate__animated animate__fadeInUpBig animate__delay-1.2s");
      
    }
  });
  // set stats section loading animation 
  let isReached = false;
  $(window).on("scroll",function(){
    if($("html").scrollTop() >= $(".stats").offset().top -300) {
      if(!isReached){
        $(".stats .container").css("visibility","visible");
        countUp(128,40,30,20)
        isReached = true;
      }
      
    }
  });
  // set conference-images section loading animation 
  $(window).on("scroll",function(){
    if($("html").scrollTop() >= $(".conference-images").offset().top -300) {
      $(".conference-images .container").css("visibility","visible");
      $(".conference-images .sec-header ").addClass("animate__animated animate__animate__bounceIn");
      $(".conference-images .sec-body li").addClass("animate__animated animate__zoomInDown");
      
    }
  });
  //set speed up div 
  $(window).on("scroll",function(){
    if($(this).scrollTop() >= 1500){
      $(".speedUp").css("display", "flex").fadeIn();
    }
    else{
      $(".speedUp").fadeOut(500);
    }
  })
  $(".speedUp").on("click",function(){
    $("html").animate({
      scrollTop : 0,
    },1000)
  });

  // set tools section
$("#options-btn").on("click",function(){
  $("#options-list").fadeToggle(500);
});
$("#night-mode").on("click",function(){
  $("body").removeClass("dark-mode").addClass("night-mode");
});
$("#light-mode").on("click",function(){
  $("body").removeClass();
});
$("#dark-mode").on("click",function(){
  $("body").removeClass("night-mode").addClass("dark-mode");
});

//  set loading screen 
$(window).on("load",function(){
  $(".loading").fadeOut(2000,function(){
     $(this).remove();
 });

});
// fixed nav bar when scrolling
$(window).on("scroll",function(){
  if($("html").scrollTop() >= 698)  {
    // if(($("body").width() > 1199)){
    $(".navbar").addClass("fixed-nav");
    $("#talkers-sec").addClass("talkers-nav-fixed");
  // }
}
  else{
    $(".navbar").removeClass("fixed-nav");
    $("#talkers-sec").removeClass("talkers-nav-fixed");
  }
 
});

$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});


// create count down func to calculate time lifting
function countDown (){
  // fetch boxes 
  let daysBox = document.querySelector('.num-of-days')
  let hrsBox = document.querySelector('.num-of-hours')
  let minsBox = document.querySelector('.num-of-minutes')
  let secsBox = document.querySelector('.num-of-secondes')
  // 
  let countId = setInterval(()=>{
    if(secsBox.textContent == 0 ){
      if(minsBox.textContent != 0){
        minsBox.textContent--;
        secsBox.textContent = 60;
      }
      else if(hrsBox.textContent !=0  ){
        hrsBox.textContent--;
        minsBox.textContent=59;
        secsBox.textContent = 60;
      }
      else if (daysBox.textContent !=0){
        daysBox.textContent--;
        hrsBox.textContent= 23;
        minsBox.textContent=59;
        secsBox.textContent = 60;
      }
      else {
        clearInterval(countId);
        return ;
      }
    }
    secsBox.textContent= (secsBox.textContent <10 ?'0':'' )+ (secsBox.textContent-1);
  },1000)
}
// trigger the countDown function 
countDown();
// import count up class from count up .js module 
import { CountUp } from './countUp.js';

// create countUp func to animate number 
function countUp (sNum,dNum,wNum,seNum){
  
  const SCountUp = new CountUp('numSpeakers', sNum);
  SCountUp.start();
  const DaysCountUp = new CountUp('numDays', dNum);
  DaysCountUp.start();
  const WSCountUp = new CountUp('WorkshopsNum', wNum);
  WSCountUp.start();
  const SeCountUp = new CountUp('seminarsNum', seNum);
  SeCountUp.start();
 
}