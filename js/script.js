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
    var currentHref = stylesheet.getAttribute('href');

    if (currentHref === 'css/styleslight.css' || currentHref === '../css/styleslight.css') {// On remplace dans le href light par dark ou inversement
        stylesheet.setAttribute('href', currentHref.replace('light', 'dark'));
    } else if (currentHref === 'css/stylesdark.css' || currentHref === '../css/stylesdark.css') { 
        stylesheet.setAttribute('href', currentHref.replace('dark', 'light'));
    }
}


