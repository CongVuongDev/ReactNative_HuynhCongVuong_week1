// Let's improve Steven's tip calculator even more, this time using loops!
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
};
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}
const calcAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};
const averageTotal = calcAverage(totals);
console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);
console.log("Average Total:", averageTotal.toFixed(2));