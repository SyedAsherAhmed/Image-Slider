$(function(){
    $('#next').on('click', function(){
            $('.slider img.active').removeClass('active').next().addClass('active')
      if(!$('.slider img').hasClass('active')){
          $('.slider img').first().addClass('active')
      }      
    })
    $('#prev').on('click', function(){
            $('.slider img.active').removeClass('active').prev().addClass('active')
      if(!$('.slider img').hasClass('active')){
          $('.slider img').last().addClass('active')
      }
    })

    // console.log($('div').children())
    // console.log($('img').last().siblings())
})