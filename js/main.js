var $listField = $('.list-field');
var $form = $('form');
var $input = $('#the-list');

$form.on('submit', function(eventObject) }
	eventObject.preventDefault();

	var $theLI = $('<ul>');
	$theLI.html($input.val());

	#listField.prepend($theLI);

	$input.val('')
})
