
var auto = 0;
var availableCoin = 0;
var totalCoin = 0
var up1xCount = 0;
var up10xCount = 0;
var clickUp = 0;
var price1x = 10;
var price10x = 90
var priceClickUp = 50;
var clickCoin = 1;
var clickUpCount = 0;


function main() {
    availableCoin = availableCoin + auto;
    totalCoin = totalCoin + auto;
    $('#count').text(Math.round(availableCoin));
    $('#totalCount').text(Math.round(totalCoin));
    if (availableCoin >= price1x){
        document.getElementById("upgrade1").disabled = false;
        
    } else {
        document.getElementById("upgrade1").disabled = true;
    }
    if (availableCoin >= price10x){
        document.getElementById("upgrade10").disabled = false;
        
    } else {
        document.getElementById("upgrade10").disabled = true;
    }
    if (availableCoin >= priceClickUp){
        document.getElementById("clickUp").disabled = false;
        
    } else {
        document.getElementById("clickUp").disabled = true;
    }
}
var myVar = setInterval(main, 10);

function clickMe() {
    availableCoin+= clickCoin;
    totalCoin+=clickCoin;
}

function upgrade1() {

    if (availableCoin >= price1x) {
        $('#count').text(Math.round(availableCoin -= price1x));
        auto += 0.001;
        up1xCount++;
        price1x = Math.round(price1x * 1.1);      
        $('#1xCount').text(up1xCount);
        $('#1xPrice').text(price1x);

    }
}

function upgrade10() {
    if (availableCoin >= price10x) {
        $('#count').text(Math.round(availableCoin -= price10x));
        auto += 0.01;
        up10xCount++;
        price10x = Math.round(price10x * 1.1);      
        $('#10xCount').text(up10xCount);
        $('#10xPrice').text(price10x);
    }
}

function upgradeClick() {

    if (availableCoin >= priceClickUp) {
        $('#count').text(Math.round(availableCoin -= priceClickUp));
        clickCoin += 1;
        clickUpCount++;
        priceClickUp = Math.round(priceClickUp * 1.5);
        $('#clickUpCount').text(clickUpCount);
        $('#clickUpPrice').text(priceClickUp);

    }
}

var buttonClick = $('#click');
buttonClick.click(function () {
    clickMe();
});

var buttonUp1 = $('#upgrade1');
buttonUp1.click(function () {
    upgrade1();

});
var buttonUp10 = $('#upgrade10');
buttonUp10.click(function () {
    upgrade10();

});

var buttonUpClick = $('#clickUp');
buttonUpClick.click(function () {
    upgradeClick();

});



