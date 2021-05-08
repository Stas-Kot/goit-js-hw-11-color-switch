import './sass/main.scss';
import refs from './js/refs';
import heandleFn from './js/switchColor';


refs.startBtnEl.addEventListener('click', heandleFn.onStartBtnClick);
refs.stopBtnEl.addEventListener('click', heandleFn.onStopBtnClick);




