"use strict";

window.onload = function() {
    const selectElement = document.getElementById('page-select');
    
    const currentPage = window.location.pathname.split('/').pop();

    for (let i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === currentPage) {
            selectElement.selectedIndex = i;
            break;
        }
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
    if (stylesheet.getAttribute('href') === '../css/styleslight.css') {
        stylesheet.setAttribute('href', '../css/stylesdark.css');
    } else {
        stylesheet.setAttribute('href', '../css/styleslight.css');
    }
}


