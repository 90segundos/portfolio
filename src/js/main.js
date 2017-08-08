/* ----------------[ variables ]---------------- */

var
  transition_time = 500; // Milliseconds



/* ----------------[ functions ]---------------- */

function activate(element){
  if(!element){
    return false;
  }else{
    $(element).addClass('is-active');
  }
}

function deactivate(element){
  if(!element){
    return false;
  }else{
    $(element).filter('.is-active').removeClass('is-active');
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
      setTimeout(function(){
        blocked = false;
      },transition_time);
    }else{
      console.log('blocked');
    }
  });
}

/* ----------------[ init ]---------------- */

$(document).ready(function(){
  console.log('ready');
  buttonNavInit();
  activate('.t-animation');
});
