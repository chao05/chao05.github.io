
const Questions = [
    {
        q: "请选择一个颜色",
        a: ['satin', 'black', 'polished_brass', 'polished']
    },
    {
        q: "请选择一个把手样式",
        a: ['G', 'U', 'J']
    }
];

const quantity_questions = Questions.length;

const number_ensemble = [
    {number: '917.64.006', color: 'satin', shape: 'G', id: 0},
    {number: '917.64.051', color: 'satin', shape: 'U', id: 1},
    {number: '917.64.008', color: 'satin', shape: 'J', id: 2},
    {number: '917.64.200', color: 'black', shape: 'G', id: 3},
    {number: '917.64.202', color: 'black', shape: 'U', id: 4},
    {number: '917.64.204', color: 'black', shape: 'J', id: 5},
    {number: '917.64.257', color: 'polished_brass', shape: 'G', id: 6},
    {number: '917.64.258', color: 'polished_brass', shape: 'U', id: 7},
    {number: '917.64.259', color: 'polished_brass', shape: 'J', id: 8},
    {number: '917.64.201', color: 'polished', shape: 'G', id: 9},
    {number: '917.64.203', color: 'polished', shape: 'U', id: 10},
    {number: '917.64.205', color: 'polished', shape: 'J', id: 11}
]

var current_color = '';
var current_shape = '';

var result = document.getElementById('result');
var selected_color = document.getElementById('selected_color');
var selected_shape = document.getElementById('selected_shape');

var question = document.getElementById('question');

var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');

var op_ensemble = [op1, op2, op3, op4];
const op_id = ['op1', 'op2', 'op3', 'op4'];

var start = true;

if (start) {
    show_question(0)
};

const try_again = document.getElementById('try_again');
try_again.addEventListener('click', () => {
    
    document.getElementById('selected_color').innerHTML = '';
    document.getElementById('selected_shape').innerHTML = '';
    document.getElementById('result').innerHTML = '';
    
    for (let index = 0; index < op_ensemble.length; index++) {
        document.getElementById(op_id[index]).style.display = 'inline'
    };

    show_question(0)
})

function go_to_question(current_question_id) {

    if (current_question_id == 1) {
        question.innerHTML = Questions[current_question_id].q;

        for (let index = 0; index < op_id.length-1; index++) {
            op_ensemble[index].innerHTML = Questions[current_question_id].a[index]
        };

        document.getElementById('op4').style.display = 'none';
        document.getElementById('try_again').style.display = 'block'
    
    } else if (current_question_id == 0){
        
        question.innerHTML = Questions[current_question_id].q;
        
        for (let index = 0; index < op_id.length; index++) {
            op_ensemble[index].innerHTML = Questions[current_question_id].a[index]  
        };

        document.getElementById('try_again').style.display = 'none'
    }
};

function go_to_result() {

    document.getElementById('question').innerHTML = '';
    for (let index = 0; index < op_id.length-1; index++) {
        document.getElementById(op_id[index]).style.display = 'none';
    }
    
    selected_color.innerHTML = '您选择的颜色为：' + current_color;
    selected_shape.innerHTML = '您选择的把手形状为：' + current_shape;

    for (let index = 0; index < number_ensemble.length; index++) {
        if (current_color == number_ensemble[index].color &
            current_shape == number_ensemble[index].shape) {
        result.innerHTML = '应订购的编号为：' + number_ensemble[index].number;
        break;
    }
    }
};

function store_current_value(button_id) {
    
    if (question.innerHTML == Questions[0].q) {
        current_color = op_ensemble[button_id-1].innerHTML
    } else if (question.innerHTML == Questions[1].q)
    {
        current_shape = op_ensemble[button_id-1].innerHTML
    }
};

function show_question(current_question_id) {
    go_to_question(current_question_id);

    op1.addEventListener('click', () => {
        store_current_value(1);
        
        if (question.innerHTML != Questions[quantity_questions-1].q) {
            current_question_id += 1
            go_to_question(current_question_id);
        } else {
            go_to_result()
        }
    });

    op2.addEventListener('click', () => {
        store_current_value(2)
        
        if (question.innerHTML != Questions[quantity_questions-1].q) {
            current_question_id += 1
            go_to_question(current_question_id);
            
        } else {
            go_to_result()
        }
    });
    
    op3.addEventListener('click', () => {
        store_current_value(3)
        
        if (question.innerHTML != Questions[quantity_questions-1].q) {
            current_question_id += 1
            go_to_question(current_question_id);
            
        } else {
            go_to_result()
        }
    });
    
    op4.addEventListener('click', () => {
        store_current_value(4)
        
        if (question.innerHTML != Questions[quantity_questions-1].q) {
            current_question_id += 1
            go_to_question(current_question_id);
            
        } else {
            go_to_result()
        }
    })
}