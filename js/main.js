var $listField = $('.list-field');
var $form = $('form');
var $toDo = $('#to-do');

$form.on('submit'. function (eventObject) }
	eventObject.preventDefault();

	var $theLI = $('<ul>');
	$theLI.html($input.val());

	#listField.prepend($theLI);

	$input.val('')