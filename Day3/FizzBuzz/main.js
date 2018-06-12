function fizzBuzz() {
    var i = 0;
    var output = i;
    while (i <= 25) {
        output = i;
        if (i % 2 == 0 && i % 3 != 0) 
             output = "Fizz";
        if (i % 3 == 0 && i % 2 != 0)
            output = "Buzz";
        if (i % 3 == 0 && i % 2 == 0)
            output = "FizzBuzz";
        console.log(output);
        i++;
    }
}



var button = document.querySelector('.btn1');

button.addEventListener('click', function () {
    fizzBuzz();
});
