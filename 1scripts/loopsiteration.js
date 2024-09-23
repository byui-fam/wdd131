//for loop
const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

//while loop
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

//forEachloop
studentReport.forEach((value) => {
    if (value < LIMIT) {
        console.log(value);
    }
});

//for..in loop
for (let index in studentReport) {
    if (studentReport[index] < LIMIT) {
        console.log(studentReport[index]);
    }
}

//Dynamic generation of the next DAYS (Monday, Tuesday, etc.) from today's date:
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let today = new Date();
for (let i = 0; i <= DAYS; i++) {
    let dayName = daysOfWeek[(today.getDay() + i) % 7];
    console.log(dayName);
}
