const questions_screw = new Array(
    {
        q: "请选择门厚度",
        a: ['35-45', '45-65', '65-85', '85-95']
    },
    {
        q: '请选择颜色',
        a: ['不锈钢原色', '黑色', '抛光金色', '抛光色']
    }
);

const number_ensemble_screw = new Array(
    {number: '917.80.851', door_width: '35-45', color: '不锈钢原色'},
    {number: '917.80.881', door_width: '35-45', color: '黑色'},
    {number: '917.80.871', door_width: '35-45', color: '抛光金色'},
    {number: '917.80.861', door_width: '35-45', color: '抛光色'},
    {number: '917.80.852', door_width: '45-65', color: '不锈钢原色'},
    {number: '917.80.882', door_width: '45-65', color: '黑色'},
    {number: '917.80.872', door_width: '45-65', color: '抛光金色'},
    {number: '917.80.862', door_width: '45-65', color: '抛光色'},
    {number: '917.80.853', door_width: '65-85', color: '不锈钢原色'},
    {number: '917.80.883', door_width: '65-85', color: '黑色'},
    {number: '917.80.873', door_width: '65-85', color: '抛光金色'},
    {number: '917.80.863', door_width: '65-85', color: '抛光色'},
    {number: '917.80.854', door_width: '85-95', color: '不锈钢原色'},
    {number: '917.80.884', door_width: '85-95', color: '黑色'},
    {number: '917.80.874', door_width: '85-95', color: '抛光金色'},
    {number: '917.80.864', door_width: '85-95', color: '抛光色'}
);

const questions_spindle = new Array(
    {
        q: "请选择尺寸 'C'",
        a: ['14-30', '30-45', '45-60']
    },
    {
        q: "请选择尺寸 'D'",
        a: ['14-30', '30-45', '45-60']
    }
);

const number_ensemble_spindle = new Array(
    {number: '917.80.831', C: '14-30', D: '14-30'},
    {number: '917.80.832', C: '14-30', D: '30-45'},
    {number: '917.80.833', C: '14-30', D: '45-60'},
    {number: '917.80.834', C: '30-45', D: '14-30'},
    {number: '917.80.835', C: '30-45', D: '30-45'},
    {number: '917.80.836', C: '30-45', D: '45-60'},
    {number: '917.80.837', C: '45-60', D: '14-30'},
    {number: '917.80.838', C: '45-60', D: '30-45'},
    {number: '917.80.839', C: '45-60', D: '45-60'},
);

var panel_combo = new Object();
panel_combo = {
                screw: {
                    question: document.getElementById('question_screw'),
                    op0: document.getElementById('op0_screw'),
                    op1: document.getElementById('op1_screw'),
                    op2: document.getElementById('op2_screw'),
                    op3: document.getElementById('op3_screw'),
                    try_again: document.getElementById('try_again_screw'),
                    last_one: document.getElementById('last_one_screw')
                    
                },
                spindle: {
                    question: document.getElementById('question_spindle'),
                    op0: document.getElementById('op0_spindle'),
                    op1: document.getElementById('op1_spindle'),
                    op2: document.getElementById('op2_spindle'),
                    try_again: document.getElementById('try_again_spindle'),
                    last_one: document.getElementById('last_one_spindle'),
                }
            };

var option_ensemble_screw = new Array();

for (let index = 0; index < 4; index++) {
    option_ensemble_screw.push(panel_combo.screw['op'+index])
};
var option_ensemble_spindle = new Array();
for (let index = 0; index < 3; index++) {
    option_ensemble_spindle.push(panel_combo.spindle['op'+index])
};

var door_width = new Number();
var color = new String();
var selected_door_width = document.getElementById('selected_door_width');
var selected_color = document.getElementById('selected_color');
var result_screw = document.getElementById('screw');

var C, D = new Number();
var selected_C = document.getElementById('selected_C');
var selected_D = document.getElementById('selected_D');
var result_spinle = document.getElementById('spindle');


var current_question_id_screw = new Number();
var current_question_id_spindle = new Number();

var button_id_screw = new Number();
var button_id_spindle = new Number();


function disapper_final_page_screw() {
    document.getElementsByClassName('selected_container')[0].style.display = 'none';
    result_screw.innerHTML = '';
};

function disapper_final_page_spindle() {
    document.getElementsByClassName('selected_container')[1].style.display = 'none';
    result_spinle.innerHTML = '';
};

function disapper_question_page_screw() {
    panel_combo.screw.question.innerHTML = '';
    document.getElementsByClassName('option_container')[0].style.display = 'none';
}

function disapper_question_page_spindle() {
    panel_combo.spindle.question.innerHTML = '';
    document.getElementsByClassName('option_container')[1].style.display = 'none';
}

function go_to_question_screw(current_question_id_screw) {
    disapper_final_page_screw();
    document.getElementsByClassName('option_container')[0].style.display = 'block';
    
    if (current_question_id_screw == 0) {
        document.getElementsByClassName('navigation_container')[0].style.display = 'none';
        panel_combo.screw.op3.style.display = 'inline';
    } else {
        document.getElementsByClassName('navigation_container')[0].style.display = 'block';
        panel_combo.screw.op3.style.display = 'none';
    }

    panel_combo.screw.question.innerHTML = questions_screw[current_question_id_screw].q;

    for (let index = 0; index < option_ensemble_screw.length; index++) {
        option_ensemble_screw[index].innerHTML = questions_screw[current_question_id_screw].a[index]
    };
};

