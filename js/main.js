

$(document).ready(function(){

    $(".loader").fadeOut('slow');

    $('.navbar-nav .nav-item .nav-link').click(function(){
        
        $(this).parent().parent().find('.nav-item .nav-link').removeClass('active');
        $(this).addClass('active');
         
    });
    
    $('.alert1').click(function(){
        $("#show").fadeIn("slow")
    });

    $('.work .container .first div').hover(function(){
        $(this).find('.open').fadeIn();
        }, function(){
            $(this).find('.open').fadeOut();
      });
      
});















