$(document).ready(function() {
  $('.pager li a').click(function() {
    var $clicked_index = $(this).parent().index();
    $('.pager li').removeClass('active');
    $('.pager li').eq($clicked_index).addClass('active');

    // $('#carousel > li').removeClass('active');
    // $('#carousel > li').eq($clicked_index).addClass('active');

    $('#carousel > li').fadeOut('1000');
    $('#carousel > li').eq($clicked_index).delay('400').fadeIn('500');
    // var $content_height = $('#carousel > li').eq($clicked_index).height();
    // $('#carousel').css('min-height', $content_height);
    
    // var $content_height = $('#carousel > li').eq($clicked_index).height();
    // $('#carousel').css('min-height', $content_height);
   
    return false;
  });

  // var $content_height = $('.content.active').height();
  // $('#carousel').css('min-height', $content_height);
});
