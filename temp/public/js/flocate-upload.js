$(function() { 

	$(document).ready(function() {

	});

	$("#submit").click(function() {

		$.post(
			"/api/entity/add",
			{
				what: $("#what").val(),
				detail: $("#detail").val(),
				resources: $("#resources").val(),
				where: [ $("#lat").val(), $("#lng").val() ],
				when: $("#when").val(),
				who: $("#who").val()
			},
			function(data) {
				if (data.saved === "yep") {
					window.alert("saved");
				}
				else {
					window.alert("not good");
				}
			},
			"json"
		).error(function(e, xhr) {
			window.alert(e);
		});

	});

});