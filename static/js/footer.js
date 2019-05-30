$('#tahun').html(new Date().getFullYear());
var currentUrl = window.location.pathname;
if (currentUrl == '/project') {
    $(document).ready(function () {
        $('.navbar').hide();
        $('#closeTab').hide();
    });
} else if (currentUrl == '/resume') {
    $(document).ready(function () {
        $('.navbar').hide();
        $('.site-footer').hide();
        $('#closeTab').show();
    });
} else if (currentUrl == '/') {
    $(document).ready(function () {
        $('.navbar').show();
        $('.site-footer').show();
        $('#closeTab').hide();
    });
}

$(document).ready(function () {
    $('.linkedin').attr('href', 'https://www.linkedin.com/in/dilan-ramadhan-409921112').attr('target', '_blank');

    $('.github').attr('href', 'https://github.com/dilanrm').attr('target', '_blank');
});