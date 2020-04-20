'use strict';

function executeAll(e) {
  playSound(e);
  paintChange(e);
}

function playSound(e) {
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!sound) return;
  sound.currentTime = 0;
  sound.play();
}

function paintChange(e) {
  console.log(e.keyCode);
  console.log('current', e.currentTarget);

  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  console.log('key', key);

  key.classList.toggle('key-playing');

  // if (!e.keyCode) {
  //   key.classList.add('key-playing');
  // } else {
  //   key.classList.remove('key-playing');
  // }
}

window.addEventListener('keydown', executeAll);
