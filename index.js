const contentContainer = $('.content')
const question = $('.question')
const agreeButton = $('#agree-btn')
const disagreeButton = $('#disagree-btn')
const disagreeSound = new Audio('audio/disagree.mp3')
const tickSound = new Audio('audio/tick.mp3')
const backgroundSound = new Audio("audio/background.mp3")

$(document).ready(function() {
  setTimeout(function() {
    intro();
    $('.spinner').fadeOut()
    $('#init').delay(1000).fadeOut('slow')
    $('body').delay(1000).css({
      'overflow': 'visible'
    })
  }, 600);
})

function intro() {
  $('.content').hide();
  Swal.fire({
    title: 'Hello my princess',
    text: 'Today I have a important question for you',
    imageUrl: 'img/giphy.gif',
    imageWidth: 480,
    imageHeight: 480,
    background: '#fff url("img/background.webp")',
    confirmButtonText: 'Click me to answer',
  }).then(function() {
    $('.content').show(200);
  })
}

function moveContainer() {
  const x = Math.random() * ($(window).width() - contentContainer.width()) * 0.9;
  const y = Math.random() * ($(window).height() - contentContainer.height()) * 0.9;
  contentContainer.css("transform", "translate(0%, 0%)");
  contentContainer.css("left", x + "px");
  contentContainer.css("top", y + "px");
}

disagreeButton.mousemove(function() {
  disagreeSound.play()
  moveContainer();
}) 

agreeButton.click(function () {
  tickSound.play()
  Swal.fire({
    title: 'Answer the finally question belowww',
    html: true,
    width: 900,
    padding: '3em',
    html: "<input type='text' class='form-control' id='txtReason' onmousemove=textGenerate()  placeholder='Whyyyyyy'>",
    background: '#fff url("img/background.webp")',
    backdrop: `
            rgba(0,0,123,0.4)
            url("img/giphy2.gif")
            left top
            no-repeat
          `,
    confirmButtonColor: '#3085d6',
    confirmButtonColor: '#fe8a71',
    confirmButtonText: 'Submit'
  }).then((result) => {
    if (result.value) {
      Swal.fire({
        width: 900,
        confirmButtonText: 'End',
        background: '#fff url("img/background.webp")',
        title: 'My message to you',
        text: 'Never be sad anymore!!!',
        confirmButtonColor: '#83d0c9',
        onClose: () => {
          window.location = 'https://www.facebook.com/cryingmachine.ly'
        }
      })
    }
  })
})

function textGenerate() {
  let n = ""
  let text = "Because you bring happiness to meeeee"
  let a = Array.from(text)
  let textVal = $('#txtReason').val() ? $('#txtReason').val() : ""
  let count = textVal.length
  if (count > 0) {
    for (let i = 0; i < count; i++) {
      n = n + a[i]
      if (i == text.length) {
        n = text
        break;
      }
    }
  }
  $('#txtReason').val(n)
  setTimeout("textGenerate()", 1)
}