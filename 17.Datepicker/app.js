function datepickerTitle(elem) {
    let label = elem.nextElementSibling;
    let titleText = '';

    if (label && label.tagName === 'LABEL') {
        titleText = label.textContent;
    } else {
        titleText = elem.getAttribute('aria-label') || 'Select a date';
    }

    return titleText;
}

document.addEventListener("DOMContentLoaded", function () {
    const elems = document.querySelectorAll('.datepicker_input');

    for (let elem of elems) {
        new Datepicker(elem, {
            format: 'dd-mm-yyyy',
            autohide: true, // Ensures the datepicker closes after selection
            title: datepickerTitle(elem)
        });
    }
});
