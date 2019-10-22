'usestrict';

let money = 32000,
    income = 'Фриланс',
    addExpenses = 'Бензин, еда, спорт',
    deposit = true,
    mission = 1000000,
    period = 7,
budgetDay = money / 30;

do {
    money = prompt('Ваш месячный доход?', 50000); 
} while(isNaN(money) || money === '' || money === null);
money = +prompt('Ваш месячный доход?', '');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', '');
deposit = confirm('Есть ли у вас депозит в банке?', '');

console.log(typeof money);
console.log(typeof addExpenses);
console.log(typeof deposit);

let expensesSum1,
    expensesSum2,
    expensesObl2,
    expensesObl1;
    
expensesObl1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', '');
do {
    expensesSum1 = prompt('Во сколько это обойдется?', 2500); 
} while(isNaN(expensesSum1) || expensesSum1 === '' || expensesSum1 === null);

expensesObl2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', '');
do {
    expensesSum2 = prompt('Во сколько это обойдется?', 2500); 
} while(isNaN(expensesSum2) || expensesSum2 === '' || expensesSum2 === null);


let budgetMounth = money - expensesSum1 - expensesSum2;
console.log(budgetMounth);

let achievementGoal = mission / budgetMounth;
console.log(Math.ceil(achievementGoal));

budgetDay = budgetMounth / 30;
console.log(budgetDay);

if (budgetDay >= 800) {
    alert('Высокий уровень дохода');
} else if (budgetDay > 300 && budgetDay < 800) {
    alert('Средний уровень дохода');
} else if (budgetDay >= 0 && budgetDay <= 300) {
    alert('Низкий уровень дохода');   
} else {
    alert('Что-то пошло не так');
}