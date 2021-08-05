jQuery(document).ready(function ($) {
setTimeout(function(){
/*-------------------------------------------------------------------------------
portfolio isotope 
-------------------------------------------------------------------------------*/ 
var $grid = $('.grid').imagesLoaded( function() {
  // init Isotope after all images have loaded
  $grid.isotope({
    // options...
    itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1
            }
  });
});
          // filter items on button click
    $('.portfolio-menu').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });
     }, 3000);
});

