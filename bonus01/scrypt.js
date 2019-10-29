'usestrict';
// Задача №1

let appData = {
    numberOne: 0,
    numberTwo: 0,

    asking: function () {
        let numberOne,
        numberTwo;

        do {
            numberOne = prompt('Введите первое число', '0');
        } while(isNaN(numberOne) || numberOne === '' || numberOne === null);
    
        do {
            numberTwo = prompt('Введите второе число', '1');
        } while(isNaN(numberTwo) || numberTwo === '' || numberTwo === null);
    },  

    checkingNumber: function () {
        
        if (numberOne > numberTwo) {

        }

    }


};

