import mushroom from './assets/saxon.jpg';
import './styles.css';
import arr, { funcA } from './sub';

function component() {
  const element = document.createElement('label');

  element.textContent = 'Hallo';

  return element;
}

function imageComponent() {
  const element = document.createElement('img');

  element.src = mushroom;

  return element;
}

document.body.appendChild(component());
document.body.appendChild(imageComponent());
console.log(arr);
funcA();
