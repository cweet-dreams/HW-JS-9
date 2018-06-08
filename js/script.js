//Замыкание. Задачи

//1
getBigName(userName);

function getBigName(name) {
    console.log(name);
    name = name + '';
    console.log(name);
    return name.toUpperCase()
}

var userName = 'Ivan';
//данный код выводит undefined, потому что на момент вызова функции, переменная userName не объявлена;

//2
function test() {
    var name = 'Vasiliy';
    return getBigName(userName);
}

function getBigName(name) {
    name = name + '';
    return name.toUpperCase();
}

var userName = 'Ivan';
test();

//Функция test() вернет 'IVAN', потому что она видит в своем ликсическом значение переменной для userName

//3

var food = 'cucumber';

(function () {
    var food = 'bread';
    getFood();
})();

function getFood() {
    console.log(food);
}

//getFood выведет 'cucumber', потому что функция вызвана в глобальном окружении, а в нем значение переменной food - 'cucumber';

//part2.1

var dollar,
    getDollar;

(function () {
    var dollar = 0;
    getDollar = function () {
        return dollar;
    }
})();

dollar = 30;
getDollar();//вернет 0, потому что в окружении getDollar, dollar = 0;

//2

var greet = 'Hello';
(function () {
    var text = ' World';
    console.log(greet + text);//выведет "Hello World", greet возмет из глобального окружения, а text из лексического окружения;

})();

//console.log(greet + text);//выведет ошибку, так складывет greet с необъявленной переменной text;

//3

function minus(first) {
    return function (second) {
        if (!first && !second) {
            return 0;
        } else if (!first || !second) {
            return first || second;
        } else return Number(first) - Number(second);
    }
}

minus(10)(6);
minus(5)(6);
minus(10)();
minus()(6);
minus()();

//4

function MultiplyMaker(numb) {
    let counter = numb;
    return function (numb2) {
        return counter *= numb2
    }
}

const multiply = MultiplyMaker(2);

console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));

//5

const stringMaker = (function () {
    let newString = "";

    function setString(string) {
        if (!string) {
            newString = "";
        } else if (typeof(string) === "number") {
            newString = "" + string;
        } else {
            newString = string;
        }
        return newString;
    }

    function getString() {
        return newString;
    }

    function getStringLength() {
        return newString.length;
    }

    function stringReverse() {
        let res = '';
        for (let i = newString.length - 1; i >= 0; i--) {
            res += newString[i];
        }
        return res;
    }

    return {
        setString: setString,
        getString: getString,
        getStringLength: getStringLength,
        stringReverse: stringReverse
    }
})();
console.log(stringMaker.setString('hello'));
console.log(stringMaker.getString());
console.log(stringMaker.getStringLength());
console.log(stringMaker.stringReverse());

//6

const calculator = (function () {
    let result;

    function setNumber(number) {
        result = number;
        return this;
    }

    function add(number) {
        result += number;
        return this;
    }
    function remove(number) {
        result -= number;
        return this;
    }
    function multiply(number) {
        result *= number;
        return this;
    }
    function divide(number) {
        result /= number;
        return this;
    }
    function expon() {
        result = result * result;
        return this;
    }
    function getResult() {
        return result.toFixed(2);
    }

    return {
        setNumber,
        add,
        remove,
        multiply,
        divide,
        expon,
        getResult
    }
})();


console.log(calculator.setNumber(10));
console.log(calculator.add(5));
console.log(calculator.multiply(2));
console.log(calculator.getResult());

console.log(calculator.setNumber(10).expon(2).getResult());
