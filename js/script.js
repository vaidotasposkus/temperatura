$(document).ready(function () {

    $('input[name=kelvin]').on('input',function () {
       var temperature = parseFloat($(this).val());

       var fahrenheit = kelvinToFahrenheits(temperature);
       var celsius = kelvivToCesius(temperature);

       $('input[name=fahrenheit]').val(fahrenheit);
       $('input[name=celsius]').val(celsius);
    });

    $('input[name=fahrenheit]').on('input',function () {
        var temperature = parseFloat($(this).val());

        var kelvin = fahrenheitsToKelvin(temperature);
        var celsius = fahrenheitsToCelsius(temperature);

        $('input[name=kelvin]').val(kelvin);
        $('input[name=celsius]').val(celsius);
    });

    $('input[name=celsius]').on('input',function () {
        var temperature = parseFloat($(this).val());

        var kelvin = celsiusToKelvin(temperature);
        var fahrenheit = celsiusToFahrenheit(temperature);

        $('input[name=kelvin]').val(kelvin);
        $('input[name=fahrenheit]').val(fahrenheit);
    });

});


function kelvinToFahrenheits(kelvin) {
    var fahrenheit;
    fahrenheit = ( kelvin * 9 ) / 5 - 459.67;
    return fahrenheit.toFixed(2);
}

function kelvivToCesius(kelvin) {
    var celsius;
    celsius = kelvin - 273.15;
    return celsius.toFixed(2);
}

function fahrenheitsToKelvin(fahrenheit) {
    var kelvin;
    kelvin = ( fahrenheit + 459.67 ) * ( 5 / 9 );
    return kelvin.toFixed(2);
}

function fahrenheitsToCelsius(fahrenheit) {
    var celsius;
    celsius = ( fahrenheit - 32 ) * ( 5 / 9 );
    return celsius.toFixed(2);
}

function celsiusToKelvin(celsius) {
    var kelvin;
    kelvin =  celsius + 273.15;
    return kelvin.toFixed(2);
}

function celsiusToFahrenheit(celsius) {
    var fahrenheit;
    fahrenheit = celsius * ( 9 / 5 )  + 32;
    return fahrenheit.toFixed(2);
}