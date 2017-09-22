const mq500 = window.matchMedia( "(min-width: 520px)" );

/* Only scroll to the top if the page is refreshed, do not scroll if the page is navigated to */
if (performance.navigation.type == 1) {
  window.scrollTo(0, 0);
}


/* If coming back from a project page do not show loading animation for longer than necessary */
$(window).on("load", function() {

  var beenBefore = localStorage.getItem('fromSite');
  if (beenBefore === 'true') {
    $( '#loaded' ).fadeIn(1000);
    $( '#loading' ).css('display', 'none');
    localStorage.setItem('fromSite', false);
  } else {
    setTimeout(function() {
      $( '#loading ').fadeOut(1000);
      $( '#loaded ').fadeIn(1000, function() {
        $('body').css('overflow', 'auto');
      });
    }, 2000);
  }

});

$( document ).ready(function() {

  // Have to unfortunately repeat this code so it willl do hover without window resize
  if(mq500.matches) {
    $( '#uglypic' ).hover(function(){
      $( '.thats-me' ).css('transform', 'scale(1.5, 1.5) rotate(-10deg)');
      $( '.thats-me').css('left', '330px');
    }, function() {
      $( '.thats-me' ).css('transform', 'rotate(0deg)');
      $( '.thats-me').css('left', '300px');
    });
  } else {
    $( '.thats-me').css('left', '175px');
    $( '#uglypic' ).hover(function(){
      $( '.thats-me' ).css('transform', 'scale(1.25, 1.25) rotate(-10deg)');
      $( '.thats-me').css('left', '200px');
    }, function() {
      $( '.thats-me' ).css('transform', 'rotate(0deg)');
      $( '.thats-me').css('left', '175px');
    });
  }

  /* ALL THE HOVERS ARGHHH */
$(window).resize(function(){
  console.log('resize');
  $( '.thats-me').css('left', '300px');
    if(mq500.matches) {
      $( '#uglypic' ).hover(function(){
        $( '.thats-me' ).css('transform', 'scale(1.5, 1.5) rotate(-10deg)');
        $( '.thats-me').css('left', '330px');
      }, function() {
        $( '.thats-me' ).css('transform', 'rotate(0deg)');
        $( '.thats-me').css('left', '300px');
      });
    } else {
      $( '.thats-me').css('left', '175px');
      $( '#uglypic' ).hover(function(){
        $( '.thats-me' ).css('transform', 'scale(1.25, 1.25) rotate(-10deg)');
        $( '.thats-me').css('left', '200px');
      }, function() {
        $( '.thats-me' ).css('transform', 'rotate(0deg)');
        $( '.thats-me').css('left', '175px');
      });
    }
  });

  $( '#linkedin' ).hover(function(){
    $( '#linkedin-bar' ).css('margin-top', '0px');
  }, function() {
    $( '#linkedin-bar' ).css('margin-top', '-10px');
  });

  $( '#github' ).hover(function(){
    $( '#github-bar' ).css('margin-top', '0px');
  }, function() {
    $( '#github-bar' ).css('margin-top', '-10px');
  });

  $( '#email' ).hover(function(){
    $( '#email-bar' ).css('margin-top', '0px');
  }, function() {
    $( '#email-bar' ).css('margin-top', '-10px');
  });

  $( '#pacman').hover(function() {
    hoverProject('pacman', true);
  }, function() {
    hoverProject('pacman', false);
  });

  $( '#annocell').hover(function() {
    hoverProject('annocell', true);
  }, function() {
    hoverProject('annocell', false);
  });

  $( '#eamonn').hover(function() {
    hoverProject('eamonn', true);
  }, function() {
    hoverProject('eamonn', false);
  });

  //Smooth Scrolling
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr('tabindex','-1');
              $target.focus();
            };
          });
        }
      }
    });


});

/*
 * Apply the hover animation sequence to any project that has been
 * set up correctly with the correct naming conventions.
 */
function hoverProject(project, enter) {
  if(enter) {
    $( '#'+project+'-line' ).css('width', '50%');
    $( '#'+project+'-line' ).css('opacity', '1', 1000);
    $( '#'+project+'-title').css('opacity', '1');
    $( '#'+project+'-title').css('padding-left', '0');
    $( '#'+project+'-bg').css('bottom', '0');
    setTimeout(function(){
      $( '#'+project+'-desc').css('opacity', '1');
      $( '#'+project+'-desc').css('padding-left', '0');
    }, 100);
  } else {
    $( '#'+project+'-line' ).css('width', '0');
    $( '#'+project+'-line' ).css('opacity', '0', 1000);
    $( '#'+project+'-title').css('opacity', '0');
    $( '#'+project+'-title').css('padding-left', '75px');
    $( '#'+project+'-bg').css('bottom', '100%');
    setTimeout(function(){
      $( '#'+project+'-desc').css('opacity', '0');
      $( '#'+project+'-desc').css('padding-left', '75px');
    }, 100);
  }
}

window.addEventListener('scroll', function() {

  //About section
  inView('.me-container');
  inView('.text-container .title');
  inView('#intro');
  inView('#why');
  inView('#why-ans');
  inView('#fave');
  inView('#fave-ans');
  inView('#dress');
  inView('#dress-ans');
  inView('.cv-button');

  //Work Section
  inView('#work-title');
  inView('#eamonn');
  inView('#annocell');
  inView('#pacman');

  //Contact Section
  inView('#contact h1');
  inView('.contact-buttons');

});

// Remove hidden class if in viewport
function inView(element) {
  $(element).on('inview', function(event, isInView) {
    if (isInView) {
      $(element).removeClass('hidden');
    }
  });
}
