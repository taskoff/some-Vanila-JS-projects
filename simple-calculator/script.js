
const elements = {
    calc: document.getElementById('calculator'),
    output: document.getElementById('expressionOutput')
}
elements.calc.addEventListener('click', getElement);
window.addEventListener('keydown', keyHandler); 

const staff = {
    fn: [0],
    sn: '',
    operator: '',
    result: '',
    numForDispaly: 0
}
const operators = {
    '+': (a,b)=>{return Number(a)+Number(b);},
    '-': (a,b)=>{return Number(b)-Number(a);},
    '/': (a,b)=>{return Number(b)/Number(a);},
    '*': (a,b)=>{return Number(b)*Number(a);},
    
}

const types = {
    digit: (n) => {
        staff.fn.push(n);
        if (staff.fn[0] === 0 && staff.fn[1] !== '.') {
            staff.fn.shift()
        }       
        staff.numForDispaly = staff.fn;
        },
    clear: () => {staff.fn = [0];
                staff.numForDispaly = staff.fn;
                staff.sn = '';
                staff.operator = '';},
    operation: o => {
        if (staff.fn !== 0 && staff.sn === '') {
            staff.operator = o
            staff.sn = staff.fn;
            staff.numForDispaly = staff.fn;
            staff.fn = [0];
        } else if(staff.fn !== 0 && staff.sn !== '') {
            makeOperation()
            staff.operator = o;
        }
    },
    'equal': makeOperation
}
    
    

function getElement(e) {
    let type = e.target.getAttribute('class');
    let value = e.target.value;
    types[type](value);

    addNum(staff.numForDispaly)
}

function addNum(d) {
    elements.output.textContent = d.join('');
}

function makeOperation(){
    if(staff.fn && staff.sn) {
        let a = Number(staff.sn.join(''));
        let b = Number(staff.fn.join(''));
        staff.sn = operators[staff.operator](b, a).toString().split();
        staff.numForDispaly = staff.sn;
        staff.fn = [0]
     }
}
const symbols = ['+', '-', '/', '*']
function keyHandler(e) {
    
    if (e.key == Number(e.key)) {
        let value = e.key;
        types['digit'](value);
        addNum(staff.numForDispaly)
        
    } else if (symbols.includes(e.key)) {
        types.operation(e.key);
    }
    console.log(e.key)
    // console.log(e.key)
}

