//Grade Result
arrGrades = [80, 75, 79, 84, 97];
function ArrSum()
{
    let total = 0;
    let sum = 0;
    for (i = 0; i < arrGrades.length; i++)
    {
        total += arrGrades[i];
    }
    sum = total / arrGrades.length;
    return sum;
}
let average = ArrSum();

function Grade(average)
{
    if (average >= 93)
    {return (`${average}: A`)};
    if (average >= 87 && average <93)
    {return (`${average}: B`)};
    if (average >= 80 && average <87)
    {return (`${average}: C`)};
    if (average >= 70 && average <80)
    {return (`${average}: D`)};
    if (average < 70)
    {return (`${average}: F`)};
}
let grade = Grade()
console.log(Grade(average));
//---------------------------------------------------------------------
/*
//Bank Account Manager
let balance = 500;
//Check Balance Method
function ChkBalance()
{
    return balance;
}
currentBalance = ChkBalance();
console.log(`Starting Balance: $${currentBalance}`)

//Deposit Method
function Deposit(deposit)
{
    balance += deposit;
}
deposit = parseFloat(prompt("How much money do you wish to Deposit?"));
Deposit(deposit);
console.log(`Deposited: $${deposit}`)
depositBalance = ChkBalance();
console.log(`Balance After Deposit: $${depositBalance}`)

//Withdrawl Method
function Withdrawl(withdrawl)
{
    balance -= withdrawl;
}
withdrawl = parseFloat(prompt("How much money do you wish to Withdrawl?"));
Withdrawl(withdrawl);
console.log(`Withdrawled: $${withdrawl}`)
withdrawlBalance = ChkBalance();
console.log(`Balance After Deposit: $${withdrawlBalance}`)
*/
//Song Playlist
let songList = ["Tipsy", "Not Like US","Two Step", "My Type Of Party"]

function AddToList(songName)
{
    songList.push(songName);
}

function Delete(songPosition)
{
    songList.splice(songPosition, 1); //splice(0,1)The first number is the position where new elements should be added. The second number is how many elemtns shold be removed.
}

function DisplayList()
{
    for (let i = 0; i < songList.length; i++)
    {
        console.log(songList[i]);
    }
}
/*
DisplayList();
AddToList("Girl of My Dreams")
DisplayList();
*/
Delete(1);
DisplayList();

//Temp Converter
let tempNum = 25;
let temp = uniLetter = "C";

function celsiusToKelvin(value)
{
    return value + 273.15;
}
function celsiusToFarenheit(value)
{
    return (value * 9/5) + 32;
}
function TempConverter(currentTempValue, currentTempLetter)
{
    currentTempValue + " is the tempNum";
    currentTempLetter + " is the tempLetter";
    let celsius = 0;
    let farenheit = 0;
    let kelvin = 0;
    if (uniLetter === "C")
    {
        farenheit = celsiusToFarenheit(currentTempValue);
        kelvin = celsiusToKelvin(currentTempValue);
        celsius = currentTempValue;
        console.log(`Farenheit: ${farenheit} Kelvin: ${kelvin} Celsius: ${Celsius}`);
    }
}
//TempConverter(currentTempValue, uniLetter)
{

}
let storedKelvin = celsiusToKelvin(tempNum);
console.log(storedKelvin);
let storedFarenheit = celsiusToFarenheit(tempNum);
console.log(storedFarenheit);

//Daily Temperatures
let temperatures = [72, 75, 79, 83, 78, 85, 90];
function TempAverage()
{
    let tempTotal = 0;
    for (let i = 0; i < temperatures.length; i++)
    {
        tempTotal += temperatures[i];
    }
    return tempTotal
}
let temperatures = [72, 75, 79, 83, 78, 85, 90];
function TempAverage()
{
    let tempTotal = 0;
    for (let i = 0; i < temperatures.length; i++)
    {
        tempTotal += temperatures[i];
    }
    return tempTotal
}