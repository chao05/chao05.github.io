const questions = [
    {
        q: "请选择锁边距 'A'",
        a: [55, 65, 80]
    },
    {
        q: '请选择锁片边缘外形',
        a: ['圆形', '直角形']
    },
    {
        q: '请选择锁片宽度',
        a: [20, 24]
    },
    {
        q: '请选择向左开门或向右开门',
        a: ['向左开门', '向右开门']
    },
    {
        q: '请选择向内开门或向外开门',
        a: ['向内开门', '向外开门']
    },
    {
        q: '请选择颜色',
        a: ['不锈钢原色', '黑色', '抛光黄铜色', '抛光色']
    }
];
const quantity_questions = questions.length;

const two_options_questions_id = [1, 2, 3, 4];

const number_ensemble = [
    {number: '917.81.730', backset: 55, width: 20, shape: '圆形', i_or_o: '向外开门', l_or_r: '向左开门', color: '不锈钢原色'},
    {number: '917.81.738', backset: 55, width: 20, shape: '圆形', i_or_o: '向外开门', l_or_r: '向左开门', color: '黑色'},
    {number: '917.81.735', backset: 55, width: 20, shape: '圆形', i_or_o: '向外开门', l_or_r: '向左开门', color: '抛光黄铜色'},
    {number: '917.81.737', backset: 55, width: 20, shape: '圆形', i_or_o: '向外开门', l_or_r: '向左开门', color: '抛光色'},
    {number: '917.81.710', backset: 55, width: 20, shape: '圆形', i_or_o: '向内开门', l_or_r: '向左开门', color: '不锈钢原色'},
    {number: '917.81.718', backset: 55, width: 20, shape: '圆形', i_or_o: '向内开门', l_or_r: '向左开门', color: '黑色'},
    {number: '917.81.715', backset: 55, width: 20, shape: '圆形', i_or_o: '向内开门', l_or_r: '向左开门', color: '抛光黄铜色'},
    {number: '917.81.717', backset: 55, width: 20, shape: '圆形', i_or_o: '向内开门', l_or_r: '向左开门', color: '抛光色'},
    {number: '917.81.740', backset: 55, width: 20, shape: '圆形', i_or_o: '向外开门', l_or_r: '向右开门', color: '不锈钢原色'},
    {number: '917.81.748', backset: 55, width: 20, shape: '圆形', i_or_o: '向外开门', l_or_r: '向右开门', color: '黑色'},
    {number: '917.81.745', backset: 55, width: 20, shape: '圆形', i_or_o: '向外开门', l_or_r: '向右开门', color: '抛光黄铜色'},
    {number: '917.81.747', backset: 55, width: 20, shape: '圆形', i_or_o: '向外开门', l_or_r: '向右开门', color: '抛光色'},
    {number: '917.81.720', backset: 55, width: 20, shape: '圆形', i_or_o: '向内开门', l_or_r: '向右开门', color: '不锈钢原色'},
    {number: '917.81.728', backset: 55, width: 20, shape: '圆形', i_or_o: '向内开门', l_or_r: '向右开门', color: '黑色'},
    {number: '917.81.725', backset: 55, width: 20, shape: '圆形', i_or_o: '向内开门', l_or_r: '向右开门', color: '抛光黄铜色'},
    {number: '917.81.727', backset: 55, width: 20, shape: '圆形', i_or_o: '向内开门', l_or_r: '向右开门', color: '抛光色'},
    {number: '917.81.719', backset: 55, width: 24, shape: '圆形', i_or_o: '向内开门', l_or_r: '向左开门', color: '黑色'},
    {number: '917.81.739', backset: 55, width: 24, shape: '圆形', i_or_o: '向外开门', l_or_r: '向左开门', color: '黑色'},
    {number: '917.81.729', backset: 55, width: 24, shape: '圆形', i_or_o: '向内开门', l_or_r: '向右开门', color: '黑色'},
    {number: '917.81.749', backset: 55, width: 24, shape: '圆形', i_or_o: '向外开门', l_or_r: '向右开门', color: '黑色'},
    {number: '917.81.731', backset: 65, width: 20, shape: '圆形', i_or_o: '向外开门', l_or_r: '向左开门', color: '不锈钢原色'},
    {number: '917.81.882', backset: 65, width: 20, shape: '圆形', i_or_o: '向外开门', l_or_r: '向左开门', color: '黑色'},
    {number: '917.81.736', backset: 65, width: 20, shape: '圆形', i_or_o: '向外开门', l_or_r: '向左开门', color: '抛光黄铜色'},
    {number: '917.81.880', backset: 65, width: 20, shape: '圆形', i_or_o: '向外开门', l_or_r: '向左开门', color: '抛光色'},
    {number: '917.81.711', backset: 65, width: 20, shape: '圆形', i_or_o: '向内开门', l_or_r: '向左开门', color: '不锈钢原色'},
    {number: '917.81.862', backset: 65, width: 20, shape: '圆形', i_or_o: '向内开门', l_or_r: '向左开门', color: '黑色'},
    {number: '917.81.716', backset: 65, width: 20, shape: '圆形', i_or_o: '向内开门', l_or_r: '向左开门', color: '抛光黄铜色'},
    {number: '917.81.860', backset: 65, width: 20, shape: '圆形', i_or_o: '向内开门', l_or_r: '向左开门', color: '抛光色'},
    {number: '917.81.741', backset: 65, width: 20, shape: '圆形', i_or_o: '向外开门', l_or_r: '向右开门', color: '不锈钢原色'},
    {number: '917.81.883', backset: 65, width: 20, shape: '圆形', i_or_o: '向外开门', l_or_r: '向右开门', color: '黑色'},
    {number: '917.81.746', backset: 65, width: 20, shape: '圆形', i_or_o: '向外开门', l_or_r: '向右开门', color: '抛光黄铜色'},
    {number: '917.81.881', backset: 65, width: 20, shape: '圆形', i_or_o: '向外开门', l_or_r: '向右开门', color: '抛光色'},
    {number: '917.81.721', backset: 65, width: 20, shape: '圆形', i_or_o: '向内开门', l_or_r: '向右开门', color: '不锈钢原色'},
    {number: '917.81.863', backset: 65, width: 20, shape: '圆形', i_or_o: '向内开门', l_or_r: '向右开门', color: '黑色'},
    {number: '917.81.726', backset: 65, width: 20, shape: '圆形', i_or_o: '向内开门', l_or_r: '向右开门', color: '抛光黄铜色'},
    {number: '917.81.861', backset: 65, width: 20, shape: '圆形', i_or_o: '向内开门', l_or_r: '向右开门', color: '抛光色'},
    {number: '917.81.781', backset: 65, width: 24, shape: '圆形', i_or_o: '向外开门', l_or_r: '向左开门', color: '不锈钢原色'},
    {number: '917.81.886', backset: 65, width: 24, shape: '圆形', i_or_o: '向外开门', l_or_r: '向左开门', color: '黑色'},
    {number: '917.81.786', backset: 65, width: 24, shape: '圆形', i_or_o: '向外开门', l_or_r: '向左开门', color: '抛光黄铜色'},
    {number: '917.81.884', backset: 65, width: 24, shape: '圆形', i_or_o: '向外开门', l_or_r: '向左开门', color: '抛光色'},
    {number: '917.81.761', backset: 65, width: 24, shape: '圆形', i_or_o: '向内开门', l_or_r: '向左开门', color: '不锈钢原色'},
    {number: '917.81.866', backset: 65, width: 24, shape: '圆形', i_or_o: '向内开门', l_or_r: '向左开门', color: '黑色'},
    {number: '917.81.766', backset: 65, width: 24, shape: '圆形', i_or_o: '向内开门', l_or_r: '向左开门', color: '抛光黄铜色'},
    {number: '917.81.864', backset: 65, width: 24, shape: '圆形', i_or_o: '向内开门', l_or_r: '向左开门', color: '抛光色'},
    {number: '917.81.791', backset: 65, width: 24, shape: '圆形', i_or_o: '向外开门', l_or_r: '向右开门', color: '不锈钢原色'},
    {number: '917.81.887', backset: 65, width: 24, shape: '圆形', i_or_o: '向外开门', l_or_r: '向右开门', color: '黑色'},
    {number: '917.81.796', backset: 65, width: 24, shape: '圆形', i_or_o: '向外开门', l_or_r: '向右开门', color: '抛光黄铜色'},
    {number: '917.81.885', backset: 65, width: 24, shape: '圆形', i_or_o: '向外开门', l_or_r: '向右开门', color: '抛光色'},
    {number: '917.81.771', backset: 65, width: 24, shape: '圆形', i_or_o: '向内开门', l_or_r: '向右开门', color: '不锈钢原色'},
    {number: '917.81.867', backset: 65, width: 24, shape: '圆形', i_or_o: '向内开门', l_or_r: '向右开门', color: '黑色'},
    {number: '917.81.776', backset: 65, width: 24, shape: '圆形', i_or_o: '向内开门', l_or_r: '向右开门', color: '抛光黄铜色'},
    {number: '917.81.865', backset: 65, width: 24, shape: '圆形', i_or_o: '向内开门', l_or_r: '向右开门', color: '抛光色'},
    {number: '917.81.787', backset: 65, width: 24, shape: '直角形', i_or_o: '向外开门', l_or_r: '向左开门', color: '不锈钢原色'},
    {number: '917.81.788', backset: 65, width: 24, shape: '直角形', i_or_o: '向外开门', l_or_r: '向左开门', color: '抛光黄铜色'},
    {number: '917.81.767', backset: 65, width: 24, shape: '直角形', i_or_o: '向内开门', l_or_r: '向左开门', color: '不锈钢原色'},
    {number: '917.81.768', backset: 65, width: 24, shape: '直角形', i_or_o: '向内开门', l_or_r: '向左开门', color: '抛光黄铜色'},
    {number: '917.81.797', backset: 65, width: 24, shape: '直角形', i_or_o: '向外开门', l_or_r: '向右开门', color: '不锈钢原色'},
    {number: '917.81.798', backset: 65, width: 24, shape: '直角形', i_or_o: '向外开门', l_or_r: '向右开门', color: '抛光黄铜色'},
    {number: '917.81.777', backset: 65, width: 24, shape: '直角形', i_or_o: '向内开门', l_or_r: '向右开门', color: '不锈钢原色'},
    {number: '917.81.778', backset: 65, width: 24, shape: '直角形', i_or_o: '向内开门', l_or_r: '向右开门', color: '抛光黄铜色'},
    {number: '917.84.020', backset: 80, width: 20, shape: '圆形', i_or_o: '向外开门', l_or_r: '向左开门', color: '不锈钢原色'},
    {number: '917.84.024', backset: 80, width: 20, shape: '圆形', i_or_o: '向外开门', l_or_r: '向左开门', color: '黑色'},
    {number: '917.84.026', backset: 80, width: 20, shape: '圆形', i_or_o: '向外开门', l_or_r: '向左开门', color: '抛光黄铜色'},
    {number: '917.84.022', backset: 80, width: 20, shape: '圆形', i_or_o: '向外开门', l_or_r: '向左开门', color: '抛光色'},
    {number: '917.84.000', backset: 80, width: 20, shape: '圆形', i_or_o: '向内开门', l_or_r: '向左开门', color: '不锈钢原色'},
    {number: '917.84.004', backset: 80, width: 20, shape: '圆形', i_or_o: '向内开门', l_or_r: '向左开门', color: '黑色'},
    {number: '917.84.006', backset: 80, width: 20, shape: '圆形', i_or_o: '向内开门', l_or_r: '向左开门', color: '抛光黄铜色'},
    {number: '917.84.002', backset: 80, width: 20, shape: '圆形', i_or_o: '向内开门', l_or_r: '向左开门', color: '抛光色'},
    {number: '917.84.021', backset: 80, width: 20, shape: '圆形', i_or_o: '向外开门', l_or_r: '向右开门', color: '不锈钢原色'},
    {number: '917.84.025', backset: 80, width: 20, shape: '圆形', i_or_o: '向外开门', l_or_r: '向右开门', color: '黑色'},
    {number: '917.84.027', backset: 80, width: 20, shape: '圆形', i_or_o: '向外开门', l_or_r: '向右开门', color: '抛光黄铜色'},
    {number: '917.84.023', backset: 80, width: 20, shape: '圆形', i_or_o: '向外开门', l_or_r: '向右开门', color: '抛光色'},
    {number: '917.84.001', backset: 80, width: 20, shape: '圆形', i_or_o: '向内开门', l_or_r: '向右开门', color: '不锈钢原色'},
    {number: '917.84.005', backset: 80, width: 20, shape: '圆形', i_or_o: '向内开门', l_or_r: '向右开门', color: '黑色'},
    {number: '917.84.007', backset: 80, width: 20, shape: '圆形', i_or_o: '向内开门', l_or_r: '向右开门', color: '抛光黄铜色'},
    {number: '917.84.003', backset: 80, width: 20, shape: '圆形', i_or_o: '向内开门', l_or_r: '向右开门', color: '抛光色'},
    {number: '917.84.028', backset: 80, width: 24, shape: '圆形', i_or_o: '向外开门', l_or_r: '向左开门', color: '不锈钢原色'},
    {number: '917.84.032', backset: 80, width: 24, shape: '圆形', i_or_o: '向外开门', l_or_r: '向左开门', color: '黑色'},
    {number: '917.84.034', backset: 80, width: 24, shape: '圆形', i_or_o: '向外开门', l_or_r: '向左开门', color: '抛光黄铜色'},
    {number: '917.84.030', backset: 80, width: 24, shape: '圆形', i_or_o: '向外开门', l_or_r: '向左开门', color: '抛光色'},
    {number: '917.84.008', backset: 80, width: 24, shape: '圆形', i_or_o: '向内开门', l_or_r: '向左开门', color: '不锈钢原色'},
    {number: '917.84.012', backset: 80, width: 24, shape: '圆形', i_or_o: '向内开门', l_or_r: '向左开门', color: '黑色'},
    {number: '917.84.014', backset: 80, width: 24, shape: '圆形', i_or_o: '向内开门', l_or_r: '向左开门', color: '抛光黄铜色'},
    {number: '917.84.010', backset: 80, width: 24, shape: '圆形', i_or_o: '向内开门', l_or_r: '向左开门', color: '抛光色'},
    {number: '917.84.029', backset: 80, width: 24, shape: '圆形', i_or_o: '向外开门', l_or_r: '向右开门', color: '不锈钢原色'},
    {number: '917.84.033', backset: 80, width: 24, shape: '圆形', i_or_o: '向外开门', l_or_r: '向右开门', color: '黑色'},
    {number: '917.84.035', backset: 80, width: 24, shape: '圆形', i_or_o: '向外开门', l_or_r: '向右开门', color: '抛光黄铜色'},
    {number: '917.84.031', backset: 80, width: 24, shape: '圆形', i_or_o: '向外开门', l_or_r: '向右开门', color: '抛光色'},
    {number: '917.84.009', backset: 80, width: 24, shape: '圆形', i_or_o: '向内开门', l_or_r: '向右开门', color: '不锈钢原色'},
    {number: '917.84.013', backset: 80, width: 24, shape: '圆形', i_or_o: '向内开门', l_or_r: '向右开门', color: '黑色'},
    {number: '917.84.015', backset: 80, width: 24, shape: '圆形', i_or_o: '向内开门', l_or_r: '向右开门', color: '抛光黄铜色'},
    {number: '917.84.011', backset: 80, width: 24, shape: '圆形', i_or_o: '向内开门', l_or_r: '向右开门', color: '抛光色'},
];

