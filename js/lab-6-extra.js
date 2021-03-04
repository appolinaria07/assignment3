// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;
let i;

// COLLECT VALUES FROM USER
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
while (isNaN(investment) || investment < 0) {
    investment = parseFloat(prompt('Enter a valid numeric investment amount as xxxx.xx'));
}
rate = parseFloat(prompt('Enter interest rate as xx.x'));
while (isNaN(rate) || rate < 0 || rate > 15) {
    rate = parseFloat(prompt('Enter a valid interest rate that is between 0 and 15 as xx.x'));
}
years = parseInt(prompt('Enter the number of years'), 10);
while (isNaN(years) || years < 1 || years > 30) {
    years = parseInt(prompt('Enter the valid number of years between 1 and 30'), 10);
}

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 1; i <= years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}
futureValue = parseInt(futureValue, 10);

// DISPLAY THE RESULT
document.write(`Investment amount: $${investment}<br>`);
document.write(`Interest rate: ${rate}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value $${futureValue.toFixed(2)}<br>`);



