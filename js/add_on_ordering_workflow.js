var add_on_link = document.createElement('a')
add_on_link.innerHTML = '该处'
add_on_link.href = '/assets/app-hdm/FT200-add-on.html'

const words_before_link = new String('待产品部通知后，在');
const words_after_link = new String('下载宏文件');


const add_on_steps = new Array(
    {step_content: '获取AKC的序列号（卡片背面）', step_id: 0, material: 'add_on'},
    {step_content: '下宏（910.52.191）订单时将AKC的序列号添加在备注处', step_id: 1, material: 'add_on'},
    {step_content: '', step_id: 2, material: 'add_on'}
);
const akc_steps = new Array(
    {step_content: '使用编号917.64.980下单采购AKC', step_id: 0, material: 'akc'},
    {step_content: '下单后将outbound号码提供给产品部电子锁组', step_id: 1, material: 'akc'},
    {step_content: '产品部随后告知该订单采购的AKC之序列号', step_id: 2, material: 'akc'}
);

const question = new Object(document.getElementById('question'));
const answer_container = new Object(document.getElementById('answer'));
const button_yes = new Object(document.getElementById('button_yes'));
const button_no = new Object(document.getElementById('button_no'));
const button_next_step = new Object(document.getElementById('next_step'));
const button_try_again = new Object(document.getElementById('try_again'));
button_next_step.style.display = 'none'
button_try_again.style.display = 'none'

var current_step = new Object(document.getElementById('current_step'));
var current_step_id = new Number();
var current_material = new String();

function disappear_question_page() {
    question.style.display = 'none';
    answer_container.style.display = 'none'
}

function show_question_page() {
    question.style.display = 'block';
    answer_container.style.display = 'block'
}

button_yes.addEventListener('click', function () {
    button_next_step.style.display = 'inline'
    button_try_again.style.display = 'inline'
    disappear_question_page()
    current_step.innerHTML = add_on_steps[0].step_content
    current_step_id = add_on_steps[0].step_id
    current_material = add_on_steps[0].material
})

button_no.addEventListener('click', function () {
    button_next_step.style.display = 'inline'
    button_try_again.style.display = 'inline'
    disappear_question_page()
    current_step.innerHTML = akc_steps[0].step_content
    current_step_id = akc_steps[0].step_id
    current_material = akc_steps[0].material
})

button_next_step.addEventListener('click', function () {
    if (current_step_id == 1 &
        current_material == 'add_on') {
        button_next_step.style.display = 'none'
    }
    current_step_id += 1
    switch (current_material) {
        case 'add_on':
            if (current_step_id < add_on_steps.length) {
                if (current_step_id != 2) {
                    current_step.innerHTML = add_on_steps[current_step_id].step_content
                } else {
                    current_step.innerHTML = words_before_link
                    current_step.appendChild(add_on_link)
                    current_step.innerHTML = current_step.innerHTML+words_after_link
                }
            }
            break;
        case 'akc':
            if (current_step_id < akc_steps.length) {
                current_step.innerHTML = akc_steps[current_step_id].step_content
            } else {
                current_step_id = 1
                current_material = 'add_on'
                current_step.innerHTML = add_on_steps[current_step_id].step_content
            }
            break;
        default:
            break;
    }
    
})

button_try_again.addEventListener('click', function () {
    button_try_again.style.display = 'none'
    button_next_step.style.display = 'none'
    show_question_page()
    current_step.innerHTML = ''
})