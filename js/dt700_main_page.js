const module_number_ouside_ensemble = new Object(
                                            {
                                                DT700: '917.63.520',
                                                DT710: '917.63.620'
                                            }
                                        );

const switch_to_dt700 = document.getElementById('switch_to_dt700');
const switch_to_dt710 = document.getElementById('switch_to_dt710');

var module_number_ouside = document.getElementById('module_number_ouside');

switch_to_dt700.addEventListener('click', () => {
    module_number_ouside.innerHTML = module_number_ouside_ensemble.DT700
})
switch_to_dt710.addEventListener('click', () => {
    module_number_ouside.innerHTML = module_number_ouside_ensemble.DT710
})
