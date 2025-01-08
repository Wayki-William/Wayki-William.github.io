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
    console.log('Navigating to:', selectedValue);  // Affiche le chemin sélectionné
    if (selectedValue) {
        window.location.href = selectedValue;
	}
}

function switchStyle() {
    var stylesheet = document.getElementById('stylesheet');
    if (stylesheet.getAttribute('href') === 'styleslight.css') {
        stylesheet.setAttribute('href', 'stylesdark.css');
    } else {
        stylesheet.setAttribute('href', 'styleslight.css');
    }
}


