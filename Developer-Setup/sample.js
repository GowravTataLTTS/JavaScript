'use strict';

console.log('Hello');

const tempsOne = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const tempsTwo = [-2, -6, -1, 9, 13, 17, 15, 14, 9, 5];

// Function to calculate the Temperature Amplitude
const calcTempAmplitude = function (temperaturesOne, temperaturesTwo) {
  const temperatures = temperaturesOne.concat(temperaturesTwo);
  let maxTemp = temperatures[0];
  let minTemp = temperatures[0];

  for (let i = 0; i < temperatures.length; i++) {
    const curTemp = temperatures[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > maxTemp) maxTemp = curTemp;
    if (curTemp < minTemp) minTemp = curTemp;
  }
  return maxTemp - minTemp;
};

const amplitude = calcTempAmplitude(tempsOne, tempsTwo);
// console.log(amplitude);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees Celsius')),
  };

  console.log(measurement);
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// console.log(measureKelvin());

/*
Given an input as follows [17, 21, 23],
expected output is  ...17 C in 1 days...21 C in 2 days...23 C in 3 days...
*/

function printForecast(arr) {
  let str = ' ';
  for (let i = 0; i < arr.length; i++) {
    str = str + `...${arr[i]} C in ${i + 1} days`;
  }

  console.log(str + '...');
}

printForecast([17, 21, 23]);
