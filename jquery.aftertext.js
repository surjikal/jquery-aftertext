(function( $ ){

    $.fn.afterText = function(callback, timeout) {
        var timerId = null;
        timeout |= 350;

        this.on('keyup paste', function() {
            clearTimeout(timerId);
            timerId = setTimeout($.proxy(callback, this), timeout);
        });
    };

})( jQuery );