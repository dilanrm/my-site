    var startY = $('.navbar').height() * 8; //The point where the navbar changes in px
    var projectY = $('.navbar').height() * 18;
    var portfolioY = $('.navbar').height() * 28;
    var contactY = $('.navbar').height() * 38;
    var aboutY = $('.navbar').height() * 48;

  function checkScroll(){
      if($(window).scrollTop() > startY){
          $('.navbar').addClass("scrolled");
      }else{
          $('.navbar').removeClass("scrolled");
      }
      $('#myNavbar').on('click', function(){
        if(this.attr('aria-expanded') == 'true'){
          $('.navbar').addClass("scrolled");
        }
    });

  	if(($(window).scrollTop() > startY) && ($(window).scrollTop() < projectY)) {
  	  $('#btnHome').attr('class', 'active');
  		$('#btnAbout').removeClass();
      $('#btnPortfolio').removeClass();
      $('#btnProject').removeClass();
      $('#btnContact').removeClass();
  	}
    else if(($(window).scrollTop() > projectY) && ($(window).scrollTop() < portfolioY)) {
      $('#btnProject').attr('class', 'active');
      $('#btnHome').removeClass();
      $('#btnPortfolio').removeClass();
      $('#btnAbout').removeClass();
      $('#btnContact').removeClass();
    }
    else if(($(window).scrollTop() > portfolioY) && ($(window).scrollTop() < contactY)) {
      $('#btnPortfolio').attr('class', 'active');
      $('#btnHome').removeClass();
      $('#btnProject').removeClass();
      $('#btnAbout').removeClass();
      $('#btnContact').removeClass();
    }
    else if(($(window).scrollTop() > contactY) && ($(window).scrollTop() < aboutY)) {
      $('#btnContact').attr('class', 'active');
      $('#btnHome').removeClass();
      $('#btnPortfolio').removeClass();
      $('#btnProject').removeClass();
      $('#btnAbout').removeClass();
    }
    else if(($(window).scrollTop() > aboutY)) {
      $('#btnAbout').attr('class', 'active');
      $('#btnHome').removeClass();
      $('#btnPortfolio').removeClass();
      $('#btnProject').removeClass();
      $('#btnContact').removeClass();
    }
  	else{
      // history.pushState({urlurlPath:'/'},'','/');
  		$('#btnHome').removeClass();
      $('#btnAbout').removeClass();
      $('#btnPortfolio').removeClass();
      $('#btnProject').removeClass();
      $('#btnContact').removeClass();
  	}
  }

  if($('.navbar').length > 0){
      $(window).on("scroll load resize", function(){
          checkScroll();
      });
  }
