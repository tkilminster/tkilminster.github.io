jQuery(window).on('load', function () {
  localStorage.setItem('fromSite', true);
});

function goBack() {
    window.history.back();
}

jQuery(window).on('load', function () {

    $( '#loading' ).fadeOut(1000);
    setTimeout(function() {
      $( '#loaded' ).removeClass('loading');
    }, 1000);

});

$( document ).ready(function() {


    if(window.location.href.indexOf('pacman') > -1) {
      $( '.carousel ').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
         {
           breakpoint: 1200,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
           }
         },
         {
           breakpoint: 850,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
           }
         }
       ]
      });
    } else if(window.location.href.indexOf('annocell') > -1) {
      $( '.carousel ').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      });
    } else if(window.location.href.indexOf('eamonn') > -1) {
      $( '.carousel ').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      });
    }

    $( '#back-button' ).hover(function() {
      $( '#cloud ').css('fill', '#00ABE9');
      $( '#cloud ').css('stroke', 'white');
      $( '#arrow ').css('fill', 'white');
    }, function() {
      $( '#cloud ').css('fill', 'white');
      $( '#cloud ').css('stroke', '#00ABE9');
      $( '#arrow ').css('fill', '#00ABE9');
    });

    $( '.github' ).hover(function() {
      $( '#github-logo ').css('filter', 'invert(100%)');
      $( '#github-text').css('color', 'black');
      $( '.github' ).css('background', 'white');
    }, function() {
      $( '#github-logo ').css('filter', 'invert(0%)');
      $( '#github-text ').css('color', 'white');
      $( '.github' ).css('background', 'black');
    });
});
