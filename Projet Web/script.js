"use strict";


function draw() {
	var canvas = document.getElementById("canvas");
	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");

		ctx.fillStyle = "rgb(200, 0, 0)";
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect(30, 30, 50, 50);
	}
}
function navigateToPage() {
	const selectElement = document.getElementById('page-select');
    const selectedValue = selectElement.value;
    if (selectedValue) {
        window.location.href = selectedValue;
	}
}

function switchStyle() {
    var stylesheet = document.getElementById('stylesheet');
    if (stylesheet.getAttribute('href') === 'styles1_a.css') {
        stylesheet.setAttribute('href', 'styles1_b.css');
    } else {
        stylesheet.setAttribute('href', 'styles1_a.css');
    }
}

