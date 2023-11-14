// const one = document.getElementById('1');






function addToDisplay(input) {
    document.getElementById('screen').innerHTML += input
};

function delDisplay() {
    let del = document.getElementById('screen').innerHTML;
    let deletion = del.slice(0, -1);
    document.getElementById('screen').innerHTML = deletion;
}

function clearDisplay() {
    document.getElementById('screen').innerHTML = "";
};

function evaluateDisplay(){
    let display = document.getElementById('screen').innerHTML;
    let result = eval(display);
    document.getElementById('screen').innerHTML = result;
};