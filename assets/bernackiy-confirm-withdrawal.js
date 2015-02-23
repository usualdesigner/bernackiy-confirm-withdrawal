(function () {
    jQuery(document).ready(function ($) {
        var unacceptable_watching_time = 60 * 1000;
        $.cookie('bernackiy-confirm-withdrawal', Date.now());
        window.onbeforeunload = function (e) {
            console.log(e.target);
            if ((parseInt($.cookie('bernackiy-confirm-withdrawal')) + parseInt(unacceptable_watching_time)) > parseInt(Date.now()))
                return confirm("Do you really want to close?");
        };
    });
}());