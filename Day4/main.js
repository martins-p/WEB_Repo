var output = "";
function change() {
    output = document.querySelector('#mainText').innerText;
    switch (output) {
        case "foo":
            output = "bar";
            break;
        default:
            output = "foo";
            break;
    }

document.querySelector('#mainText').innerText = output;
}

var buttonText = "";
function changeButton() {
    buttonText = document.querySelector('#btn2').innerText;
    switch (buttonText) {
        case "foo":
            buttonText = "bar";
            break;
        case "bar":
            buttonText = "buzz";
            break;
        default:
            buttonText = "foo";
            break;
    }
    document.querySelector('#btn2').innerText = buttonText;
}

var button1 = document.querySelector('#btn1');
button1.addEventListener('click', function () {
    change();
});

var button1 = document.querySelector('#btn2');
button1.addEventListener('click', function () {
    changeButton();
});

