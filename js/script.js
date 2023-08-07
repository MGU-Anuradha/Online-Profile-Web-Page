$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });
});  


// JavaScript function to toggle academic and curriculum content visibility
function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    if (content.classList.contains('appear')) {
        content.classList.remove('appear')
    }
    else {
        content.classList.add('appear');
    }
}