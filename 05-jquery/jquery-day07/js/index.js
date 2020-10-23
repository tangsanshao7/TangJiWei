$(function () {

  $(".qbh-down").on('click', function () {
    $.fn.fullpage.moveSectionDown();
  })
  $('#fullpage').fullpage({
    sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#fed", "#d04759", "#84d9ed", "#8ac060"],
    navigation: true,
    scrollingSpeed: 1500,
    afterLoad: function (anchorLink, index) {
      if (index == 1) {
        $(".qbh-down").animate({
          opacity: 1
        }, 1000)
      }
      if (index == 2) {
        $('.qbh-list-initsearch').show().animate({
          right: 478
        }, 1000, function () {

          $('.qbh-list-initsearch img:last-child').animate({
            opacity: 1
          }, 1000, function () {
            $('.qbh-list-initsearch').css({
              opacity: 0
            });
            $(".qbh-list-finishsearch").show().animate({
              width: 150,
              bottom: 448,
              left: 710
            }, 1000);
            $('.qbh-list-sofas').animate({
              width: 441
            }, 1000, function () {
              $(".qbh-down").animate({
                opacity: 1
              }, 1000)
            });

            $('.qbh-list-tips img:first-child').delay(1000).hide(0);
          });
        });
      }

      if (index == 5) {
        $('.qbh-payment-hand img').animate({
          top: 20
        }, 1000, function () {
          $('.qbh-payment-mouse img:last-child').show();
          $('.qbh-payment-dropsofa').show().animate({
            bottom: 245
          }, 500, function () {
            $('.qbh-payment-cards img:first-child').animate({
              top: -100
            }, 400)

            $('.qbh-payment-cards img:last-child').animate({
              top: 140
            }, 400)
          })
        })
      }

      if (index == 7) {
        $('.qbh-apprise-main-star').addClass('active');
        $(".qbh-appraise-haoping").delay(1000).show(0).animate({
          left: 45
        }, 1000, function () {
          $(this).animate({
            width: 72
          }, 1000)
        })
      }

      if (index == 8) {
        $(document).mousemove(function (e) {
          var pagex = e.pageX - 440;
          var pagey = e.pageY;

          $('.qbh-shopping-hands').css({
            left: pagex,
            top: pagey
          })

        })

        $('.qbh-shopping-again').click(function () {
          $.fn.fullpage.moveTo(1);
        })
      }
    },
    onLeave: function (index, nextIndex, direction) {
      if (index == 1 && nextIndex == 2) {
        $(".qbh-down").animate({
          opacity: 0
        }, 400)
      }
      if (index == 2 && nextIndex == 3) {
        $('.qbh-list-dropsofa').show().animate({
          bottom: -($(window).height() - 260),
          width: 207,
          left: 370
        }, 1000, function () {
          $('.qbh-buy-main div:nth-child(2)').delay(1000).show(0);
        })
      }

      if (index == 3 && nextIndex == 4) {
        $(".qbh-list-dropsofa").css({
          opacity: 0
        })
        $('.qbh-buy-dropsofa').show().animate({
          bottom: -($(window).height() - 210),
          right: 450,
        }, 1000, function () {
          $('.qbh-buy-dropsofa').css({
            opacity: 0
          });
          $(".qbh-info-cart img:last-child").show();
          $(".qbh-info-cart").animate({
            right: -600
          }, 1000, function () {
            $('.qbh-info-profile').animate({
              opacity: 1
            }, 1000, function () {
              $('.qbh-info-profile img:last-child').animate({
                opacity: 1
              }, 1000);
            });

            $('.qbh-info-tips img:last-child').animate({
              opacity: 1
            }, 1000);
          });
        })
      }

      if (index == 5 && nextIndex == 6) {
        $('.qbh-payment-smallsofa').show().animate({
          bottom: -($(window).height() - 450),
          width: 40
        }, 1000)

        $('.qbh-delivery-box').show().animate({
          bottom: 450,
          left: 180
        }, 1000, function () {
          $('.qbh-payment-smallsofa').css({
            opacity: 0
          })
          $(this).animate({
            bottom: 50,
            left: 480,
            width: 10
          }, 1000, function () {
            $(this).css({ opacity: 0 })
            $('.qbh-delivery').animate({
              'backgroundPositionX': '100%'
            }, 2000, function () {
              $('.qbh-delivery-tips img:last-child').animate({
                opacity: 1
              }, 2000, function () {
                $('.qbh-delivery-man').animate({
                  bottom: 108,
                  right: 610,
                  height: 305
                }, 1000, function () {
                  $(this).animate({
                    right: 400
                  }, 1000, function () {
                    $(".qbh-delivery-door").show();
                    $(".qbh-delivery-buyer").animate({
                      height: 294
                    }, 1000, function () {
                      $('.qbh-delivery-shouhuo').show();
                    })
                  })
                })
              })
            })
            $('.qbh-delivery-truck img:last-child').show();
            $('.qbh-delivery-tips img:first-child').animate({
              opacity: 0
            }, 1000)

          })
        })
      }
    }
  });
});