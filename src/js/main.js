
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
    $(element).filter('is-active').removeClass('is-active');
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

/* ----------------[ init ]---------------- */

$(document).ready(function(){
  console.log('ready');
});
