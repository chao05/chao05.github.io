const questions = new Array(
    {q: '请选择型号', a: ['dt700', 'dt710']},
    {q: "请选择一个颜色", a: ['不锈钢原色', '黑色', '抛光金色', '抛光原色']},
    {q: "请选择一个把手样式", a: ['G', 'U', 'J']}
);

const number_ensemble = new Array(
    {ex_number: '917.63.520', in_number: '917.63.270', model: 'dt700', color: '不锈钢原色', shape: 'G'},
    {ex_number: '917.63.620', in_number: '917.63.270', model: 'dt710', color: '不锈钢原色', shape: 'G'},
    {ex_number: '917.63.525', in_number: '917.63.275', model: 'dt700', color: '不锈钢原色', shape: 'U'},
    {ex_number: '917.63.625', in_number: '917.63.275', model: 'dt710', color: '不锈钢原色', shape: 'U'},
    {ex_number: '917.63.530', in_number: '917.63.280', model: 'dt700', color: '不锈钢原色', shape: 'J'},
    {ex_number: '917.63.630', in_number: '917.63.280', model: 'dt710', color: '不锈钢原色', shape: 'J'},
    {ex_number: '917.63.521', in_number: '917.63.271', model: 'dt700', color: '抛光金色', shape: 'G'},
    {ex_number: '917.63.621', in_number: '917.63.271', model: 'dt710', color: '抛光金色', shape: 'G'},
    {ex_number: '917.63.526', in_number: '917.63.276', model: 'dt700', color: '抛光金色', shape: 'U'},
    {ex_number: '917.63.626', in_number: '917.63.276', model: 'dt710', color: '抛光金色', shape: 'U'},
    {ex_number: '917.63.531', in_number: '917.63.281', model: 'dt700', color: '抛光金色', shape: 'J'},
    {ex_number: '917.63.631', in_number: '917.63.281', model: 'dt710', color: '抛光金色', shape: 'J'},
    {ex_number: '917.63.523', in_number: '917.63.273', model: 'dt700', color: '黑色', shape: 'G'},
    {ex_number: '917.63.623', in_number: '917.63.273', model: 'dt710', color: '黑色', shape: 'G'},
    {ex_number: '917.63.528', in_number: '917.63.278', model: 'dt700', color: '黑色', shape: 'U'},
    {ex_number: '917.63.628', in_number: '917.63.278', model: 'dt710', color: '黑色', shape: 'U'},
    {ex_number: '917.63.533', in_number: '917.63.283', model: 'dt700', color: '黑色', shape: 'J'},
    {ex_number: '917.63.633', in_number: '917.63.283', model: 'dt710', color: '黑色', shape: 'J'},

    {ex_number: {dt700: '', dt710: ''}, in_number: '', color: '抛光原色', shape: 'G'},
    {ex_number: {dt700: '', dt710: ''}, in_number: '', color: '抛光原色', shape: 'U'},
    {ex_number: {dt700: '', dt710: ''}, in_number: '', color: '抛光原色', shape: 'J'}
);

var current_color = new String();
var current_shape = new String();
var current_model = new String();

var result_ex = document.getElementById('result_ex');
var result_in = document.getElementById('result_in');
const result_ex_words = new String(result_ex.innerHTML);
const result_in_words = new String(result_in.innerHTML);

var selected_color = document.getElementById('selected_color');
var selected_shape = document.getElementById('selected_shape');
var selected_model = document.getElementById('selected_model');

var question = document.getElementById('question');
var op0 = document.getElementById('op0');
var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');

var op_ensemble = [op0, op1, op2, op3];

var current_question_id = new Number();
var button_id = new Number();

const try_again = document.getElementById('try_again');
try_again.addEventListener('click', () => {
    current_question_id = 0;
    disapper_final_page();
    go_to_question(current_question_id)

});

const last_one = document.getElementById('last_one');
last_one.addEventListener('click', () => {
    current_question_id -= 1;
    go_to_question(current_question_id)
});

function disapper_final_page() {
    document.getElementById('selected').style.display = 'none';
    document.getElementById('result').style.display = 'none'    
}

function disapper_question_page() {
    question.innerHTML = '';
    document.getElementById('option').style.display = 'none';
};

function go_to_question(current_question_id) {

    disapper_final_page();
    document.getElementById('option').style.display = 'block';
    question.innerHTML = questions[current_question_id].q;
    for (let index = 0; index < questions[current_question_id].a.length; index++) {
        op_ensemble[index].innerHTML = questions[current_question_id].a[index]        
    }
    if (current_question_id == 0) {
        document.getElementById('navigation').style.display = 'none';
        op0.style.display = 'inline';
        op1.style.display = 'inline';
        op2.style.display = 'none';
        op3.style.display = 'none';
    } else if (current_question_id == 1){
        document.getElementById('navigation').style.display = 'block';
        op0.style.display = 'inline';
        op1.style.display = 'inline';
        op2.style.display = 'inline';
        op3.style.display = 'none';
    } else {
        document.getElementById('navigation').style.display = 'block';
        op0.style.display = 'inline';
        op1.style.display = 'inline';
        op2.style.display = 'inline';
        op3.style.display = 'none';
    }
};

function go_to_result() {

    disapper_question_page();

    document.getElementById('selected').style.display = 'block';
    document.getElementById('result').style.display = 'block';
    result_ex.innerHTML = '';
    result_in.innerHTML = '';

    selected_model.innerHTML = '您选择的型号为：' + current_model;
    selected_color.innerHTML = '您选择的颜色为：' + current_color;
    selected_shape.innerHTML = '您选择的把手形状为：' + current_shape;

    for (let index = 0; index < number_ensemble.length; index++) {
        if (current_color == number_ensemble[index].color &
            current_shape == number_ensemble[index].shape &
            current_model == number_ensemble[index].model) {
        result_ex.innerHTML = result_ex_words + number_ensemble[index].ex_number;
        result_in.innerHTML = result_in_words + number_ensemble[index].in_number;
        break;
    }
    }
    
};

function store_current_value(button_id) {
    switch (current_question_id) {
        case 0:
            current_model = op_ensemble[button_id].innerHTML;
            break;
        case 1:
            current_color = op_ensemble[button_id].innerHTML;
            break;
        case 2:
            current_shape = op_ensemble[button_id].innerHTML;
            break;
        default:
            break;
    }
};

op0.addEventListener('click', () => {
    store_current_value(0);
    current_question_id += 1;
    if (current_question_id < questions.length) {
        
        go_to_question(current_question_id)
    } else {
        go_to_result()
    }
});
op1.addEventListener('click', () => {
    store_current_value(1);
    current_question_id += 1;
    if (current_question_id < questions.length) {
        
        go_to_question(current_question_id)
    } else {
        go_to_result()
    }
});
op2.addEventListener('click', () => {
    store_current_value(2);
    current_question_id += 1;
    if (current_question_id < questions.length) {
        
        go_to_question(current_question_id)
    } else {
        go_to_result()
    }
});
op3.addEventListener('click', () => {
    store_current_value(3);
    current_question_id += 1;
    if (current_question_id < questions.length) {
        
        go_to_question(current_question_id)
    } else {
        go_to_result()
    }
})

var start = new Boolean(true);
if (start) {
    current_question_id = 0;
    go_to_question(current_question_id);
};