const quantity_number = number_ensemble.length;

const square_no_color = ['黑色', '抛光色'];
const backset_no_square = ['55', '80'];

var question = document.getElementById('question');

var op_0 = document.getElementById('op0');
var op_1 = document.getElementById('op1');
var op_2 = document.getElementById('op2');
var op_3 = document.getElementById('op3');

var option_ensemble = [op_0, op_1, op_2, op_3];

var selected_backset = 0;
var selected_forend_shape = '';
var selected_forend_width = 0;
var selected_l_r = '';
var selected_in_out = '';
var selected_color = '';

var selected_backset_e = document.getElementById('selected_backset');
var selected_forend_shape_e = document.getElementById('selected_forend_shape');
var selected_forend_width_e = document.getElementById('selected_forend_width');
var selected_l_r_e = document.getElementById('selected_l_r');
var selected_in_out_e = document.getElementById('selected_in_out');
var selected_color_e = document.getElementById('selected_color');
var result = document.getElementsByClassName('result')[0];

var current_question_id;
var button_id;

const try_again = document.getElementById('try_again');
const last_one = document.getElementById('last_one');

try_again.addEventListener('click', () => {

    disappear_final_page();
    current_question_id = 0;
    go_to_question(current_question_id);
});

function disappear_final_page() {

    for (let index = 0; index < quantity_questions; index++) {
        document.getElementsByClassName('selected_info')[index].style.display = 'none';
    };
    document.getElementsByClassName('result')[0].style.display = 'none';
};

