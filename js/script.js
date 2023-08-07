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
    var contentBox = content.closest('.achievement-box');
    
    if (contentBox.classList.contains('active')) {
      // Hide the content box
      contentBox.classList.remove('active');
      content.style.maxHeight = '0';
    } else {
      // Show the content box
      contentBox.classList.add('active');
      content.style.maxHeight = '600px';
    }
  }

//   // JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  