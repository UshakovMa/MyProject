$(".btn1").click(function(){
    $("#open_s1").slideToggle();
    $('.btn2, .btn3').on('click', function(){
        $('#open_s1').hide()
      });
  });

  $(".btn2").click(function(){
      $("#open_s2").slideToggle();
      $('.btn1, .btn3').on('click', function(){
          $('#open_s2').hide()
        });
    });

    $(".btn3").click(function(){
        $("#open_s3").slideToggle();
        $('.btn1, .btn2').on('click', function(){
            $('#open_s3').hide()
          });
      });
