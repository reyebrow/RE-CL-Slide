/**
 * @file
 * This file provides whatever javascript logic and functions are necessary for
 * the Context Libraries Slide module.
 */
Drupal.behaviors.re_clslide = function(context) {
  $('#block-views-re_clslide-block_1 .view-content')
    .scrollable({
      circular: true,
      items: '.re_clexample'
    })
    .autoscroll({
      autoplay: true
    });
} /* Drupal.behaviors.re_clslide */