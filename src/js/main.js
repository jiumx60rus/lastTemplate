jQuery(document).ready(function($) {

    //Masonry blocks
    $blocks = $("#container");

    $blocks.load(function() {
        $blocks.masonry({
            itemSelector: '.post-container'
        });

        // Fade blocks in after images are ready (prevents jumping and re-rendering)
        $(".post-container").fadeIn();
    });

    $(document).ready(function() {
        setTimeout(function() {
            $blocks.masonry();
        }, 500);
    });

    $(window).resize(function() {
        $blocks.masonry();
    });

});
