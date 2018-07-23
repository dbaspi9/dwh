$('.carousel').carousel({
  interval: 5000 //changes the speed
})

$('a[href^=#galeria]').click(function(e){
  $('html, body').animate({
    scrollTop: $("#galery_id").offset().top
  }, 2000)
})

$('a[href^=#kontakt]').click(function(e){
  $('html, body').animate({
    scrollTop: $("#contact_id").offset().top
  }, 2000)
})
