let now = 0;
let pressedButton = 0;

function submitButton() {
    $('#last').remove();
    let numberOfButton = $('#numberButtons').val();
    if (numberOfButton >= 3 && numberOfButton <= 55 && numberOfButton % 2 !== 0 && now === 0){
        displayButtons();
    } else if (pressedButton !== 1 && now !== 1){
        $('#alert').append('<div class="alert alert-warning" role="alert" id="last">\n' +
            '  Enter a number between 3 - 55 (The number entered must be odd)' +
            '</div>')
    }
    return false;
}

function checkPressedButton() {
    if (pressedButton === 0) {
        checkWinner();
    }
    return false;
}

function checkWinner() {
    pressedButton = 1;
    let numberOfButton = $('#numberButtons').val();
    let random = Math.floor(Math.random() * numberOfButton + 1);
    let newRandomNumber = Math.floor(Math.random() * numberOfButton + 1);
    if(newRandomNumber === random) {
        $('#alert').append('<div class="alert alert-success" role="alert">\n' +
            '  You won!' +
            '</div>')
    } else {
        $('#alert').append('<div class="alert alert-danger" role="alert">\n' +
            '  You lose :(' +
            '</div>')
    }
    return false;
}

function displayButtons() {
    now = 1;
    let numberOfButton = $('#numberButtons').val();
    let middle = Math.floor(numberOfButton / 2) + 1;
    let number = 0;
    for (let i = 1; i <= middle; ++i) {
        for (let j = 1; j <= numberOfButton; ++j) {
            if ((j === middle - i + 1) || (j === middle + i - 1)) {
                ++number;
                $('#row').append('<button type="button" class="btn btn-dark" onclick="checkPressedButton();">' + number + '</button>')
            } else {
                $('#row').append('<button type="button" class="btn btn-secondary btn-light" disabled></button>')
            }
        }
        $('#row').append('<br>');
    }
    return false;
}

function reset() {
    location.reload();
    return false;
}