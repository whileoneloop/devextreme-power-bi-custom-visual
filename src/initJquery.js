// set jQuery global so libraries can see it
var jQuery = typeof jQuery !== 'undefined'
    ? jQuery
    : window['$'];
console.log('jQuery global is now set, using jQuery.fn.jquery:',jQuery.fn.jquery);