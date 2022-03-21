const module_number_ensemble = new Object(
                                            {
                                                DT700: '917.64.006',
                                                DT710: '917.64.000'
                                            }
                                        );

const switch_to_dt700 = document.getElementById('switch_to_dt700');
const switch_to_dt710 = document.getElementById('switch_to_dt710');

var module_number = document.getElementById('module_number');

switch_to_dt700.addEventListener('click', () => {
    module_number.innerHTML = module_number_ensemble.DT700
})
switch_to_dt710.addEventListener('click', () => {
    module_number.innerHTML = module_number_ensemble.DT710
})
