//твоя задача - создать функцию которая дает четыре базовые математические операции.
//Функция должна брать три аргумента - операцию (строка/символ)б значени1 число, значение 2 число
//Функция должна возвращать результат чисел после применения выбранного оператора.

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}