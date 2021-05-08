import refs from './refs';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const min = 0;
const max = colors.length - 1;
const SWITCH_DELAY = 1000;
let intervalId = null;




function onStartBtnClick() {
    refs.startBtnEl.disabled = true;
    intervalId = setInterval(() => {
    refs.bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
    }, SWITCH_DELAY);
}

 function onStopBtnClick() {
    refs.startBtnEl.disabled = false;
    clearInterval(intervalId);
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default {
    onStartBtnClick,
    onStopBtnClick,
}