function go_to_question_spindle(current_question_id_spindle) {

    disapper_final_page_spindle();
    document.getElementsByClassName('option_container')[1].style.display = 'block';

    if (current_question_id_spindle == 0) {
        document.getElementsByClassName('navigation_container')[1].style.display = 'none';
    } else {
        document.getElementsByClassName('navigation_container')[1].style.display = 'block';
    }

    panel_combo.spindle.question.innerHTML = questions_spindle[current_question_id_spindle].q;

    for (let index = 0; index < option_ensemble_spindle.length; index++) {
        option_ensemble_spindle[index].innerHTML = questions_spindle[current_question_id_spindle].a[index]
    }
};

function store_values_screw(button_id_screw) {
    switch (current_question_id_screw) {
        case 0:
            door_width = option_ensemble_screw[button_id_screw].innerHTML;
            break;
        case 1:
            color = option_ensemble_screw[button_id_screw].innerHTML;
            break;
        default:
            break;
    };
};

function store_values_spindle(button_id_spindle) {
    switch (current_question_id_spindle) {
        case 0:
            C = option_ensemble_spindle[button_id_spindle].innerHTML;
            break;
        case 1:
            D = option_ensemble_spindle[button_id_spindle].innerHTML;
            break;
        default:
            break;
    };
};

function go_to_result_screw() {
    document.getElementsByClassName('selected_container')[0].style.display = 'block';
    disapper_question_page_screw();

    selected_door_width.innerHTML = '您的门厚为：'+door_width;
    selected_color.innerHTML = '您选择的颜色为：'+color;

    for (let index = 0; index < number_ensemble_screw.length; index++) {
        if (door_width == number_ensemble_screw[index].door_width &
            color == number_ensemble_screw[index].color) {
            result_screw.innerHTML = '您需订购的编号为：'+number_ensemble_screw[index].number;
            break;
        }
    }
}

function go_to_result_spinle() {
    document.getElementsByClassName('selected_container')[1].style.display = 'block';
    disapper_question_page_spindle();

    selected_C.innerHTML = "您选择的尺寸 'C'为："+C;
    selected_D.innerHTML = "您选择的尺寸 'D'为："+D;

    for (let index = 0; index < number_ensemble_spindle.length; index++) {
        if (C == number_ensemble_spindle[index].C &
            D == number_ensemble_spindle[index].D) {
            result_spinle.innerHTML = '您需订购的编号为：'+number_ensemble_spindle[index].number;
            break;
        }
    }
}


panel_combo.screw.op0.addEventListener('click', () => {
    store_values_screw(0);
    current_question_id_screw += 1;
    if (current_question_id_screw < questions_screw.length) {
        go_to_question_screw(current_question_id_screw);
    } else {
        go_to_result_screw();
    }
});
panel_combo.screw.op1.addEventListener('click', () => {
    store_values_screw(1);
    current_question_id_screw += 1;
    if (current_question_id_screw < questions_screw.length) {
        go_to_question_screw(current_question_id_screw);
    } else {
        go_to_result_screw();
    }
});
panel_combo.screw.op2.addEventListener('click', () => {
    store_values_screw(2);
    current_question_id_screw += 1;
    if (current_question_id_screw < questions_screw.length) {
        go_to_question_screw(current_question_id_screw);
    } else {
        go_to_result_screw();
    }
});
panel_combo.screw.op3.addEventListener('click', () => {
    store_values_screw(3);
    current_question_id_screw += 1;
    if (current_question_id_screw < questions_screw.length) {
        go_to_question_screw(current_question_id_screw);
    } else {
        go_to_result_screw();
    }
});
panel_combo.screw.try_again.addEventListener('click', () => {
    current_question_id_screw = 0;
    go_to_question_screw(current_question_id_screw);
});
panel_combo.screw.last_one.addEventListener('click', () => {
    current_question_id_screw -= 1;
    go_to_question_screw(current_question_id_screw);
})

panel_combo.spindle.op0.addEventListener('click', () => {
    store_values_spindle(0);
    current_question_id_spindle += 1;
    if (current_question_id_spindle < questions_spindle.length) {
        go_to_question_spindle(current_question_id_spindle);
    } else {
        go_to_result_spinle();
    }
});
panel_combo.spindle.op1.addEventListener('click', () => {
    store_values_spindle(1);
    current_question_id_spindle += 1;
    if (current_question_id_spindle < questions_spindle.length) {
        go_to_question_spindle(current_question_id_spindle);
    } else {
        go_to_result_spinle();
    }
});
panel_combo.spindle.op2.addEventListener('click', () => {
    store_values_spindle(2);
    current_question_id_spindle += 1;
    if (current_question_id_spindle < questions_spindle.length) {
        go_to_question_spindle(current_question_id_spindle);
    } else {
        go_to_result_spinle();
    }
});
panel_combo.spindle.try_again.addEventListener('click', () => {
    current_question_id_spindle = 0;
    go_to_question_spindle(current_question_id_spindle);
});
panel_combo.spindle.last_one.addEventListener('click', () => {
    current_question_id_spindle -= 1;
    go_to_question_spindle(current_question_id_spindle);
})
var start = new Boolean();
start = true;

if (start) {
    current_question_id_screw = 0;
    current_question_id_spindle = 0;
    go_to_question_screw(current_question_id_screw);
    go_to_question_spindle(current_question_id_spindle);
}






