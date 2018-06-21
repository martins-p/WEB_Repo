$('.carousel').ready(function(){

    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 4500,
        arrows: false,
        centerPadding: '50px',
        infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
     })
});


$('#link-home').click( function() {
    event.preventDefault();
    swal({
        title: 'NAPTIME',
        text: 'Will chase bugs later.',
        imageUrl: ' https://i.imgflip.com/ycd47.jpg',
        imageWidth: 400,
        imageHeight: 350,
        width: 600,
        padding: '3em',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://media.giphy.com/media/mTs11L9uuyGiI/giphy.gif")
          center left
          no-repeat
        `
      })
});

$('#link-article').click( function() {
    event.preventDefault();
    swal({
        title: 'CODING HARD',
        text: 'Please stand by.',
        imageUrl: ' https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
        imageWidth: 400,
        imageHeight: 350,
        width: 600,
        padding: '3em',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://media.giphy.com/media/exnOGAkUfpQVW/giphy.gif")
          center right
          no-repeat
        `
      })
});

$('#link-chat').click( function() {
    event.preventDefault();
    swal.mixin({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2']
      }).queue([
        {
          title: 'Hello!',
          text: 'What is your name?'
        },
        'What do you want to chat about?',
      ]).then((result) => {
        if (result.value) {
          swal({
            title: 'Nice to meet you, ' + result.value[0] + '!',
            text: 'We chat about ' + result.value[1] + ' later. Must code now.',
            imageUrl: ' https://gifs.acegif.com/cat-typing-24.gif',
        imageWidth: 440,
        imageHeight: 300,
          })
        }
      })
});

$('#link-register').click( function() {
    event.preventDefault();
    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
    })
    swalWithBootstrapButtons({
      title: 'Friday?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'FRIDAY!',
      cancelButtonText: 'Not friday.',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        swal({
          title: 'FRIDAY!!!',
          imageUrl: 'https://media.giphy.com/media/nUKufyQSSnJi8/giphy.gif',
          imageWidth: 400,
          imageHeight: 400,
          width: 500,
          padding: '1em',
          backdrop: `
            rgba(0,0,123,0.4)
            url("https://media.giphy.com/media/10HTAgEA1o5A9a/giphy.gif")
            center right
            repeat
          `
        })
      } else if (
        // Read more about handling dismissals
        result.dismiss === swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons(
          'ERROR',
          'No Friday'
        )
      }
    })
});

$('#link-about').click( function() {
  event.preventDefault();
  $(this).html('');
});