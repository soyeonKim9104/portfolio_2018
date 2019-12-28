$(document).ready(function(){
    // 참고: datePickter 적용
    $(function() {
       $("#pub_datePicker1").datepicker({
          showOn: "both", 
          buttonImage: "../../../images/common/btn_calendar.png", 
          buttonImageOnly: false,
          changeMonth: true, 
          changeYear: true,
          nextText: '다음 달',
          prevText: '이전 달',
          dateFormat: 'yy.mm.dd',
       });
       $("#pub_datePicker2").datepicker({
          showOn: "both", 
          buttonImage: "../../../images/common/btn_calendar.png", 
          buttonImageOnly: false,
          changeMonth: true, 
          changeYear: true,
          nextText: '다음 달',
          prevText: '이전 달',
          dateFormat: 'yy.mm.dd',
       });
    });

    // 참고: faq 토글 적용
    $(".eToggleSection a.btnToggleTable").click(function(e){
       $(this).parent().siblings(".eHideSec").slideToggle(100);
       var spreadBool = $(this).hasClass("open");
 
       if(spreadBool === false) {
          $(this).addClass("open");
          $(this).text("열기");
          $(this).parent().css({"margin-bottom":"20px","border-bottom":"1px solid #e7e7e7"});
       } else {
          $(this).removeClass("open");
          $(this).text("접기");
          $(this).parent().css({"margin-bottom":"0px","border-bottom":"none"});
       }
       e.preventDefault();
    })
 
    // 참고: 알림 목록 적용   
    function cuteHide(el) {
       el.animate({opacity: '0'}, 50, function(){
          el.animate({height: '0px'}, 50, function(){
             el.remove();
          });
       });
    }
    $('.del').on('click', function(){
       var el = $(this).closest('.alarm');
       cuteHide(el);
    });
       
    $("#pub_btnAlarm").click(function (e) {
       var spreadBool = $(this).hasClass("open");
       if(spreadBool === false) {
          $(this).addClass("open");
          $("#pub_alarmArea").show();
          $("#pub_alarmArea").animate({
             "top":"35px",
             opacity:1
          }, 100);
       } else {
          $(this).removeClass("open");
          $("#pub_alarmArea").animate({
             "top":"25px",
             opacity:0
          }, 100);
       }
       e.preventDefault();
    });
 
    // 참고: 내 서재 폴더 관리 적용   
    $("#pub_btnFolderManage").click(function (e) {
       var spreadBool = $(this).hasClass("open");
       if(spreadBool === false) {
          $(this).addClass("open");
          $("#pub_folderManageArea").show();
          $("#pub_folderManageArea").animate({
             "top":"26px",
             opacity:1
          }, 100);
       } else {
          $(this).removeClass("open");
          $("#pub_folderManageArea").animate({
             "top":"15px",
             opacity:0
          }, 100);
       }
       e.preventDefault();
    });
 
    // 참고: 슬림 스크롤 적용
    $('.slimScrollWrap').slimScroll({
       height: '220px',
       size: '4px',
       color: '#fff',
       alwaysVisible: true,
       railVisible: true,
       railColor: '#bfbfbf',
       railOpacity: 1,
    });
 
    // 참고: 행 추가/삭제 적용
    var count = 0;
    var fullcount = 9;
    $("#pub_btnAddRowEmail").on("click",function() {
       if($("#pub_formGroupEmail>li").length>=10) return false;
       $("#pub_formGroupEmail").append("<li>"+$("#pub_formGroupEmail li:first").html()+"</li>");
       $("#pub_formGroupEmail li:last>button").attr({class : "btn btnIcon subColor minus", id : "pub_btnRemoveRowEmail"});
    });
 
    $("#pub_formGroupEmail").on("click","#pub_btnRemoveRowEmail", function() {
       $(this).parent("li").remove();
    });
 
    $("#pub_btnAddRowResearch").on("click",function() {
       if($("pub_formGroupResearch>li").length>=10) return false;
       $("#pub_formGroupResearch").append("<li>"+$("#pub_formGroupResearch li:first").html()+"</li>");
       $("#pub_formGroupResearch li:last>button").attr({class : "btn btnIcon subColor minus", id : "pub_btnRemoveRowResearch"});
    });
 
    $("#pub_formGroupResearch").on("click","#pub_btnRemoveRowResearch", function() {
       $(this).parent("li").remove();
    });
 
    // 참고: 체크박스 show/hide 적용
    $('.checkOption').on('click', function() {
       if($("input:checkbox.checkOption").is(":checked") == true){
          $(".showInfo").show();
       }else{
          $(".showInfo").hide();
       }
    });
 
    // 참고: 체크박스 기능버튼 활성화/비활성화 적용
    $('.checkButtonActive').on('click', function() {
       if($("input:checkbox.checkButtonActive").is(":checked") == true){
          $(".funcWrap button:not('.btnRegThesis')").addClass("active");
       }else{
          $(".funcWrap button:not('.btnRegThesis')").removeClass("active");
          $("#pub_btnFolderManage").removeClass("open");
          $("#pub_folderManageArea").animate({
             "top":"15px",
             opacity:0
          }, 100);
       }
    });
 
    // 참고: 체크박스 텍스트 이탤릭체 적용
    $('.checkTextItalic').on('click', function() {
       if($("input:checkbox.checkTextItalic").is(":checked") == true){
          $(this).parents(".textOpt").children(".btnTextOpt").addClass("txtItalic");
       }else{
          $(this).parents(".textOpt").children(".btnTextOpt").removeClass("txtItalic");
       }
    });
 
    // 참고: 본문 상단 플로팅 메뉴 적용
    $(window).scroll(function() {
       if ($(this).scrollTop() > 650) {
          $('.floatingBarWrap').fadeIn(50);
       } else {
          $('.floatingBarWrap').fadeOut(50);
       }
    });
 
    // 참고: top 버튼 적용
    $(window).scroll(function() {
       if ($(this).scrollTop() > 500) {
          $('.gTopNavi').fadeIn(50);
       } else {
          $('.gTopNavi').fadeOut(50);
       }
    });
 
    $("#pub_btnTop").click(function() {
       $('html, body').animate({
          scrollTop : 0
       }, 200);
       return false;
    });
 
    // 참고: tab 메뉴 적용
    $('.eTab').each(function(){
       var selected = $(this).find('> ul > li.selected > a');
       if(selected.siblings('ul').length <= 0){
          $(this).removeClass('gExtend');
       }
    });
    $('body').delegate('.eTab a', 'click', function(e){
       var _li = $(this).parent('li').addClass('selected').siblings().removeClass('selected'),
          _target = $(this).attr('href');
       var _this = $(this);
       if ($(_target).hasClass('tabContent')){
          var _targetClass = '.' + 'tabContent';
       }
       $(_target).show().siblings(_targetClass).hide();
 
         // gExtend ctrl
         var mtab = $(this).parents('.mTab:first');
         if($(this).siblings('ul').length > 0){
            if(!mtab.hasClass('gExtend')){
               mtab.addClass('gExtend');
            }
         } else {
            if($(this).parents('ul:first').siblings('a').length <= 0){
               mtab.removeClass('gExtend');
            }
         }
         e.preventDefault();
     });
 
    // 참고: 약관동의 체크박스 적용
    $('.checkAll').click(function(){
       $('.abs').prop('checked',this.checked);
    });
    
    // 참고: 자동로그인 툴팁 적용
    $("#pub_autoLogin").change(function(){
       if($("#pub_autoLogin").is(":checked")){
          $("#pub_tooltip_autoLogin").show();
          setTimeout(function(){
             $("#pub_tooltip_autoLogin").fadeOut();
          }, 3000);
       }else{
          $("#pub_tooltip_autoLogin").hide();
       }
    });
 
    // 참고: 마우스 오버 적용
    $("#pub_tileUI .btnLink").hover(function() {
       $(this).parent().addClass("over");
    });
    $("#pub_tileUI .btnLink").mouseleave(function() {
       $(this).parent().removeClass("over");
    });
 
    // 참고: 충전 안내 적용
    $("#pub_paymentMethod a, #pub_paymentAmount button, #pub_sort a").click(function() {
       $(this).parent().addClass("selected");
       $(this).parent().siblings().removeClass("selected");
    });
 
    // 참고: 정렬 순서 적용
    $("#pub_sort a").click(function() {
       $(this).parent().addClass("selected");
       $(this).parent().siblings().removeClass("selected");
    });
 
    // 참고: 버튼 선택 적용
    $(".gSelected").click(function() {      
       var spreadBool = $(this).hasClass("selected");
       if(spreadBool === false) {
          $(this).addClass("selected");
       } else {
          $(this).removeClass("selected");
       }
       e.preventDefault();
    });
 
    // 참고: TR 토글 적용
    if($("tr").is(".trVisible") === true){
       $(".trVisible>td:gt(0)").append("<a href='#none'>View More</a>");
    };
 
    $(".trVisible a").click(function() {
       $(this).parent().parent().nextUntil(".trVisible").toggle();
          
       var spreadBool = $(this).parent().siblings(".iconArrow").hasClass("open");
       if(spreadBool === false) {
          $(this).parent().siblings(".iconArrow").addClass("open").html('<span class="icon arrowUp">화살표</span>');
       } else {
          $(this).parent().siblings(".iconArrow").removeClass("open").html('<span class="icon arrowDown">화살표</span>');
       }
       e.preventDefault();
    });
 
    // 참고: 모달 팝업 적용
    $('.btnModal').on('click', function() {
       var layerId = $(this).attr('id');
       var screenW = $(window).width();
       var screenH = $(window).height();
       var scrollTop = $(window).scrollTop();
       var popW = $(layerId).innerWidth();
       var popH = $(layerId).innerHeight();
       var posX = (screenW-popW)/2;
       var posY = ((screenH-popH)/2)+scrollTop;
       $(layerId).css({
          left : posX,
          top : posY
       }).show();
       return false;
    });
    
    $.fn.openLayerId = function(){
       var screenW = $(window).width();
       var screenH = $(window).height();
       var scrollTop = $(window).scrollTop();
       var popW = $(this).innerWidth();
       var popH = $(this).innerHeight();
       var posX = (screenW - popW)/2;
       var posY = ((screenH-popH)/2)+scrollTop;
       $(this).css({
          left : posX,
          top : posY
       }).show();
       return false;
    };
    
    $('.closeModal').on('click', function() {
       var layerId = $(this).attr('id');
       $(layerId).hide();
       return false;
    });
 
    $.fn.openLayer = function(id){
       var layerId = id;
       var screenW = $(window).width();
       var screenH = $(window).height();
       var scrollTop = $(window).scrollTop();
       var popW = $(layerId).innerWidth();
       var popH = $(layerId).innerHeight();
       var posX = (screenW - popW)/2;
       var posY = ((screenH-popH)/2)+scrollTop;
       $(layerId).css({
          left : posX,
          top : posY
       }).show();
       return false;
    }
 
    function rePosition() {
       var screenW = $(window).width();
       var screenH = $(window).height();
       var scrollTop = $(window).scrollTop();
       var btnPop = $('.btnModal,.btnAlert');
       if(btnPop) {
          btnPop.each(function() {
             var boxId = $(this).attr('id');
             if(!$(boxId).is(':hidden')) {
                var popW = $(boxId).innerWidth();
                var popH = $(boxId).innerHeight();
                var posX = (screenW-popW)/2;
                var posY = ((screenH-popH)/2) + scrollTop;
                $(boxId).css({
                   left : posX,
                   top : posY
                });
             }
          });
       }
    }
 
    function scrollRePos() {
       var screenH = $(window).height();
       var scrollTop = $(window).scrollTop();
       var btnPop = $('.btnModal,.btnAlert');
       if(btnPop) {
          btnPop.each(function() {
             var boxId = $(this).attr('id');
             if(!$(boxId).is(':hidden')) {
                var popH = $(boxId).innerHeight();
                var posY = ((screenH-popH)/2) + scrollTop;
                $(boxId).css({
                   top : posY
                });
             }
          });
       }
    }
 
    $(window).scroll(function() {
       scrollRePos();
    });
 
    $(window).resize(function() {
       rePosition();
    });
 
    // 참고: 모달 팝업 (다중) 적용
    $(function(){
       $('.modal .modalScreen').addClass("opacity");
    });
 
    // 참고: 얼러트 적용
    jQuery.jQueryAlert = function (msg) {
       var $messageBox = $.parseHTML('<div id="alertBox"></div>');
       $("body").append($messageBox);
 
       $($messageBox).dialog({
          open: $($messageBox).append(msg),
          title: "경고창",
          autoOpen: true,
          modal: true,
          buttons: {
             확인: function () {               
                $(this).dialog("close");
             }
          }
       });
 
       $(".ui-dialog").addClass("jQueryAlert");
       $(".ui-dialog").css("margin-top","-42px");
    };
    
    jQuery.jQueryAlertMove = function (msg, url) {
       var $messageBox = $.parseHTML('<div id="alertBox"></div>');
       $("body").append($messageBox);
 
       $($messageBox).dialog({
          open: $($messageBox).append(msg),
          title: "경고창",
          autoOpen: true,
          modal: true,
          buttons: {
             확인: function () {               
                $(this).dialog("close");
                location.href=url;
             }
          }
       });
 
       $(".ui-dialog").addClass("jQueryAlert");
       $(".ui-dialog").css("margin-top","-42px");
    };
 
    // 참고: 자동완성 기능 적용
    $(function() {
    var availableOrgan = ["중앙도서관","서울도서관","누리도서관","강남도서관","강서도서관"];
       $("#pub_Organ").autocomplete({
          source: availableOrgan,
          select: function(event, ui) {
             console.log(ui.item);
          },
          focus: function(event, ui) {
             return false;
          //event.preventDefault();
          }
       });
    });
 
 });
 