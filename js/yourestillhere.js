active = true;

    if (typeof localStorage.getItem("ysh_time") !== "undefined" && localStorage.getItem("ysh_time")) {
        time = localStorage.getItem("ysh_time");
    } else {
        active = false;
    }

    if (typeof localStorage.getItem("ysh_message") !== "undefined" && localStorage.getItem("ysh_message")) {
        message = localStorage.getItem("ysh_message");
    } else {
        message = 'You\'re still here';
    }

var check = function () {
    $.notification(message, {
        className: 'jquery-notification',
        duration: 300,
        freezeOnHover: false,
        hideSpeed: 300,
        position: 'center',
        showSpeed: 300,
        zIndex: 99999
    });
};

$(document).ready(function () {
    if (active) {
        var interval = 1000 * time;
        setInterval(check, interval);
    }
});