
$( document ).ready(function() {
    console.log( "ready!" );
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