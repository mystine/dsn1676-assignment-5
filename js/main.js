var $listField = $('.list-field');
var $form = $('form');
var $input = $('#the-list');

$form.on('submit', function(eventObject) {
	eventObject.preventDefault();

	var $theLI = $('<li>');
	$theLI.html($input.val());
    var $button = $('<button class="bg-col">X</button>');
    
    
    $input.append($theLI);
	$theLI.append($button);

$listField.on('click', 'li', function () {
    $(this).addClass('js-strike')
});

$listField.on('click', 'button', function () {
    $(this).parent().remove();
})