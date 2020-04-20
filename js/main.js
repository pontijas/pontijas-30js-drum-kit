'use strict';

function executeAll(e) {
  playSound(e);
  paintChange(e);
  removeChange(e);
}

function playSound(e) {
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!sound) return;
  sound.currentTime = 0;
  sound.play();
}

function paintChange(e) {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  key.classList.add('key-playing');
}

function removeChange(e) {
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => key.addEventListener('transitionend', removeChange));
  if (e.propertyName !== 'transform') return;
  this.classList.remove('key-playing');
}

window.addEventListener('keydown', executeAll);
