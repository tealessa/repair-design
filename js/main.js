/*
document.addEventListener("DOMContentLoaded", function (event) {
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector ('.modal__close')
    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    }
    modalBtn.forEach(element => {
        element.addEventListener('click', switchModal);
    });
    
    closeBtn.addEventListener('click', switchModal)

    document.addEventListener('click', (e) => {
        if (e.target.classList === modal.classList) {
            modal.classList.toggle('modal--visible');
        };
    });
    
    document.addEventListener('keydown', (e) => {
        if(e.key == 'Escape') {
            if (modal.classList.contains('modal--visible')) {
                modal.classList.toggle('modal--visible');
            };
        };
    });
})
*/

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close'),
      scrollUpBtn = $('.scroll__block'),
      scrollDownBtn = $('.hero__scroll-down');
  
  
  modalBtn.click(function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.click(function () {
    modal.toggleClass('modal--visible');
  });
  modal.click(function (element) {
    if (!($(element.target).parents('.modal').length))
    {
        modal.removeClass('modal--visible');
    }
  });
  $(document).keydown(function (e) { 
    if(e.which === 27)
    modal.removeClass('modal--visible');
  });
  
  $(window).scroll(function () { 
    if($(this).scrollTop () > 85) {
        scrollUpBtn.addClass('scroll__block--visible');
    } else {
        scrollUpBtn.removeClass('scroll__block--visible');
    }
  });
  
  scrollUpBtn.click(function () {
    $('body, html').animate({
        scrollTop: 0
    }, 800);
  });
  
  scrollDownBtn.click(function () {
    $('body, html').animate({
        scrollTop: scrollDownBtn.offset().top 
    }, 1000);
});

        // var mySwiper = new Swiper ('.swiper-container', {
        //     loop: true
        // })

        const swiper = new Swiper('.swiper', {
            loop: true,
          
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        var next = $('.swiper-button-next');
        var prev = $('.swiper-button-prev');
        var bullets = $('.swiper-pagination');

        next.css('left', prev.width() + 10 + bullets.width() + 10)
        bullets.css('left', prev.width() + 10)

        var nextTwo = $('.swiper-button-next_2');
        var bulletsTwo = $('.swiper-pagination_2');

        
        nextTwo.css('left', prev.width() + 10 + bulletsTwo.width() + 10)
        bulletsTwo.css('left', prev.width() + 10)

        new WOW().init();

        //validation

        $('.modal__form').validate({
            errorClass: "invalid",
            rules: {
                // simple rule, converted to {required:true}
                userName: {
                  required: true,
                  minlength: 2,
                  maxlength: 15
                },
                userPhone: "required",
                // compound rule
                userEmail: {
                  required: true,
                  email: true
                }
              },
              errorElement:"div",
              messages: {
                userName: {
                    required:"Имя обязательно",
                    minlength:"Имя не короче двух символов",
                    maxlength:"Имя не длиннее 15 символов"
                },
                userPhone: "Обязательно укажите телефон",
                userEmail: {
                  required: "Обязательно укажите email",
                  email: "Введите корректный email, в формате: name@domain.com"
                },
              },
              submitHandler: function(form) {
                $.ajax({
                  type: "POST",
                  url: "send.php",
                  data: $(form).serialize(),
                  success: function (response) {
                    alert('Форма отправлена, мы свяжемся с вами через 10 минут');
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                  },
                  error: function (response) {
                    console.error('Ошибка запроса ' + response);
                    ym('87512139', 'reachGoal', 'button'); return true;
                  }
                });
              }
        });
        $('[type=tel]').mask('+7(000) 000-00-00');

        $('.control__form').validate({
          errorClass: "invalid",
          rules: {
              // simple rule, converted to {required:true}
              userName: {
                required: true,
                minlength: 2,
                maxlength: 15
              },
              userPhone: "required",
            },
            errorElement:"div",
            messages: {
              userName: {
                  required:"Имя обязательно",
                  minlength:"Имя не короче двух символов",
                  maxlength:"Имя не длиннее 15 символов"
              },
              userPhone: "Обязательно укажите телефон",
            },
            submitHandler: function(form) {
              $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                  alert('Форма отправлена, мы свяжемся с вами через 10 минут');
                  $(form)[0].reset();
                  modal.removeClass('modal--visible');
                },
                error: function (response) {
                  console.error('Ошибка запроса ' + response);
                  ym('87512139', 'reachGoal', 'button'); return true;
                }
              });
            }
        });

        $('.footer__form').validate({
          errorClass: "invalid",
          rules: {
              // simple rule, converted to {required:true}
              userName: {
                required: true,
                minlength: 2,
                maxlength: 15
              },
              userPhone: "required",
              userQuestion: "required",
            },
            errorElement:"div",
            messages: {
              userName: {
                  required:"Заполните поле",
                  minlength:"Имя не короче двух символов",
                  maxlength:"Имя не длиннее 15 символов"
              },
              userPhone: "Заполните поле",
              userQuestion: {
                required:"Задайте вопрос",
              },
            },
            submitHandler: function(form) {
              $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                  alert('Форма отправлена, мы свяжемся с вами через 10 минут');
                  $(form)[0].reset();
                  modal.removeClass('modal--visible');
                },
                error: function (response) {
                  console.error('Ошибка запроса ' + response);
                  ym('87512139', 'reachGoal', 'button'); return true;
                }
              });
            }
        });
});

