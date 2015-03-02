var $listField = $('.list-field');
var $form = $('form');
var $input = $('#the-list');
var $button = $('.add-button');

$form.on('submit', function(eventObject) {
	eventObject.preventDefault();

	var $theLI = $('<li>');
	$theLI.html($input.val());

	$listField.prepend($theLI);

	$input.val('');
});

$listField.on('click', 'li', function () {
    $(this).addClass('js-strike')
});

