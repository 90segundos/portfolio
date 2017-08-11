/* ----------------[ variables ]---------------- */

var
  transition_time = 500; // Milliseconds
  $activate_on_ready = $('.activate-on-ready');
  $main_nav = $('.c-nav');



/* ----------------[ functions ]---------------- */

function activate(element){
  if(!element){
    return false;
  }else{
    element.addClass('is-active');
  }
}

function deactivate(element){
  if(!element){
    return false;
  }else{
    element.filter('.is-active').removeClass('is-active');
  }
}

function toggleActive(element){
  if(!element){
    return false;
  }else if(element.hasClass('is-active')){
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
  $('.c-profile-list__item').on("mouseenter",function(){
    var target = $(this).attr('data-item');
    translation = 25 * target;
    console.log('hover '+target);
    $('.c-profile-marker__mark').css({
      left: translation+'%'
    });
  });
  $('.c-profile-list__item').on("mouseleave",function(){
    $('.c-profile-marker__mark').css({
      left: '0%'
    });
  });
}

/* ----------------[ init ]---------------- */

$(document).ready(function(){
  console.log('ready');
  buttonNavInit();
  //activate($activate_on_ready);
  profileMarker();
});
