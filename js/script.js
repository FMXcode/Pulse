$(document).ready(function(){
  $('.carousel__inner').slick({
  	speed: 1200,
  	prevArrow: '<button type="button" class="slick-prev"><img src="icon/left.png"></button>',
  	nextArrow: '<button type="button" class="slick-next"><img src="icon/right.png"></button>',
  	  responsive: [
    {
      breakpoint: 992,
      settings: {
      	arrows: false
      }
    }
  ]
  });

   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

      $('.catalog-item__link').each(function(i){
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog-item__content').toggleClass('.catalog-item__content_active')
        $('.catalog-item__list').toggleClass('.catalog-item__list_active')
      });
   })
});
	