
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
    numForDispaly: 0,
    symbols: ['+', '-', '/', '*']
}
const operators = {
    '+': (a,b)=>{return Number(a)+Number(b);},
    '-': (a,b)=>{return Number(b)-Number(a);},
    '/': (a,b)=>{return Number(b)/Number(a);},
    '*': (a,b)=>{return Number(b)*Number(a);},
    
}

const types = {
    digit: (n) => {
        if (staff.fn.length<10) {
            staff.fn.push(n);
        }
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
            makeOperation(staff.operator)
            staff.operator = o;
        }
    },
    'equal': makeOperation
}
    
    

function getElement(e) {
    let type = e.target.getAttribute('class');
    let value = e.target.value !== '='? e.target.value : staff.operator;
    types[type](value);

    addNum(staff.numForDispaly)
}

function addNum(d) {
    console.log(d);
    if (d[0].length>10) {
        d[0]=d[0].substr(0,10)
    }
    elements.output.textContent = d.join('');
}

function makeOperation(o){
    if(staff.fn && staff.sn) {
        let a = Number(staff.sn.join(''));
        let b = Number(staff.fn.join(''));
        staff.sn = operators[o](b, a).toString().split();
        staff.numForDispaly = staff.sn;
        staff.fn = [0]
     }
}

function keyHandler(e) {
    
    if (e.key == Number(e.key) || e.key === '.') {
        let value = e.key;
        types['digit'](value);
        addNum(staff.numForDispaly)
    } else if (staff.symbols.includes(e.key)) {
        staff.operator = e.key;
        types.operation(e.key);
    } else if (e.key === 'Enter') {
        makeOperation(staff.operator);
        addNum(staff.sn)
    } else if (e.key === 'c') {
        types.clear()
        addNum(staff.numForDispaly)
    }
  
}

