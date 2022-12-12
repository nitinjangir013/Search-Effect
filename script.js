$('.main_container').on('click',function(){
  $(this).css({
    width: '200px',
    borderRadius: '10px'
  });
  $(".search_input").fadeIn().css({
    width: '150px'
  });
  $('.search_icon').css({
    transform: 'rotate(0deg)'
  });
});

$(".search_input").on('change',function(){
  $(".dotline").css({
    width: '0px',
    marginLeft: '0px',
    marginTop: '0px'
  });
  $('.dot').fadeIn();
  $('.search_icon').css({
    transform: 'rotate(1800deg)',
    transition: 'all 10s',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  });
});