function go_to_question(current_question_id) {

    disappear_final_page();

    question.innerHTML = questions[current_question_id].q;

    if (current_question_id == 0) {
        for (let index = 0; index < option_ensemble.length-1; index++) {
            option_ensemble[index].innerHTML = questions[current_question_id].a[index];
            document.getElementById('op'+index).style.display = 'inline';
        };

        document.getElementById('op3').style.display = 'none';
        document.getElementById('try_again').style.display = 'none';
        document.getElementById('last_one').style.display = 'none';
    } 
    else if (current_question_id == 1 & backset_no_square.includes(selected_backset)) {

        document.getElementById('op0').innerHTML = '圆形';
        document.getElementById('op0').style.display = 'inline';
        for (let index = 1; index < option_ensemble.length; index++) {
            document.getElementById('op'+index).style.display = 'none';
        };

        document.getElementById('try_again').style.display = 'inline';
        document.getElementById('last_one').style.display = 'inline';
    }
    else if (current_question_id == 2 & selected_forend_shape == '直角形') {
        document.getElementById('op0').innerHTML = 24;
        document.getElementById('op0').style.display = 'inline';
        for (let index = 1; index < option_ensemble.length; index++) {
            document.getElementById('op'+index).style.display = 'none';
        };
        document.getElementById('last_one').style.display = 'inline';
     }
    else if (two_options_questions_id.includes(current_question_id)){

        for (let index = 0; index < option_ensemble.length-2; index++) {
            option_ensemble[index].innerHTML = questions[current_question_id].a[index];
            document.getElementById('op'+index).style.display = 'inline';
        };
        for (let index = 2; index < option_ensemble.length; index++) {
            document.getElementById('op'+index).style.display = 'none';
        };
        
        document.getElementById('try_again').style.display = 'inline';
        document.getElementById('last_one').style.display = 'inline';
    }
    else if (current_question_id == 5) {
        for (let index = 0; index < option_ensemble.length; index++) {
            option_ensemble[index].innerHTML = questions[current_question_id].a[index];
            document.getElementById('op'+index).style.display = 'inline';
        };
    }; 
};

