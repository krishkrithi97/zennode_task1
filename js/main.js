$(function () {
// Hide all elements which id starts with text.
$("[id^=text]").hide();

$(".underline").click(function () {
    // Look for the element with id equals text +
    // the clicked element data-rel value.
    $("#text" + $(this).data("rel")).toggle();
});
});
