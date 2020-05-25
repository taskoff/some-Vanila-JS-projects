
const elements = {
    calc: document.getElementById('calculator'),
    output: document.getElementById('expressionOutput')
}
elements.calc.addEventListener('click', getElement) 


let fn = '';
const types = {
    'digit': (n) => {
        if (n==='.' && fn === '') {
            fn = '0'
        }
        fn += n
        },
    'clear': () => {
        fn = '';
    }
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

