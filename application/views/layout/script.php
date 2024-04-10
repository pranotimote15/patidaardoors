    <!-- jquery js -->	
    <script src="<?php echo  base_url() ?>assets/front/js/vendor/jquery-3.2.1.min.js"></script>
	<!-- bootstrap js -->	
	<script src="<?php echo  base_url() ?>assets/front/js/bootstrap.min.js"></script>
	<!-- particles Js -->
	<script src="<?php echo  base_url() ?>assets/front/js/particles.min.js"></script>
	<script src="<?php echo  base_url() ?>assets/front/js/jquery.scrollUp.js"></script>
	<!-- carousel js -->
	<script src="<?php echo  base_url() ?>assets/front/js/owl.carousel.min.js"></script>
	<!-- counterup js -->
	<script src="<?php echo  base_url() ?>assets/front/js/jquery.counterup.min.js"></script>
	<!-- waypoints js -->
	<script src="<?php echo  base_url() ?>assets/front/js/waypoints.min.js"></script>
	<script src="<?php echo  base_url() ?>assets/front/js/jquery.counterup.min.js"></script>
	<!-- imagesloaded js -->
	<script src="<?php echo  base_url() ?>assets/front/js/imagesloaded.pkgd.min.js"></script>
	<!-- isotope js -->
	<script src="<?php echo  base_url() ?>assets/front/js/isotope.pkgd.min.js"></script>
	<!-- Wow Js -->
	<script src="<?php echo  base_url() ?>assets/front/js/wow.min.js"></script>
	<script src="<?php echo  base_url() ?>assets/front/js/jquery.meanmenu.js"></script>
	<!-- venobox js -->
	<script src="<?php echo  base_url() ?>assets/front/venobox/venobox.js"></script>
	<!-- venobox min js -->
	<script src="<?php echo  base_url() ?>assets/front/venobox/venobox.min.js"></script>

	<!-- theme js -->	
	<script src="<?php echo  base_url() ?>assets/front/js/theme.js"></script>




<script>
    $('.alert__close').click(function() {

$(this).parent().addClass('closed');

});
</script>
<script>
    // header javascript start here

	$("#hamburgerMenu").click(function() {

$("#navsSectionList").animate({

    'left': '0%'

})

})

$("#menuCloseBtn").click(function() {

$("#navsSectionList").animate({

    'left': '-100%'

})

})

$(window).scroll(function() {

if ($(window).scrollTop() > 50) {

    $('.navbarSec').css({

        position: 'fixed',

        top: '0px',

        'z-index': 1000,

    });

} else {

    $('.navbarSec').css({

        position: 'relative',

    });

}

});

// header script end here 

</script>

<script>
$('.blog_carousel').owlCarousel({
        nav: true,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })
</script>
<script>
$('.product_carousel').owlCarousel({
        nav: true,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })
</script>

<script>
    
$(document).ready(function() {
 
 $(".owl-carousel").owlCarousel({

     autoPlay: 3000,
     items : 1,
     itemsDesktop : [1199,1],
     itemsDesktopSmall : [979,1],
     center: true,
     nav:true,
     loop:true,
     responsive: {
       600: {
         items: 2
       }
     }
  
 });

});
</script>