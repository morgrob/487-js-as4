
jQuery( document ).ready(function($) {
    console.log( "ready!" );

    $('.my-news-ticker').AcmeTicker({
        type: 'horizontal',
        direction: 'right',
        autoplay: 3500,
        speed: 1000,
        controls: {
          prev: $('.acme-news-ticker-prev'),
          toggle: $('.acme-news-ticker-pause'),
          next: $('.acme-news-ticker-next')
        }
      });
  
});

new jBox('Tooltip', {
    attach: '.first-tooltip',
    trigger: 'mouseenter',
    target: '#pie1',
    position: {
        x: 'center',
        y: 'top'
    },
    outside: 'y',
    getTitle: 'data-jbox-title',
    getContent: 'data-jbox-content'
  });

  new jBox('Tooltip', {
    attach: '.second-tooltip',
    trigger: 'mouseenter',
    target: '#pie2',
    position: {
        x: 'center',
        y: 'top'
    },
    outside: 'y',
    getTitle: 'data-jbox-title',
    getContent: 'data-jbox-content'
  });

        
        
        
        
        
    