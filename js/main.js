var $btnShowHide = $('.btn-show-hide');
var $box = $('.box'); 

var $btnMove = $('.btn-move');
var $Diamond = $('.diamond');

var $btnCollapseExpand = $('.btn-collapse-expand');
var $Panel = $('.panel');

var $btnBounce = $('.btn-bounce');
var $Circle = $('.circle');

var $btnAppend = $('.btn-append');
var $List = $('.list');


$btnShowHide.on('click', function () {
    $box.toggleClass('js-box-hide');
});

$btnMove.on('click', function () {
    $Diamond.toggleClass('js-diamond-move');
});

$btnCollapseExpand.on('click', function () {
    $Panel.toggleClass('js-panel-expand');
});

$btnBounce.on('click', function () {
    $Circle.addClass('js-circle-bounce');
});

$Circle.on('webkitAnimationEnd animationend', function () {
    $Circle.removeClass('js-circle-bounce');
});

$btnAppend.on('click', function () {
    var $li = $('<li>New List Item</li>');
    $List.prepend($li);
    $li.addClass('js-btn-append');
});

