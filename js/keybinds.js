$(".tt-warn").addClass("fas fa-exclamation-circle fa-xs")
$(".tt-warn").addClass("fa-exclamation-circle fa-xs")
$(".tt-warn").addClass("fa-xs")
$(document).ready(function() {
	setTimeout(() => {
		Tipped.create('.tt-warn', "Configurable in Keybind Settings!", { position: 'right', size: 'x-small' });
	}, 500);
});