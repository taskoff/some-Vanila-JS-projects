
const elements = {
    calc: document.getElementById('calculator'),
    output: document.getElementById('expressionOutput')
}
elements.calc.addEventListener('click', getElement) 


let fn = '';
let sn = '';
let operator = '';
let result = '';
const operators = {
    '+': (a,b)=>{return Number(a)+Number(b);},
    '-': (a,b)=>{return Number(b)-Number(a)},
    '/': (a,b)=>{return Number(b)/Number(a);},
    '*': (a,b)=>{return Number(b)*Number(a);},
    
}

const types = {
    digit: (n) => {
        if (n==='.' && fn === '') {fn = '0'}
        fn += n
        },
    clear: () => {fn = '';},
    operation: o => {
        operator = o
        if (fn) {
            sn = fn;
            fn = ''
        }
    },
    'equal': makeOperation
}
    
    

function getElement(e) {
    let type = e.target.getAttribute('class');
    let value = e.target.value;
    types[type](value);

    addNum(fn)
}

function addNum(d) {
    elements.output.textContent = d;
}

function makeOperation(){
    if(fn && sn) {
        result = operators[operator](fn, sn);
        fn = result
     }
}

