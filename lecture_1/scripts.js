function z_1_1() {
    let numberOne = getNumber('Введите число');
    let numberTwo = getNumber('Введите систему счисления');
    if (numberOne && numberTwo && 2 <= numberTwo && numberTwo <= 36) {
        alert('Результат:' + numberOne.toString(numberTwo));
    } else {
        alert('Ошибка введённых значений');
    }
}

function z_1_2() {
    let numberOne = getNumber('Введите число');
    let numberTwo = getNumber('Введите систему счисления');
    let strInfo = '';
    if (numberOne && numberTwo) {
        strInfo = prompt('Введите текст', '');
        alert(strInfo + ' ' + (numberOne + numberTwo) + ' ' + (numberOne / numberTwo));
    } else {
        alert('Ошибка введённых значений');
    }
}

function getNumber(strQuery) {
    let resInput = prompt(strQuery, '');
    let result = parseInt(resInput);
    return (isNaN(result)) ? false : result;
}