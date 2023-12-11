class Car {
    #manufacturer;
    #model;
    #year;
    #average_speed;

    constructor(manufacturer, model, year, average_speed) {
        this.#manufacturer = manufacturer;
        this.#model = model;
        this.#year = year;
        this.#average_speed = average_speed;
    }

    show() {
        console.log(`Manufacturer: ${this.#manufacturer}`);
        console.log(`Model: ${this.#model}`);
        console.log(`Year: ${this.#year}`);
        console.log(`Average speed: ${this.#average_speed}`);
    }

    timeCalculation(distance) {
        return Math.ceil(distance / this.#average_speed) + Math.floor(distance / (4 * this.#average_speed));
    }
}

let car1 = new Car('Audi', 'S', 2018, 120);
car1.show();
console.log(car1.timeCalculation(500));


class Fraction {
    #numerator;
    #denominator;

    constructor(numerator, denominator) {
        this.#numerator = numerator;
        this.#denominator = denominator;
    }

    add(n) {
        let resultN = this.#numerator * n.#denominator + n.#numerator * this.#denominator;
        let resultD = this.#denominator * n.#denominator;
        return new Fraction(resultN, resultD);
    }

    subtract(n) {
        let resultN = this.#numerator * n.#denominator - n.#numerator * this.#denominator;
        let resultD = this.#denominator * n.#denominator;
        return new Fraction(resultN, resultD);
    }

    multiply(n) {
        let resultN = this.#numerator * n.#numerator;
        let resultD = this.#denominator * n.#denominator;
        return new Fraction(resultN, resultD);
    }

    divide(n) {
        let resultN = this.#numerator * n.#denominator;
        let resultD = this.#denominator * n.#numerator;
        return new Fraction(resultN, resultD);
    }

    reduce() {
        let gcd = this.findGCD(this.#numerator, this.#denominator);
        this.#numerator /= gcd;
        this.#denominator /= gcd;

        return new Fraction(this.#numerator, this.#denominator);
    }

    findGCD(a, b) {
        return b === 0 ? a : this.findGCD(b, a % b);
    }
}

let a = new Fraction(6, 3);
let b = new Fraction(8, 4);

console.log(a.add(b));
console.log(a.subtract(b));
console.log(a.multiply(b));
console.log(a.divide(b));
console.log(a.reduce());


class FullTime {
    #hours;
    #minutes;
    #seconds;

    constructor(hours = 0, minutes = 0, seconds = 0) {
        if (!(hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60 && seconds >= 0 && seconds < 60)) {
            console.log('Ошибка!');
            return false;
        }

        this.#hours = hours < 10 ? '0' + hours : hours;
        this.#minutes = minutes < 10 ? '0' + minutes : minutes;
        this.#seconds = seconds < 10 ? '0' + seconds : seconds;
    }

    displayTime() {
        console.log(`${this.#hours} : ${this.#minutes} : ${this.#seconds}`);
    }

    addSeconds(s) {
        let result = this.getSeconds(this.#hours, this.#minutes, this.#seconds) + s;
        return this.setTime(result);
    }

    addMinutes(m) {
        let result = this.getSeconds(this.#hours, this.#minutes, this.#seconds) + m * 60;
        return this.setTime(result);
    }

    addHours(h) {
        let result = this.getSeconds(this.#hours, this.#minutes, this.#seconds) + h * 3600;
        return this.setTime(result);
    }

    getSeconds(a, b, c) {
        return (a * 3600) + (b * 60) + c;
    }

    setTime(n) {
        this.#hours = Math.floor(n / 3600) % 24;
        this.#minutes = Math.floor((n % 3600) / 60);
        this.#seconds = n % 60;

        this.#hours = this.#hours < 10 ? '0' + this.#hours : this.#hours;
        this.#minutes = this.#minutes < 10 ? '0' + this.#minutes : this.#minutes;
        this.#seconds = this.#seconds < 10 ? '0' + this.#seconds : this.#seconds;
    }
}

let time = new FullTime(20, 30, 45);
time.displayTime();

time.addSeconds(30);
time.displayTime();// Ожидаемый результат: "20 : 31 : 15"

time.addMinutes(25);
time.displayTime();// Ожидаемый результат: "20 : 56 : 15"

time.addHours(4);
time.displayTime();// Ожидаемый результат: "00 : 56 : 15"

