
const Questions = [
    {
        q: "请选择一个颜色",
        a: ['不锈钢原色', '黑色', '抛光黄铜色', '抛光原色']
    },
    {
        q: "请选择一个把手样式",
        a: ['G', 'U', 'J']
    }
];

const number_ensemble_dt700 = [
    {number: '917.64.006', color: '不锈钢原色', shape: 'G', id: 0},
    {number: '917.64.051', color: '不锈钢原色', shape: 'U', id: 1},
    {number: '917.64.008', color: '不锈钢原色', shape: 'J', id: 2},
    {number: '917.64.200', color: '黑色', shape: 'G', id: 3},
    {number: '917.64.202', color: '黑色', shape: 'U', id: 4},
    {number: '917.64.204', color: '黑色', shape: 'J', id: 5},
    {number: '917.64.257', color: '抛光黄铜色', shape: 'G', id: 6},
    {number: '917.64.258', color: '抛光黄铜色', shape: 'U', id: 7},
    {number: '917.64.259', color: '抛光黄铜色', shape: 'J', id: 8},
    {number: '917.64.201', color: '抛光原色', shape: 'G', id: 9},
    {number: '917.64.203', color: '抛光原色', shape: 'U', id: 10},
    {number: '917.64.205', color: '抛光原色', shape: 'J', id: 11}
]

const number_ensemble_dt710 = new Array(
    {number: '917.64.000', color: '不锈钢原色', shape: 'G', id: 0},
    {number: '917.64.001', color: '不锈钢原色', shape: 'U', id: 1},
    {number: '917.64.002', color: '不锈钢原色', shape: 'J', id: 2},
    {number: '917.64.300', color: '黑色', shape: 'G', id: 3},
    {number: '917.64.302', color: '黑色', shape: 'U', id: 4},
    {number: '917.64.304', color: '黑色', shape: 'J', id: 5},
    {number: '917.64.251', color: '抛光黄铜色', shape: 'G', id: 6},
    {number: '917.64.252', color: '抛光黄铜色', shape: 'U', id: 7},
    {number: '917.64.253', color: '抛光黄铜色', shape: 'J', id: 8},
    {number: '917.64.301', color: '抛光原色', shape: 'G', id: 9},
    {number: '917.64.303', color: '抛光原色', shape: 'U', id: 10},
    {number: '917.64.305', color: '抛光原色', shape: 'J', id: 11}
);

var current_color_dt700 = '';
var current_shape_dt700 = '';

var current_color_dt710 = new String();
var current_shape_dt710 = new String();

var result_dt700 = document.getElementById('result_dt700');
var selected_color_dt700 = document.getElementById('selected_color_dt700');
var selected_shape_dt700 = document.getElementById('selected_shape_dt700');

var result_dt710 = document.getElementById('result_dt710');
var selected_color_dt710 = document.getElementById('selected_color_dt710');
var selected_shape_dt710 = document.getElementById('selected_shape_dt710');

var question_dt700 = document.getElementById('question_dt700');
var op0_dt700 = document.getElementById('op0_dt700');
var op1_dt700 = document.getElementById('op1_dt700');
var op2_dt700 = document.getElementById('op2_dt700');
var op3_dt700 = document.getElementById('op3_dt700');

var question_dt710 = document.getElementById('question_dt710');
var op0_dt710 = document.getElementById('op0_dt710');
var op1_dt710 = document.getElementById('op1_dt710');
var op2_dt710 = document.getElementById('op2_dt710');
var op3_dt710 = document.getElementById('op3_dt710');

var op_ensemble_dt700 = [op0_dt700, op1_dt700, op2_dt700, op3_dt700];
var op_ensemble_dt710 = [op0_dt710, op1_dt710, op2_dt710, op3_dt710];

var current_question_id_dt700 = new Number();
var button_id_dt700 = new Number();

var current_question_id_dt710 = new Number();
var button_id_dt710 = new Number();

var start = new Boolean(true);

const try_again_dt700 = document.getElementById('try_again_dt700');
try_again_dt700.addEventListener('click', () => {
    current_question_id_dt700 = 0;
    disapper_final_page_dt700();
    go_to_question_dt700(current_question_id_dt700)

})

const try_again_dt710 = document.getElementById('try_again_dt710');
try_again_dt710.addEventListener('click', () => {
    current_question_id_dt710 = 0;
    disapper_final_page_dt710();
    go_to_question_dt710(current_question_id_dt710)

})

const last_one_dt700 = document.getElementById('last_one_dt700');
last_one_dt700.addEventListener('click', () => {
    current_question_id_dt700 -= 1;
    go_to_question_dt700(current_question_id_dt700)
})

const last_one_dt710 = document.getElementById('last_one_dt710');
last_one_dt710.addEventListener('click', () => {
    current_question_id_dt710 -= 1;
    go_to_question_dt710(current_question_id_dt710)
})

function disapper_final_page_dt700() {
    document.getElementById('selected_dt700').style.display = 'none';
    result_dt700.innerHTML = '';
}

function disapper_final_page_dt710() {
    document.getElementById('selected_dt710').style.display = 'none';
    result_dt710.innerHTML = '';
}

function disapper_question_page_dt700() {
    question_dt700.innerHTML = '';
    document.getElementById('option_dt700').style.display = 'none';
}

function disapper_question_page_dt710() {
    question_dt710.innerHTML = '';
    document.getElementById('option_dt710').style.display = 'none';
}

