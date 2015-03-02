var $listField = $('.list-field');
var $form = $('form');
var $input = $('#the-list');

$form.on('submit', function(eventObject) {
	eventObject.preventDefault();

	var $theLI = $('<li>');
	$theLI.html($input.val());
    
    var $button = $('<button class="bg-col">X</button>');
    
	$listField.prepend($theLI);
    
    $theLI.prepend($button);
    
	$input.val('');
});

$listField.on('click', 'li', function () {
    $(this).addClass('js-strike')
});

$list.on('click', 'button', function () {
	$(this).parent().remove();
});
