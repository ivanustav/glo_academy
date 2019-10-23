function strProcessing(str) {
    if (checkString(str) === 'string') {
        let strO = str.replace(/\s/g, "");
        return trimStr(strO, 30);
    } else {
        return console.log('Вы ввели не строку!');
    }
    
    
}

function checkString(str) {
    ((typeof str) === 'string') ? console.log('норм') : console.log('ошибка');
    return typeof str;
}

function trimStr(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
}

console.log(strProcessing(12));
console.log(strProcessing('asdfafasf asfafsdfs ghdfgdfg rwerw'));