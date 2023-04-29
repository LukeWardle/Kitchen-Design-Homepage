// Smooth scrolling
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });
  
  // Testimonials slider
  $('.slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
  
  // Contact form submission
  $('#contact-form').submit(function (e) {
    e.preventDefault();
  
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
  
    $.ajax({
      url: 'submit-form.php',
      type: 'POST',
      data: {name: name, email: email, message: message},
      success: function (response) {
        $('#form-feedback').html(response);
      }
    });
  });
  