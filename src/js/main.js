/* ----------------[ variables ]---------------- */

var
  transition_time = 500; // Milliseconds
  $activate_on_ready = $('[data-trigger=ready]');
  $main_nav = $('.c-nav');



/* ----------------[ functions ]---------------- */

function activate(element){
  if(!element){
    return false;
  }else{
    element.addClass('active');
  }
}

function deactivate(element){
  if(!element){
    return false;
  }else{
    element.filter('.active').removeClass('active');
  }
}

function toggleActive(element){
  if(!element){
    return false;
  }else if(element.hasClass('active')){
    deactivate(element);
  }else{
    activate(element);
  }
}

function buttonNavInit(){
  var blocked = false;
  $('.c-nav-button').on('click',function(event){
    event.preventDefault();
    if(!blocked){
      console.log('click');
      blocked = true;
      toggleActive($(this));
      toggleActive($main_nav);
      setTimeout(function(){
        blocked = false;
      },transition_time);
    }else{
      console.log('blocked');
    }
  });
}

function profileMarker(){
  $('.c-home-nav__item').on("mouseenter",function(){
    var target = $(this).attr('data-item');
    translation = 25 * target;
    $('.c-home__underline-mark').css({
      left: translation+'%'
    });
  });
  $('.c-home-nav__item').on("mouseleave",function(){
    $('.c-home__underline-mark').css({
      left: '0%'
    });
  });
}

/* ----------------[ init ]---------------- */

$(document).ready(function(){
  console.log('ready');
  buttonNavInit();
  activate($activate_on_ready);
  profileMarker();
});