function store_values(button_id) {
    switch (current_question_id) {
        case 0:
            selected_backset = option_ensemble[button_id].innerHTML;
            break;
        case 1:
            selected_forend_shape = option_ensemble[button_id].innerHTML;
            break;
        case 2:
            selected_forend_width = option_ensemble[button_id].innerHTML;
            break;
        case 3:
            selected_l_r = option_ensemble[button_id].innerHTML;
            break;
        case 4:
            selected_in_out = option_ensemble[button_id].innerHTML;
            break;
        case 5:
            selected_color = option_ensemble[button_id].innerHTML;
            break;
        default:
            break;
    };
};

function go_to_result() {
    question.innerHTML = '';
    
    for (let index = 0; index < option_ensemble.length; index++) {
        document.getElementById('op'+index).style.display = 'none';
    };

    for (let index = 0; index < quantity_questions; index++) {
        document.getElementsByClassName('selected_info')[index].style.display = 'block';
    };

    document.getElementsByClassName('result')[0].style.display = 'block';

    selected_backset_e.innerHTML = '您选择的锁边距是：'+selected_backset;
    selected_forend_shape_e.innerHTML = '您选择的锁片边缘为：'+selected_forend_shape;
    selected_forend_width_e.innerHTML = '您选择的锁片宽度是：'+selected_forend_width;
    selected_l_r_e.innerHTML = '您选择'+selected_l_r;
    selected_in_out_e.innerHTML = '您选择'+selected_in_out;
    selected_color_e.innerHTML = '您选择的颜色是：'+selected_color;

    for (let index = 0; index < number_ensemble.length; index++) {

        if (selected_backset == number_ensemble[index].backset &
            selected_forend_shape == number_ensemble[index].shape &
            selected_forend_width == number_ensemble[index].width &
            selected_l_r == number_ensemble[index].l_or_r &
            selected_in_out == number_ensemble[index].i_or_o &
            selected_color == number_ensemble[index].color) {

            result.innerHTML = '您需订购的编号为：'+number_ensemble[index].number;
            break;
        }
        else if (selected_backset == 55 &  
                 selected_forend_width == 24 & 
                 selected_color != '黑色') {
            result.innerHTML = '暂不提供符合该条件组合的产品';
            break;
        }
        else if (selected_forend_shape == '直角形' & 
                 square_no_color.includes(selected_color)) {
            result.innerHTML = '暂不提供符合该条件组合的产品';
            break;
        }
    }
};
    
op_0.addEventListener('click', () => {
    store_values(0);
    current_question_id += 1;
    if (current_question_id < quantity_questions) {
        
        go_to_question(current_question_id)
    } else {
        go_to_result()
    };
});

op_1.addEventListener('click', () => {
    store_values(1);
    current_question_id += 1;
    if (current_question_id < quantity_questions) {
        
        go_to_question(current_question_id)
    } else {
        go_to_result()
    };
});

op_2.addEventListener('click', () => {
    store_values(2);
    current_question_id += 1;
    if (current_question_id < quantity_questions) {
        
        go_to_question(current_question_id);
    } else {
        go_to_result();
    }
});

op_3.addEventListener('click', () => {
    store_values(3);
    current_question_id += 1;
    if (current_question_id < quantity_questions) {
        
        go_to_question(current_question_id);
    } else {
        go_to_result();
    }
});

last_one.addEventListener('click', () => {
    current_question_id -= 1;
    go_to_question(current_question_id);
});

var start = true;
if (start) {
    current_question_id = 0;
    go_to_question(current_question_id);
};