function go_to_question_dt700(current_question_id_dt700) {

    disapper_final_page_dt700();
    document.getElementById('option_dt700').style.display = 'block';
    question_dt700.innerHTML = Questions[current_question_id_dt700].q;
    for (let index = 0; index < Questions[current_question_id_dt700].a.length; index++) {
        op_ensemble_dt700[index].innerHTML = Questions[current_question_id_dt700].a[index]        
    }
    if (current_question_id_dt700 == 0) {
        document.getElementById('navigation_dt700').style.display = 'none';
        op3_dt700.style.display = 'inline'
    } else {
        document.getElementById('navigation_dt700').style.display = 'block';
        op3_dt700.style.display = 'none'
    }
};

function go_to_question_dt710(current_question_id_dt710) {

    disapper_final_page_dt710();
    document.getElementById('option_dt710').style.display = 'block';
    question_dt710.innerHTML = Questions[current_question_id_dt710].q;
    for (let index = 0; index < Questions[current_question_id_dt710].a.length; index++) {
        op_ensemble_dt710[index].innerHTML = Questions[current_question_id_dt710].a[index]        
    }
    if (current_question_id_dt710 == 0) {
        document.getElementById('navigation_dt710').style.display = 'none';
        op3_dt710.style.display = 'inline'
    } else {
        document.getElementById('navigation_dt710').style.display = 'block';
        op3_dt710.style.display = 'none'
    }
};

function go_to_result_dt700() {

    disapper_question_page_dt700();

    document.getElementById('selected_dt700').style.display = 'block';

    selected_color_dt700.innerHTML = '您选择的颜色为：' + current_color_dt700;
    selected_shape_dt700.innerHTML = '您选择的把手形状为：' + current_shape_dt700;

    for (let index = 0; index < number_ensemble_dt700.length; index++) {
        if (current_color_dt700 == number_ensemble_dt700[index].color &
            current_shape_dt700 == number_ensemble_dt700[index].shape) {
        result_dt700.innerHTML = '应订购的编号为：' + number_ensemble_dt700[index].number;
        break;
    }
    }
    
};

function go_to_result_dt710() {

    disapper_question_page_dt710();

    document.getElementById('selected_dt710').style.display = 'block';

    selected_color_dt710.innerHTML = '您选择的颜色为：' + current_color_dt710;
    selected_shape_dt710.innerHTML = '您选择的把手形状为：' + current_shape_dt710;

    for (let index = 0; index < number_ensemble_dt710.length; index++) {
        if (current_color_dt710 == number_ensemble_dt710[index].color &
            current_shape_dt710 == number_ensemble_dt710[index].shape) {
        result_dt710.innerHTML = '应订购的编号为：' + number_ensemble_dt710[index].number;
        break;
    }
    }
    
};

function store_current_value_dt700(button_id_dt700) {
    switch (current_question_id_dt700) {
        case 0:
            current_color_dt700 = op_ensemble_dt700[button_id_dt700].innerHTML;
            break;
        case 1:
            current_shape_dt700 = op_ensemble_dt700[button_id_dt700].innerHTML;
            break;
        default:
            break;
    }
};

function store_current_value_dt710(button_id_dt710) {
    switch (current_question_id_dt710) {
        case 0:
            current_color_dt710 = op_ensemble_dt710[button_id_dt710].innerHTML;
            break;
        case 1:
            current_shape_dt710 = op_ensemble_dt710[button_id_dt710].innerHTML;
            break;
        default:
            break;
    }
};

op0_dt700.addEventListener('click', () => {
    store_current_value_dt700(0);
    current_question_id_dt700 += 1;
    if (current_question_id_dt700 < Questions.length) {
        
        go_to_question_dt700(current_question_id_dt700)
    } else {
        go_to_result_dt700()
    }
});
op1_dt700.addEventListener('click', () => {
    store_current_value_dt700(1);
    current_question_id_dt700 += 1;
    if (current_question_id_dt700 < Questions.length) {
        
        go_to_question_dt700(current_question_id_dt700)
    } else {
        go_to_result_dt700()
    }
});
op2_dt700.addEventListener('click', () => {
    store_current_value_dt700(2);
    current_question_id_dt700 += 1;
    if (current_question_id_dt700 < Questions.length) {
        
        go_to_question_dt700(current_question_id_dt700)
    } else {
        go_to_result_dt700()
    }
});
op3_dt700.addEventListener('click', () => {
    store_current_value_dt700(3);
    current_question_id_dt700 += 1;
    if (current_question_id_dt700 < Questions.length) {
        
        go_to_question_dt700(current_question_id_dt700)
    } else {
        go_to_result_dt700()
    }
})

op0_dt710.addEventListener('click', () => {
    store_current_value_dt710(0);
    current_question_id_dt710 += 1;
    if (current_question_id_dt710 < Questions.length) {
        
        go_to_question_dt710(current_question_id_dt710)
    } else {
        go_to_result_dt710()
    }
});
op1_dt710.addEventListener('click', () => {
    store_current_value_dt710(1);
    current_question_id_dt710 += 1;
    if (current_question_id_dt710 < Questions.length) {
        
        go_to_question_dt710(current_question_id_dt710)
    } else {
        go_to_result_dt710()
    }
});
op2_dt710.addEventListener('click', () => {
    store_current_value_dt710(2);
    current_question_id_dt710 += 1;
    if (current_question_id_dt710 < Questions.length) {
        
        go_to_question_dt710(current_question_id_dt710)
    } else {
        go_to_result_dt710()
    }
});
op3_dt710.addEventListener('click', () => {
    store_current_value_dt710(3);
    current_question_id_dt710 += 1;
    if (current_question_id_dt710 < Questions.length) {
        
        go_to_question_dt710(current_question_id_dt710)
    } else {
        go_to_result_dt710()
    }
})


if (start) {
    current_question_id_dt700 = 0;
    current_question_id_dt710 = 0;
    go_to_question_dt700(current_question_id_dt700);
    go_to_question_dt710(current_question_id_dt700)
};