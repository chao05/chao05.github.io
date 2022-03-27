const cable_ensemble = new Array(
    {length: 0.5, number: '237.59.020'},
    {length: 1,   number: '237.59.021'},
    {length: 3,   number: '237.59.022'},
    {length: 5,   number: '237.59.023'},
    {length: 10,  number: '237.59.024'},
    );

const antenna_ensemble = new Array(
    {length: 1, number: '237.59.060'},
    {length: 3, number: '237.59.061'},    
    {length: 5, number: '237.59.062'},
    );

const power_ensemble = new Array(
    {origin: '国产电源', number: '833.02.999'},
    {origin: '进口电源（德国）', number: '237.58.180'},    
    );

const list_cable = new Object(document.getElementById('cable_option'));
list_cable.style.display = 'none';

const list_antenna = new Object(document.getElementById('antenna_option'));
list_antenna.style.display = 'none';

const list_power = new Object(document.getElementById('power_option'));
list_power.style.display = 'none';

var current_list = new Object();
function show_list(current_list) {
    current_list.style.display = 'block'
}
function disappear_list(current_list) {
    current_list.style.display = 'none'
}

var current_length = new Number();
function fill_in_number_cable(current_length) {
    for (let index = 0; index < cable_ensemble.length; index++) {
        if (current_length == cable_ensemble[index].length) {
            document.getElementById('cable_number').innerHTML = cable_ensemble[index].number;
            break
        }
    }
}

function fill_in_number_antenna(current_length) {
    for (let index = 0; index < antenna_ensemble.length; index++) {
        if (current_length == antenna_ensemble[index].length) {
            document.getElementById('antenna_number').innerHTML = antenna_ensemble[index].number;
            break
        }
    }
}

var current_power_origin = new String();
function fill_in_number_power(current_power_origin) {
    for (let index = 0; index < power_ensemble.length; index++) {
        if (current_power_origin == power_ensemble[index].origin) {
            document.getElementById('power_number').innerHTML = power_ensemble[index].number;
            break
        }
    }
}